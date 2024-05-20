import styles from "./index.module.scss";
import data from "../Data";
import AboutMeHeader from "../AboutMeHeader";

const AboutMe = () => {
	// const replaceStr = data.dataForAboutMe[0].paragraph.replace(
	// 	/ *\([^)]*\) */g,
	// 	""
	// );

	const acess = data.dataForAboutMe.map((text, index) => ({
		text: text.paragraph.split("/"),
		highlited: true,
		id: index + 1,
	}));
	console.log(acess);

	// let orginalString = data.dataForAboutMe.map((text) => ({
	// 	text: text.paragraph,
	// }));

	// let splitString = orginalString.split("*");
	// console.log(splitString[0]);

	// let obj = {};

	// console.log(acess);
	return (
		<div className={styles.aboutMe}>
			<AboutMeHeader />
			<div className={styles.aboutMeContainer}>
				{data.dataForAboutMe.map((detail) => (
					<div
						key={detail.id}
						className={
							// styles.aboutMeDetails
							!detail?.reversed
								? `${styles.aboutMeDetails}`
								: `${styles.reversed}`
						}>
						<div className={styles.aboutMeParagraph}>
							<p>
								{detail.paragraph}
								{/* <span>{detail.paragraph}</span> */}
							</p>
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
