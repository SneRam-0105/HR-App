import { Link } from "react-router-dom";
import Button from "../Buttons/button";





const Header = (props) => {
    const buttonText = props.loginStatus ? "Log out" : "Log in";

    return (
        <header >

            <h1>Employee dashboard</h1>


            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="employees">Employees</Link>
                        </li>
                        <li>
                            <Link to="new">Add new</Link>
                        </li>
                    </ul>
                </nav>
                {<Button onClick={props.onClick} text={buttonText} />}
            </div>
        </header>
    );
};

export default Header;