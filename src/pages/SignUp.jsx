import { Link } from 'react-router-dom';

export default function SignUp() {
  return(
    <div>
      <div>
        Create your PopX account
      </div>
      <input placeholder="Full Name" />
      <input placeholder="Phone Number" />
      <input placeholder="Email address" />
      <input placeholder="Password" />
      <input placeholder="Company Name" />
       <p>Are you a company</p>
      <label>
        <input type="radio" value="yes" ></input>
        Yes
      </label><br></br><br></br>
      <label>
        <input type="radio" value="no"></input>
        No
      </label>
      <Link to="/dashboard">
        <button>
          Create Account
        </button>
      </Link>
    </div>
  );
}