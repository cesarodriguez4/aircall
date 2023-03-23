import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Inbox({callHistory, showArchived}) {
    const  navigate = useNavigate();
    const goToDetails = (id) => {
        navigate(`/details/${id}`);
    };

    return <div className='inbox'>
            <div className='archive-button'>
                <img width={20} src="public/archive.svg" alt="archive" />
                {showArchived ? 'Unarchive all calls' : 'Archive all calls'}
            </div>
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
                        return <div onClick={() => goToDetails(call.id) } className='item' key={call.id}>
                            <div>
                                {call.call_type === 'missed' && <img width={20} src="public/outbound.svg" />}
                                {call.call_type === 'answered' && <img width={20} src="public/inbound.svg" />}
                                {call.call_type === 'voicemail' && <img width={20} src="public/outbound.svg" />}
                            </div>
                            <div>
                                <div className='from'><b>{call.from}</b></div>
                                <div className='to'>
                                    tried to call on <b>{call.to}</b>
                                </div>
                            </div>
                            <div style={{marginTop: '0.5em'}} className="vertical-divider"></div>
                            <div className='time'>
                            {
                                time.toLocaleTimeString(
                                    'en-US',
                                    {
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        hour12: true
                                    })
                            }
                            </div>
                        </div>;
                    }
                    )}
                </div>;
            })}
    </div>;
}