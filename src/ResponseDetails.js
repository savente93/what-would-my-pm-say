import { useParams } from "react-router-dom";

const ResponseDetails = () => {
  const { id } = useParams();

  return <div className="details">some detail about response {id}</div>;
};

export default ResponseDetails;
