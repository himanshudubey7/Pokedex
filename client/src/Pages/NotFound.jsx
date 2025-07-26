import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <div className="notfound-subtitle">Page not found...</div>
      <button className="notfound-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}

export default NotFound;
