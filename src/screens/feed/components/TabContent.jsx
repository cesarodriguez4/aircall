import React from 'react';
import { Inbox } from './Inbox.jsx';

export function TabContent({tab, callHistory}) {
    if (tab === 'inbox') {
      return <Inbox callHistory={callHistory} />;
    } else {
        return <div>TabContent</div>;
    }
};