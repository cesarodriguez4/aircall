import React from "react";

export function TabNav() {
    return <div className="tabnav">
        <div className="activity">
            <img width={30} src="public/call.svg" />
            Activity
        </div>
        <div className="tabs">
            <div>
                Inbox
            </div>
            <div className="vertical-divider"></div>
            <div>
                Archived
            </div>
            <div className="vertical-divider"></div>
            <div>
                <img width={20} src="public/settings.svg"></img>
            </div>
        </div>
    </div>;
};