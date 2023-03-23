import React from 'react';
import { Inbox } from './Inbox.jsx';

export function TabContent({tab, callHistory, isLoading, error}) {
    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }
    if (error) {
        return <div>An Error has occurred, try later.</div>;
    }
    if (tab === 'inbox') {
      return <Inbox callHistory={callHistory} />;
    } else {
        return <div>No Content</div>;
    }
};