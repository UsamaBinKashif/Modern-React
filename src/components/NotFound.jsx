import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1
       
      >
        404 Not Found
      </h1>
      <Link to="/" className="n-link">Go Back To Homepage</Link>
    </div>
  );
};

export default NotFound;
