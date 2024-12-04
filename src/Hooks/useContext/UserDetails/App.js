import { createContext } from "react";
import Profile from "./Profile";

export const UserContext = createContext();

function App() {
  const user = {
    name: "Jhon Wick",
    age: 35,
    email: "jhonwick@gmail.com",
  };
  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

export default App;

//useContext
/* 
const MyContext =createContext('light'); => Provider, Consumer

<MyContext.Provider value={}>
    // {/* you component tree */
/*     
<MyContext.Provider />


const contextData = useContext(MyContext)  */
