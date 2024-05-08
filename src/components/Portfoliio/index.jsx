import styles from "./index.module.scss";
import PortfolioCard from "../PorfolioCard";
// import PortfolioLinks from "../PortfolioLinks";

const Portfolio = () => {
	return (
		<div className={styles.portfolio}>
			<h1 className={styles.portfolioHeading}>PORTFOLIO</h1>
			<div className={styles.portfolioWrapper}>
				<PortfolioCard />
			</div>
		</div>
	);
};

export default Portfolio;
