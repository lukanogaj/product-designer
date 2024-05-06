import styles from "./index.module.scss";
import dataForSocialIcons from "../Assests";
import portal from "../Assests/portal.png";
import vintage from "../Assests/vintage.png";

const Wrapper = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.main}>
				<div className={styles.headings}>
					<h1 className={styles.mainHeading}> PRODUCT DESIGNER</h1>

					<div className={styles.nameHead}>
						<h2>CRISTIAN MUÑOZ</h2>
					</div>
				</div>

				<div className={styles.socialLinks}>
					{/* Map for social icons  */}

					{dataForSocialIcons.map((item) => (
						<div key={item.id} className={styles.socialIcon}>
							<img className={styles.imgIcons} src={item.image} alt="" />
						</div>
					))}
				</div>
				<div className={styles.cvDownload}>
					<div>
						<h4>Download Curriculum Vitae</h4>
					</div>
					<div className={styles.cvIcon}></div>
				</div>
			</div>
			<div className={styles.portal}>
				<img src={portal} alt="" />
			</div>
			<div>
				<img src={vintage} alt="" />
			</div>
		</div>
	);
};

export default Wrapper;
