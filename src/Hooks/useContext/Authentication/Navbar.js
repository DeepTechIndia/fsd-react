import { useContext } from "react";
import AuthContext from "./AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.username}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please Log in</p>
      )}
    </div>
  );
};

export default Navbar;
