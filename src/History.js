import useFetch from "./useFetch";
import Response from "./Response";
import { useState, useEffect } from "react";
const History = () => {
  const [sortAsc, setSortAsc] = useState(true);
  const [evenUpvotePostsOnly, setEvenUpvotePostsOnly] = useState(false);

  const toggleSorting = () => setSortAsc(!sortAsc);

  const toggleEvenUpvotePostsOnly = () =>
    setEvenUpvotePostsOnly(!evenUpvotePostsOnly);

  const {
    data: historicalQuestions,
    isPending: isHistoryLoading,
    error: historyLoadingError,
  } = useFetch("http://localhost:8080/questions/");

  return (
    <div className="History">
      <button onClick={toggleSorting}>Reverse Sorting</button>
      <button onClick={toggleEvenUpvotePostsOnly}>
        Toggle displaying only posts with even up votes
      </button>
      {isHistoryLoading && <div> Loading...</div>}
       {historicalQuestions && (
        <ol>
          {historicalQuestions
            .sort((a, b) => {
              if (sortAsc) {
                return b.votes - a.votes;
              } else {
                return a.votes - b.votes;
              }
            })
            .filter((resp) => {
              if (evenUpvotePostsOnly === true) {
                return resp.votes % 2 === 0;
              } else {
                return true;
              }
            })
            .map((response) => (
              <li key={response.id}>
                <Response response={response} />
              </li>
            ))}
        </ol>
      )}
      {historyLoadingError && <div>{historyLoadingError}</div>}
    </div>
  );
};

export default History;
