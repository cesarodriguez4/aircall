import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArchiveOneCall, GetCallDetails } from "../../services/ActivitiesService";

export function CallDetails() {
  const [loading, setLoading] = React.useState(false);
  const [callData, setCallData] = React.useState([]);
  const [isArchived, setIsArchived] = React.useState(false);
  const [error, setError] = React.useState(null);

  const {id} = useParams();


  useEffect(() => {
    function fetchData() {
        setLoading(true);
        GetCallDetails(id).then((call) => {
            setCallData(call.data);
            setIsArchived(call.data.is_archived);
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

  const onArchiveCall = (id, bool) => {
    setLoading(true);
    ArchiveOneCall(id, bool).then(() => {
        setIsArchived(bool);
    }
    ).catch((error) => {
        setError(error);
    }).finally(() => {
        setLoading(false);
    });
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">An error has ocurred, try again.</div>;
  }

  return <div className="call-details">
    <h1>Call Details</h1>
    <p>Call ID: {id}</p>
    <p>
      Call type: <b>{callData.call_type}</b>
    </p>
    <p>
      Call from: <b>{callData.from}</b>
    </p>
    <p>
      Call to: <b>{callData.to}</b>
    </p>
    <p>
      Call duration: <b>{callData.duration}s</b>
    </p>
    <p>
      Via: <b>{callData.via}</b>
    </p>
    <p>
      Is Archived: <b>{isArchived ? 'True' : 'False'}</b>
    </p>
    <button onClick={() => onArchiveCall(id, !callData.is_archived) } className="archive-button">
      {
        isArchived ? 'Unarchive Call' : 'Archive Call'
      }
    </button>
  </div>;
}