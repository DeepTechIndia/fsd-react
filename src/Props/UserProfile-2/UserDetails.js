const UserDetails = ({ user }) => {
  return (
    <div>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Address:</strong> {user.address}
      </p>
    </div>
  );
};

export default UserDetails;
