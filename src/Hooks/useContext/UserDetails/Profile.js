import { useContext } from "react";
import { UserContext } from "./App";

function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email:{user.email}</p>
      
    </div>
  );
}

export default Profile;
