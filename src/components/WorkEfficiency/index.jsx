import styles from "./index.module.scss";
import dawnIcon from "../Assests/Icons/dawn.png";

const WorkEfficiency = () => {
	return (
		<div className={styles.workEfficiency}>
			<div className={styles.workStats}>
				<div className={styles.headStats}>
					<h1 className={styles.headStat}>90%</h1>
				</div>
				<div className={styles.statsParagraoh}>
					<p>
						Job Success <br /> Score on Upwork{" "}
					</p>
				</div>
			</div>
			<div className={styles.statsIcon}>
				<img src={dawnIcon} width="80px" height="80px" alt="" />
			</div>
			<div className={styles.workStats}>
				<div className={styles.headStats}>
					<h1 className={styles.headStat}>{">"}25.000</h1>
				</div>
				<div className={styles.statsParagraoh}>
					<p>Duplicates on Figma Commnunity</p>
				</div>
			</div>
			<div className={styles.statsIcon}>
				<img src={dawnIcon} width="80px" height="80px" alt="" />
			</div>
			<div className={styles.workStats}>
				<div className={styles.headStats}>
					<h1 className={styles.headStat}>{">"}2K</h1>
				</div>
				<div className={styles.statsParagraoh}>
					<p>
						In Finished <br /> Works
					</p>
				</div>
			</div>
		</div>
	);
};

export default WorkEfficiency;
