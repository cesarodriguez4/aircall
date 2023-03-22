import React from 'react';
import { TabContent } from './components/TabContent.jsx';
import { TabNav } from './components/TabNav.jsx';

export function Feed() {
    return <div>
        <TabNav />
        <TabContent />
    </div>;
}