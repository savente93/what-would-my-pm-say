import { useState } from "react";

const Ask = () => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    fetch("http://localhost:8000/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    }).then(() => console.log("question submited"));
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
      <br />
      Your question repeated:
      <br />
      {question}
    </main>
  );
};

export default Ask;
