import styles from "./index.module.scss";
import PortfolioLinks from "../PortfolioLinks";
import dataForPortfolio from "../DataForWorkPortfolio";
import { useSize } from "../hooks";

const PortfolioText = () => {
	const windowsize = useSize();

	const slicedArray =
		windowsize[0] <= 1024 ? dataForPortfolio.slice(0, 4) : dataForPortfolio;

	// console.log(slicedArray);

	// console.log(windowsize);
	return (
		<div className={styles.portfolioText}>
			{slicedArray.map((card) => (
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


