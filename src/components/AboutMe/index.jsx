import styles from "./index.module.scss";
import data from "../Data";
import AboutMeHeader from "../AboutMeHeader";
import HighLightParagraph from "../HighLightParagraph";

const AboutMe = () => {
	return (
		<div className={styles.aboutMe}>
			<AboutMeHeader />
			<div className={styles.aboutMeContainer}>
				{data.dataForAboutMe.map((detail) => (
					<div
						key={detail.id}
						className={
							!detail?.reversed
								? `${styles.aboutMeDetails}`
								: `${styles.reversed}`
						}>
						<div className={styles.aboutMeParagraph}>
							<HighLightParagraph details={detail.paragraph} />
						</div>
						<div className={styles.aboutMeImage}>
							<img
								src={detail.image}
								alt=""
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default AboutMe;
