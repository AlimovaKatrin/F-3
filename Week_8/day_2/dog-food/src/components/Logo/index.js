import React from "react";
import "./index.css";
import logo from "../../../public/assets/svg/logo.svg";

const Logo = ({className, href, ...props}) => {
	return (
		<a href={href} className={className? className: "logo"} {...props}>
			<img src={logo} alt="logo" className="logo__pic"/>
		</a>
	);
};

export default Logo;
