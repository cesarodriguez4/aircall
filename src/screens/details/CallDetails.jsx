import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetCallDetails } from "../../services/ActivitiesService";

export function CallDetails() {
  const [loading, setLoading] = React.useState(false);
  const [callData, setCallData] = React.useState([]);
  const [error, setError] = React.useState(null);

  const {id} = useParams();


  useEffect(() => {
    function fetchData() {
        setLoading(true);
        GetCallDetails(id).then((call) => {
            setCallData(call.data);
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

  // if (!callData) {
  //   return <div>Select a call item from the Feed to show information</div>;
  // }


  return <div>
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
      Is Archived: <b>{callData.is_archived ? 'True' : 'False'}</b>
    </p>

    <button>Archive call</button>
  </div>;
}