import { useContext } from "react";
import AuthContext from "./AuthContext";

const UserProfile = () => {
  const { user, login } = useContext(AuthContext);
  return (
    <div>
      {user ? (
        <div>
          <h1>User profile</h1>
          <p>Username: {user.username}</p>
        </div>
      ) : (
        <button onClick={() => login("JhonWick")}>Login</button>
      )}
    </div>
  );
};

export default UserProfile;
