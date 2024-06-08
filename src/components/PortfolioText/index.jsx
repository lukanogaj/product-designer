import styles from "./index.module.scss";
import PortfolioLinks from "../PortfolioLinks";
import dataForPortfolio from "../DataForWorkPortfolio";
import { useState } from "react";
const PortfolioText = () => {

  // Custom Hook for slicing the array
	const useDecrementArray = () => {
		return dataForPortfolio.slice(4);
	};

  
	console.log(useDecrementArray());
	return (
		<div className={styles.portfolioText}>
			{dataForPortfolio.map((card) => (
				<div
					key={card.id}
					className={styles.portfolioTextItem}>
					<div className={styles.cardFrame}>
						<img
							src={card.frame}
							alt=""
						/>
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
