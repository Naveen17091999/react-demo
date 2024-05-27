import "./navbar.css";

function Navbar(){

    function btn (){
        alert("clicked")
    }
    return(
        <nav id="Navbar">
            <div className="logo">Logo</div>

            <ul>
                <li onClick={btn}>Home</li>
                <li>about</li>
                <li>cart</li>
                <li>Notification</li>
                <li>Profile</li>
                <li>login</li>
            </ul>
            
        </nav>
    )
}

export default Navbar;