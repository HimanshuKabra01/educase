import { Link } from "react-router-dom";

export default function Home() {
  return(
    <div className="flex">
      <div>
        Welcome to PopX
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </div>
      <Link to="/signup">
        <button>
          Create Account
        </button>
      </Link>
      <Link to="/login">
        <button>
          Already Registered? Login
        </button>
      </Link>
    </div>
  );
}