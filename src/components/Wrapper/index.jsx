import styles from "./index.module.scss";
import dataForSocialIcons from "../Assests";
import portal from "../Assests/portal.png";
import vintage from "../Assests/vintage.png";
import arrowDown from "../Assests/Icons/arrow-down.png";

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
					<div className={styles.cvIcon}>
						<img src={arrowDown} width="20px" height="20px" alt="" />
					</div>
				</div>
			</div>
			<div className={styles.portal}>
				<img
					className={styles.portalImg}
					src={portal}
					width="160px"
					height="160px"
					alt=""
				/>
			</div>
			<div className={styles.vintageImg}>
				<img src={vintage} width="694px " height="778px" alt="" />
			</div>
		</div>
	);
};

export default Wrapper;
