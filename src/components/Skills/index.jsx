import styles from "./index.module.scss";
import dataForSkills from "../DataForSkills";

const Skills = () => {
	return (
		<div className={styles.skills}>
			<div className={styles.skillsHeading}>
				<h1>Skills</h1>
			</div>
			<div className={styles.skillsWrapper}>
				{dataForSkills.map((skill) => (
					<div key={skill.id} className={styles.skillsContainer}>
						<div className={styles.skillEllipse}>
							<div className={styles.ellipse}>
								<img src={skill.skillsImage} alt="" />
							</div>
							<div className={styles.skillEllipseHeading}>
								<h1>{skill.ellipseHeading}</h1>
							</div>
						</div>
						<div className={styles.skillText}>
							<div className={styles.skillTextHeading}>
								<h1>{skill.heading}</h1>
							</div>
							<div className={styles.skillTextParagraph}>{skill.paragraph}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
