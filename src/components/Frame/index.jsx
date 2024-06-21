import styles from "./index.module.scss";
import smallVintage from "../Assests/vintage-small.png";
import frameFooter from "../Assests/framefooter.png";

const Frame = () => {
	return (
		<div className={styles.frameContainer}>
			<div className={styles.container}>
				<div className={styles.frameWaves}>
					<img
						src={frameFooter}
						alt=""
					/>
				</div>
				<div className={styles.frameWrapper}>
					<div className={styles.vintageImage}>
						<img
							src={smallVintage}
							alt=""
						/>
					</div>
					<div className={styles.frameParagraph}>
						<p>
							Thanks for visit my website <br /> If you have any questions you
							can write me to any of my social networks, I am sure I will answer
							you.
						</p>
					</div>
				</div>
				<div className={styles.frameWaves}>
					<img
						src={frameFooter}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Frame;
