import styles from "./index.module.scss";
import dataForPortfolioBtn from "../DataForPortfolioBtn";

const PortfolioLinks = () => {
	return (
		<div className={styles.portfolioLinks}>
			{dataForPortfolioBtn.map((link) => (
				<div
					className={styles.linksBtn}
					key={link.id}>
					<button className={styles.linkBtns}>{link.btns}</button>
				</div>
			))}
		</div>
	);
};

export default PortfolioLinks;
