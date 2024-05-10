import styles from "./index.module.scss";
import shield from "../Assests/Icons/shield.svg";

const Feedback = () => {
	return (
		<div className={styles.feedback}>
			<div className={styles.feedbackText}>
				<div className={styles.feedbackHeading}>
					<h1>Kaleb Lechtenberg</h1>
				</div>
				<div className={styles.feedbackParagraph}>
					<p>
						"Working with this freelancer has been great. His attention to
						detail is unparalleled and finished all work ahead of schedule. Will
						gladly send more work and I do not hesitate to recommend him to you
						on your project also."
					</p>
				</div>
				<div className={styles.feedbackImage}>
					<img src={shield} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Feedback;
