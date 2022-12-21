import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState, useEffect } from "react";

const ResponseDetails = () => {
  const { id } = useParams();
  const [response, setresponse] = useState(null);
  const { allResponses, isLoadingResponse, Error } = useFetch(
    "http://localhost:8000/historical_questions/"
  );

  //   useEffect(() => {
  //     setresponse(allResponses.filter((r) => r.response_id !== id));
  //   }, [allResponses]);

  return (
    <div className="details">
      <p>
        <b>Question: </b>
        <br />
        {response && response.question}
      </p>
      <p>
        <b>Answer: </b>
        <br />
        {response && response.answer}
      </p>
    </div>
  );
};

export default ResponseDetails;
