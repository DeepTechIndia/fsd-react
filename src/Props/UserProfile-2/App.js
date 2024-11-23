import UserCard from "./UserCard";

const App = () => {
  const userData = {
    name: "Pradeep",
    email: "pradeep@gmail.com",
    address: "123 Main Street, Bengalore",
  };

  return (
    <div className="container mt-5">
      <h1>User Profile Dashboard</h1>
      <UserCard user={userData} />
    </div>
  );
};

export default App;
