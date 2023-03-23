import React, { useEffect } from 'react';
import { GetActivities } from '../../services/ActivitiesService.js';
import { TabContent } from './components/TabContent.jsx';
import { TabNav } from './components/TabNav.jsx';

export function Feed() {
    const [selectedTab, setSelectedTab] = React.useState('inbox');
    const [callHistory, setCallHistory] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [isLoading, setLoading] = React.useState(false);

    useEffect(() => {
        function fetchData() {
            setLoading(true);
            GetActivities().then((activities) => {
                setCallHistory(segregateByDate(activities.data));
            }
            ).catch((error) => {
                setError(error);
            }).finally(() => {
                setLoading(false);
            }
            );
        }
        fetchData();
    }, []);

    const onTabSelectionChange = (tabName) => {
        setSelectedTab(tabName);
    };

    const segregateByDate = (history) => {
        // The params are call_type, created_at, direction, duration, from, id, is_archived, to and via
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

    return <div className='feed-view'>
        <TabNav tab={selectedTab} onSelectedTab={onTabSelectionChange} />
        <TabContent isLoading={isLoading} tab={selectedTab} error={error} callHistory={callHistory} />
    </div>;
}