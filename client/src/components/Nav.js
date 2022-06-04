import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css"


function Nav() {

    <ul>
        <li>
            <Link to="./">
                Home
            </Link>
        </li>
        <li>
            <Link to="./Login">
                    Login
            </Link>
        </li>
        <li>
            <Link to="./Signup">
                Signup
            </Link>
        </li>
    </ul>
}

export default Nav;