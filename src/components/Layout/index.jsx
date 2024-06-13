import styles from "./index.module.scss";
import PropTypes from "prop-types";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
	return (
		<div className={styles.layoutContainer}>
			<div className={styles.layout}>
				<Navbar />
				{children}
			</div>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.element,
};
export default Layout;
