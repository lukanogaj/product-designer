import styles from "./index.module.scss";
import dataForPortfolio from "../DataForWorkStats";

const PortfolioLinks = () => {
	return (
		<div key={link.id} className={styles.portfolioLinks}>
			{dataForPortfolio.map((link) => (
				<div className={styles.linksBtn}>
					<button>{link.btnUX}</button>
					<button>{link.btnUni}</button>
					<button>{link.btnJs}</button>
				</div>
			))}
		</div>
	);
};

export default PortfolioLinks;
