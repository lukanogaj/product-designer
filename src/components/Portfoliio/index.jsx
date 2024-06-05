import styles from "./index.module.scss";
import PortfolioCard from "../PorfolioCard";
import PortfolioLinks from "../PortfolioLinks";

const Portfolio = () => {
	return (
		<div className={styles.portfolio}>
			<div className={styles.portfolioWrapper}>
				<h1 className={styles.portfolioHeading}>PORTFOLIO</h1>
				<PortfolioCard />
			</div>
		</div>
	);
};

export default Portfolio;
