import useFetch from "./useFetch";
import HistoricalQuestions from "./HistoricalQuestions";
const History = () => {
  const {
    data: historicalQuestions,
    isPending: isHistoryLoading,
    error: historyLoadingError,
  } = useFetch("http://localhost:8000/historical_questions");
  return (
    <div className="history">
      {isHistoryLoading && <div> Loading...</div>}
      {historicalQuestions && (
        <HistoricalQuestions history={historicalQuestions} />
      )}
      {historyLoadingError && <div>{historyLoadingError}</div>}
    </div>
  );
};

export default History;
