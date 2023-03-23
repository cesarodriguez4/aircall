import React, { useEffect } from 'react';
import { ArchiveOneCall, GetActivities, ResetActivities } from '../../services/ActivitiesService.js';
import { TabContent } from './components/TabContent.jsx';
import { TabNav } from './components/TabNav.jsx';

export function Feed() {
    const [selectedTab, setSelectedTab] = React.useState('inbox');
    const [callHistory, setCallHistory] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [isLoading, setLoading] = React.useState(false);

    useEffect(() => {
        getActivities();
    }, []);

    const onTabSelectionChange = (tabName) => {
        setSelectedTab(tabName);
    };

    const getActivities = () => {
        setLoading(true);
        GetActivities().then((activities) => {
            setCallHistory(segregateByDate(activities.data));
        }
        ).catch((error) => {
            setError(error);
        }).finally(() => {
            setLoading(false);
        });
    };

    const segregateByDate = (history) => {
        const segregatedByDates = [];
        for (let i = 0; i < history.length; i++) {
            const date = history[i].created_at.split('T')[0];
            if (segregatedByDates[date]) {
                segregatedByDates[date].push(history[i]);
            } else {
                segregatedByDates[date] = [history[i]];
            }
        }
        return segregatedByDates;
    };

    const onUnArchiveAll = () => {
        setLoading(true);
        ResetActivities().then().catch((error) => {
            setError(error);
        }
        ).finally(() => {
            setLoading(false);
            getActivities();
        });
    };

    const onArchiveAll = () => {
        const dates = Object.keys(callHistory);
        const idsToUpdate = []; 
        // Need to use promise-all if is_archived is false
        // First check for ids to update
        for (let i = 0; i < dates.length; i++) {
            const calls = callHistory[dates[i]];
            for (let j = 0; j < calls.length; j++) {
                if (!calls[j].is_archived) {
                    idsToUpdate.push(calls[j].id);
                }
            }
        }
        // Use promise all to update all ids
        setLoading(true);
        Promise.all(idsToUpdate.map((id) => ArchiveOneCall(id, true))).finally(() => {
            setLoading(false);
            setCallHistory([]);
        });
    }

    return <div className='feed-view'>
        <TabNav tab={selectedTab} onSelectedTab={onTabSelectionChange} />
        <TabContent
            onUnArchiveAll={onUnArchiveAll}
            onArchiveAll={onArchiveAll}
            isLoading={isLoading}
            tab={selectedTab}
            error={error}
            callHistory={callHistory} 
        />
    </div>;
}