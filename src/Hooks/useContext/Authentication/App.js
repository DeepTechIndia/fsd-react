import { AuthProvider } from "./AuthContext";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <UserProfile />
    </AuthProvider>
  );
};

export default App;
