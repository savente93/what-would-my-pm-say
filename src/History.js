import useFetch from "./useFetch";
import Response from "./Response";
import { useState } from "react";
const History = () => {
  const [sortAsc, setSortAsc] = useState(true);
  const [evenUpvotePostsOnly, setEvenUpvotePostsOnly] = useState(false);

  const toggleSorting = () => {
    if (sortAsc) {
      setSortAsc(false);
    } else {
      setSortAsc(true);
    }
  };

  const toggleEvenUpvotePostsOnly = () => {
    if (evenUpvotePostsOnly) {
      setEvenUpvotePostsOnly(false);
    } else {
      setEvenUpvotePostsOnly(true);
    }
  };

  const {
    data: historicalQuestions,
    isPending: isHistoryLoading,
    error: historyLoadingError,
  } = useFetch("http://localhost:8000/historical_questions");
  return (
    <div className="History">
      <button onClick={toggleSorting}>Reverse Sorting</button>
      <button onClick={toggleEvenUpvotePostsOnly}>
        Tobble displaying only posts with even upvotes
      </button>
      {isHistoryLoading && <div> Loading...</div>}
      {historicalQuestions && (
        <ol>
          {historicalQuestions
            .sort((a, b) => {
              if (sortAsc) {
                return b.upvotes - a.upvotes;
              } else {
                return a.upvotes - b.upvotes;
              }
            })
            .filter((resp) => {
              if (evenUpvotePostsOnly === true) {
                return resp.upvotes % 2 === 0;
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
