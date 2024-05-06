

import styles from "./index.module.scss";
const Main = () => {
	return (
		<div className={styles.main}>
			<h1 className={styles.mainHeading}> PRODUCT DESIGNER CRISTIAN MUNOZ</h1>
			<div className={styles.nameIcon}></div>
			<div className={styles.socialLinks}>
				<div className={styles.socialIcon}></div>
				<div className={styles.socialIcon}></div>
				<div className={styles.socialIcon}></div>
				<div className={styles.socialIcon}></div>
				<div className={styles.socialIcon}></div>
				<div className={styles.socialIcon}></div>
			</div>
			<div className={styles.cvBtn}>
				<div>Download Curriculum Vitae</div>
				<div className={styles.cvIcon}></div>
			</div>
		</div>
	);
};

export default Main;
