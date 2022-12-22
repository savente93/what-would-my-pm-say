import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const Ask = () => {
  const [question, setQuestion] = useState("");
  const {
    data: responses,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/responses");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const body = JSON.stringify({ question });
    fetch("http://localhost:8000/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });

    if (question) {
      const randomResponseIndex = Math.floor(Math.random() * responses.length);
      const response = responses[randomResponseIndex];
      alert("Q: " + question + "\n" + "A: " + response);
    } else {
      alert("Please input a question.");
    }
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
      </form>
    </main>
  );
};

export default Ask;
