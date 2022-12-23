import { BiUpvote } from "react-icons/bi";
import {useState} from "react";

const Response = ({ response,updateVote }) => {
  const [respVote, setRespVote] = useState(response.votes);

    const handleSubmit = (ev) => {
    ev.preventDefault();
    fetch("http://localhost:8080/questions/" + response.id + "/vote", {
      method: "POST"
    }).then(resp => resp.json()).then(j => {
        response = j['data']
        setRespVote(response.votes)
        updateVote(response.id, response.votes)
    }).catch((err) => console.log(err));
  };

  return (
    <div className="Response">
      Q: {response.question}
      <br />
      A: {response.answer} <br />{" "}
      <form onSubmit={handleSubmit}>
        <button>
          <BiUpvote /> {respVote}
        </button>
      </form>
    </div>
  );
};

export default Response;
