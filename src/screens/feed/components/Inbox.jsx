import React from 'react';

export function Inbox({callHistory}) {
    return <div className='inbox'>
            {
            Object.keys(callHistory).map((key) => {
                const date = new Date(key);
                return <div className='month' key={key}>
                    <div className='date'>
                        {
                        date.toLocaleDateString(
                            'en-US',
                            {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })
                        }
                    </div>
                    {
                    callHistory[key].map((call) => {
                        const time = new Date(call.created_at);
                        return <div className='item' key={call.id}>
                            <div>
                                {call.call_type === 'missed' && <img width={20} src="public/outbound.svg" />}
                                {call.call_type === 'answered' && <img width={20} src="public/inbound.svg" />}
                                {call.call_type === 'voicemail' && <img width={20} src="public/outbound.svg" />}
                            </div>
                            <div>
                                <div>{call.from}</div>
                                <div>
                                    tried to call on {call.to}
                                </div>
                            </div>
                            {
                                time.toLocaleTimeString(
                                    'en-US',
                                    {
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        hour12: true
                                    })
                            }
                        </div>;
                    }
                    )}
                </div>;
            })}
    </div>;
}