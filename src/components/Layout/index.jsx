import styles from "./index.module.scss";
import PropTypes from "prop-types";
import { useState } from "react";
import useLocalStorage from "use-local-storage";

const Layout = ({ children }) => {
	return (
		<div className={styles.layoutContainer}>
			<div className={styles.layout}>
				{children}
			</div>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.element,
};
export default Layout;
