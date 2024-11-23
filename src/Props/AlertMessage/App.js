import AlertMessage from "./AlertMessage";

const App = () => {
  return (
    <div className="container mt-4">
      <h2>System Notifications</h2>
      <AlertMessage type="success" message="Operation completed successfully" />
      <AlertMessage type="warning" message="Warning: You are near the limit!" />
      <AlertMessage type="danger" message="Error: Something went wrong" />
      <AlertMessage type="info" message="Info: check your email for updates" />
    </div>
  );
};

export default App;
