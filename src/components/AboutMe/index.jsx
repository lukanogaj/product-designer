import styles from "./index.module.scss";
import data from "../Data";
import AboutMeHeader from "../AboutMeHeader";

const AboutMe = ({ reversed }) => {
	return (
		<div className={styles.aboutMe}>
			<AboutMeHeader />
			<div className={styles.aboutMeContainer}>
				{data.dataForAboutMe.map((detail) => (
					<div
						key={detail.id}
						className={
							detail.reversed === reversed
								? `${styles.aboutMeDetails}`
								: `${styles.reverseAboutMeDetails}`
						}
					>
						<div className={styles.aboutMeParagraph}>
							<p>{detail.paragraph}</p>
						</div>
						<div className={styles.aboutMeImage}>
							<img src={detail.image} alt="" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AboutMe;
