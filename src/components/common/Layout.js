import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<Header />
			<div className="">{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
