import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserList from "./Components/UserList";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [users, setUsers] = useState(null);
  //list users
  const getUsers = async () => {
    try {
      const resultat = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(resultat.data);
      console.log(users);
    } catch (error) {
      console.log(error);
    }
    
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="App">
<Router>
  <Routes>
    <Route path="/" element={< UserList users={users}/>} />
  </Routes>
</Router>
    </div>
  );
  
}

export default App;
