import { BiUpvote } from "react-icons/bi";

const Response = ({ response }) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newResponse = response;
    newResponse.upvotes += 1;
    const body = JSON.stringify(newResponse);
    console.log(body);
    fetch("http://localhost:8000/historical_questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
  };

  return (
    <div className="Response">
      Q: {response.question}
      <br />
      A: {response.answer} <br />{" "}
      <form onSubmit={handleSubmit}>
        <button>
          <BiUpvote /> {response.upvotes}
        </button>
      </form>
    </div>
  );
};

export default Response;
