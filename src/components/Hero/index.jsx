import styles from "./index.module.scss";
import dataForSocialIcons from "../Assests";
import portal from "../Assests/portal.png";
import vintage from "../Assests/vintage.png";
import arrowDown from "../Assests/Icons/arrow-down.png";

const Hero = () => {
	return (
		<div className={styles.container}>
			{/* Main div with headings and portal logo on left hand side */}
			<div className={styles.text}>
				<div className={styles.heads}>
					<h1> PRODUCT DESIGNER</h1>
					<h2>CRISTIAN MUÑOZ</h2>
				</div>
				<div className={styles.portal}>
					<img
						className={styles.portalImg}
						src={portal}
						alt=""
					/>
				</div>
			</div>
			{/* Div with main image  */}
			<div className={styles.image}>
				<img
					src={vintage}
					alt=""
				/>
			</div>
		</div>

		// <div className={styles.image}>
		// 	<img
		// 		src={vintage}
		// 		alt=""
		// 	/>
		// </div>
	);
};

export default Hero;

{
	/* Component with the headings , social links, cv download button */
}
{
	/* <div className={styles.heads}>
					<div className={styles.mainHead}>
						<h1> PRODUCT DESIGNER</h1>
					</div>
					<div className={styles.nameHead}>
						<h2>CRISTIAN MUÑOZ</h2>
					</div>
					<div className={styles.socialLinks}> */
}
{
	/* Map for social icons  */
}

{
	/* {dataForSocialIcons.map((item) => (
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
				</div> */
}
