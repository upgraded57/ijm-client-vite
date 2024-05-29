import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Unfortunately!</h2>
      <p>
        The page you&apos;re looking for is not here yet. Come check back later
      </p>
      <Link to="/">Return Home</Link>
    </div>
  );
}
