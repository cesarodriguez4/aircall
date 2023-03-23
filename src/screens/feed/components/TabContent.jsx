import React from 'react';
import { Inbox } from './Inbox.jsx';

export function TabContent({tab, callHistory, isLoading, error, onUnArchiveAll, onArchiveAll}) {
    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }
    if (error) {
        return <div>An Error has occurred, try later.</div>;
    }
    if (tab === 'inbox' || tab === 'archived') {
      return <Inbox
                onUnArchiveAll={onUnArchiveAll}
                onArchiveAll={onArchiveAll}
                showArchived={tab === 'archived'}
                callHistory={callHistory}
            />;
    } else {
        return <div>No Content</div>;
    }
};