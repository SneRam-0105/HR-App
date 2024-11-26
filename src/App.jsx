import { useState } from 'react';
import "./App.css";
import EmployeeList from "./components/EmployeeList/EmployeeList.jsx";
import Button from './components/Buttons/button.jsx';


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

            <Button onClick={handleLogOutClick} text={"Logout"} />
          </div>
          ) :
          (
            <div> <h2>Please Log In</h2>
              <Button onClick={handleLoginClick} text={"Login"} />
            </div>
          )
        }

      </div>
      <div id="employee">
        {isLoggedIn && <EmployeeList />}
      </div>

    </div>
  );
}

export default App;


