import styles from "./index.module.scss";
import data from "../Data";
import AboutMeHeader from "../AboutMeHeader";

const AboutMe = () => {
	// console.log(data.dataForAboutMe[0].paragraph);
	// const par1 =
	// 	"I am a //Product Designer// and Frontend Developer, I fully understand the process of design and development of a digital product, my job is to make a product usable and visually appealing, through the //Design Thinking// methodology I manage to create products that are endearing to users.";

	// console.log(par1);
	const splitString = (string) => string.split("//");
	// console.log(splitString(par1));

	// console.log(splitString);

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
							<p> {console.log(splitString(detail.paragraph))}</p>
							{/* <span>{parag.paragraph}</span> */}
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
