import React from "react";

function Footer(){
    const date = new Date();
    return (
        <div className="footer">
            &copy; {date.getFullYear()} Miguel Cancel
        </div>
    )
}

export default Footer