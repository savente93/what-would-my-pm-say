import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <h1>What would my PM say?</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/ask">Ask a Question</Link>
        <Link to="/history">See previous Q&As</Link>
      </nav>
    </div>
  );
};

export default Banner;
