import React from "react";
import Header from "../components/Header";

const Layout = ({children} : any) =>{
    return (
        <div className="Layout">
            {children}
        </div>
    );
}

export default Layout;