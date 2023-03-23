import React from "react";

export function TabNav({onSelectedTab, tab}) {
    return <div className="tabnav">
        <div className="activity">
            <img width={30} src="public/call.svg" />
            Activity
        </div>
        <div className="tabs">
            <div className={tab === 'inbox' ? 'active' : ''} onClick={() => onSelectedTab('inbox')}>
                Inbox
            </div>
            <div className="vertical-divider"></div>
            <div className={tab === 'archived' ? 'active' : ''} onClick={() => onSelectedTab('archived')}>
                Archived
            </div>
            <div className="vertical-divider"></div>
            <div>
                <img width={20} src="public/settings.svg"></img>
            </div>
        </div>
    </div>;
};