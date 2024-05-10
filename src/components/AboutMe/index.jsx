import styles from "./index.module.scss";
import data from "../Data";
import AboutMeHeader from "../AboutMeHeader";

const AboutMe = () => {
	return (
		<div className={styles.aboutMe}>
			<AboutMeHeader />
		</div>
	);
};

export default AboutMe;
