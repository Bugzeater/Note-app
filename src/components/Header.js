import React from "react";

const Header =({ handleToggleDarkMode }) =>{
    return(
        <div className="header">
            <h1>Notes</h1>
            <button
                onClick={() =>
                    handleToggleDarkMode(
                        (preiousDarkMode)=> !preiousDarkMode
                        )
                    }
                className="save">Theme
            </button>
        </div>
    )
}

export default Header;