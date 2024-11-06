import { useState } from 'react';
import "./App.css";
import EmployeeList from "./components/EmployeeList/EmployeeList.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogOutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <div>

        {isLoggedIn ?
          (<div>
            <h1>Employee Database</h1>

            <button onClick={handleLogOutClick}>Log out</button>
          </div>
          ) :
          (
            <div> <h2>Please Log In</h2>
              <button onClick={handleLoginClick}>Log in </button>
            </div>
          )
        }

      </div>
      <div id="employee">
        <EmployeeList props={isLoggedIn} />
      </div>

    </div>
  );
}

export default App;


