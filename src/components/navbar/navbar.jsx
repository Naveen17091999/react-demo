import { Link } from "react-router-dom";
import "./navbar.css";


function Navbar() {

    function btn() {
        alert("clicked")
    }
    return (
        <nav id="Navbar">
            <div className="logo">Logo</div>

            <ul>
                <Link to="/"><li >Home</li></Link>
                <Link to="about"><li>about</li></Link>
                <Link to="cart"><li>cart</li></Link>
                <Link to="Notification"><li>Notification</li></Link>
                <Link to="Profile"><li>Profile</li></Link>
                <Link to="login"><li>login</li></Link>
            </ul>

        </nav>
    )
}

export default Navbar;