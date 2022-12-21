import { Link } from "react-router-dom";

const HistoricalQuestions = ({ history }) => {
  return (
    <div className="HistoricalQuestions">
      <ol>
        {history.map((response) => (
          <li key={response.response_id}>
            <Link to={"/details/" + response.response_id}>
              Q: {response.question}
              <br />
              A: {response.answer}
            </Link>{" "}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HistoricalQuestions;
