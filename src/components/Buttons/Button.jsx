import "./Button.css";

const Button = ({ onClick, text, type = "button", roleColor }) => {
    return <button className={roleColor} onClick={onClick} type={type}>{text}</button>;
};

export default Button;