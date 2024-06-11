import styles from "./index.module.scss";
import PortfolioLinks from "../PortfolioLinks";
import dataForPortfolio from "../DataForWorkPortfolio";
import { useSize } from "../hooks";

const PortfolioText = () => {
	const windowsize = useSize(1024);
	const breakpoint = 1024;
	const portfolioToBeSlice = breakpoint
		? dataForPortfolio.slice(4)
		: dataForPortfolio;

	// console.log(portfolioToBeSlice);

	console.log(windowsize);
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

// import { useState, useEffect } from "react";

// export const useSize = () => {
// 	const [windowSize, setWindowSize] = useState([
// 		window.innerHeight,
// 		window.innerWidth,
// 	]);

// 	useEffect(() => {
// 		const windowSizeHandler = () => {
// 			setWindowSize([window.innerWidth, window.innerHeight]);
// 		};
// 		window.addEventListener("resize", windowSizeHandler);
// 		return () => {
// 			window.removeEventListener("resize", windowSizeHandler);
// 		};
// 	}, []);
// 	return windowSize;
// };
