import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h3> Welcome! </h3> Is your project manager too busy to talk to you right
      now? Do you have a burning question about what you're supposed to be
      doing? Then look no furter! What would my PM say? (WWMPS) is a state of
      the art AI system that has learnt from 1000s of project managers
      throughout time and across the globe. It has distilled and refined all
      this knowledge and is ready to dispense these life changing and invaluable
      insights to you, yes you, at a moment's notice. Head over to the{" "}
      <Link to="/ask">Ask a Question</Link> page if you have a burning question
      yourself, or see what bits of wisdom have already been devulged to others
      in the
      <Link to="/history"> Previously Asked Questions</Link> page!
    </div>
  );
};

export default Home;
