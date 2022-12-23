import {useEffect, useState} from "react";

const Ask = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (answer) {
      setAnswer("")
    }
  }, [question])

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!question) {
      alert("Please input a question.");
      return;
    }
    const body = JSON.stringify({ question });
    fetch("http://localhost:8080/questions/", {
      method: "POST",
      body: body,
    }).then(r => r.json()).then(data => {
      setAnswer(data['data'].answer);
      return data['data'].answer;
    }).then(a => alert("Q: " + question + "\nA: " + a)).catch((err) => console.log(err));
  };

  return (
    <main className="Ask">
      <h3>Please input your question: </h3>

      <form onSubmit={handleSubmit}>
        <p>
          <textarea
            name="question"
            id="main-question"
            cols="30"
            rows="10"
            value={question}
            onChange={(ev) => setQuestion(ev.target.value)}
          ></textarea>
        </p>
        <p>
          <button>What would my PM say?</button>
        </p>
        { question && answer && <p>To the question "{question}" your PM would answer: {answer} Thus I have spoketh!!! </p>}
      </form>
    </main>
  );
};

export default Ask;
