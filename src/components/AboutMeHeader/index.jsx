import styles from "./index.module.scss";
import zigZag from "../Assests/Icons/zigzag.png";

const AboutMeHeader = () => {
	return (
		<div className={styles.aboutMeHeader}>
			<div className={styles.zigZagHead}>
				<h1>About Me</h1>
			</div>
			<div className={styles.zigZag}>
				<img
					src={zigZag}
					alt=""
				/>
			</div>
		</div>
	);
};

export default AboutMeHeader;
