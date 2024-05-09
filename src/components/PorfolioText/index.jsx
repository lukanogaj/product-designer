import styles from "./index.module.scss";
import dataForPortfolio from "../DataForWorkStats";
import PortfolioLinks from "../PortfolioLinks";

const PortfolioText = () => {
	return (
		<div className={styles.portfolioText}>
			{dataForPortfolio.map((card) => (
				<div key={card.id} className={styles.portfolioTextItem}>
					<div className={styles.cardFrame}>
						<img src={card.frame} alt="" />
					</div>
					<div className={styles.portfolioTextHeading}>
						<h2 className={styles.portfolioTextHead}>{card.heading}</h2>
						<PortfolioLinks />
						<div className={styles.portfolioCardFigmaLink}>{card.figmaBtn}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default PortfolioText;
