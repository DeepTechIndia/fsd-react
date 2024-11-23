import UserProfile from "./UserProfile";

const App = () => {
  const users = [
    {
      id: 1,
      name: "Roopesh",
      avatar: "https://via.placeholder.com/150",
      bio: "Web developer passionate about building scalable application",
    },

    {
      id: 2,
      name: "Raksha",
      avatar: "https://via.placeholder.com/150",
      bio: "UI/UX designer with a knack for beautiful interfaces",
    },
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">User Profiles</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {users.map((user) => (
          <UserProfile
            key={user.id}
            name={user.name}
            avatar={user.avatar}
            bio={user.bio}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
