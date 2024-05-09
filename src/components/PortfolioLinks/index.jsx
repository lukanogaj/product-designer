import styles from "./index.module.scss";
import dataForPortfolio from "../DataForWorkStats";

const PortfolioLinks = () => {
	return (
		<div className={styles.portfolioLinks}>
			{dataForPortfolio.map((link) => (
				<div className={styles.linksBtn} key={link.id}>
					<button>{link.btns}</button>
				</div>
			))}
		</div>
	);
};

export default PortfolioLinks;
