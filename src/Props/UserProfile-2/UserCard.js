import UserDetails from "./UserDetails";

const UserCard = ({ user }) => {
  return (
    <div className="card mt-4">
      <div className="card-header bg-primary text-white">
        <h3>{user.name}</h3>
      </div>
      <div className="card-body">
        <UserDetails user={user}/>
      </div>
    </div>
  );
};

export default UserCard;
