const UserProfile = ({ name, avatar, bio }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px auto" }}>
      <img src={avatar} className="card-image-top" alt={name} />
      <div className="card-boody">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{bio}</p>
        <button className="btn btn-primary">Follow</button>
      </div>
    </div>
  );
};
export default UserProfile;
