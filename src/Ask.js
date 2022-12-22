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
    }).then(() => console.log("question submited"));

    const randomResponseIndex = Math.ceil(Math.random() * responses.length);
    const response = responses[randomResponseIndex];
    alert("Q: " + question + "\n" + "A: " + response);
  };

  return (
    <main>
      Please input your question:
      <br />
      <form onSubmit={handleSubmit}>
        <textarea
          name="question"
          id="main-question"
          cols="30"
          rows="10"
          value={question}
          onChange={(ev) => setQuestion(ev.target.value)}
        ></textarea>
        <br />
        <button>What would my PM say?</button>
      </form>
    </main>
  );
};

export default Ask;
