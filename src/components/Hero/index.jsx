import styles from "./index.module.scss";
import dataForSocialIcons from "../Assests";
import portal from "../Assests/portal.png";
import vintage from "../Assests/vintage.png";
import arrowDown from "../Assests/Icons/arrow-down.png";

const Hero = () => {
	return (
		<div className={styles.hero}>
			{/* Main div with headings and portal logo on left hand side */}
			<div className={styles.main}>
				{/* Component with the headings , social links, cv download button */}
				<div className={styles.headings}>
					<h1> PRODUCT DESIGNER</h1>
					<div className={styles.nameHead}>
						<h2>CRISTIAN MUÑOZ</h2>
					</div>

					<div className={styles.socialLinks}>
						{/* Map for social icons  */}

						{dataForSocialIcons.map((item) => (
							<div
								key={item.id}
								className={styles.socialIcon}>
								<img
									src={item.image}
									alt=""
								/>
							</div>
						))}
					</div>
					<div className={styles.cvDownload}>
						<div className={styles.cvText}>
							<div className={styles.cvHeading}>
								<h4>Download Curriculum Vitae</h4>
							</div>
							<div className={styles.cvIcon}>
								<img
									src={arrowDown}
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.portal}>
					<img
						className={styles.portalImg}
						src={portal}
						alt=""
					/>
				</div>
			</div>

			<div className={styles.heroProfile}>
				{/* <div className={styles.portal}>
					<img
						className={styles.portalImg}
						src={portal}
						alt=""
					/>
				</div> */}
				<div className={styles.vintageImg}>
					<img
						src={vintage}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
