import styles from "./index.module.scss";
import PortfolioLinks from "../PortfolioLinks";
import dataForPortfolio from "../DataForWorkPortfolio";
import { useState, useEffect } from "react";
import { useRef } from "react";
const PortfolioText = () => {
	//Function
	// // Custom Hook for slicing the array
	// const useDecreimentArray = () => {
	// 	return dataForPortfolio.slice(4);
	// };
	// useDecreimentArray();
	// const windowSize = useRef([window.innerWidth, window.innerHeight]);
	const useSize = () => {
		const [windowSize, setWindowSize] = useState([
			window.innerHeight,
			window.innerWidth,
		]);

		useEffect(() => {
			const windowSizeHandler = () => {
				setWindowSize([window.innerWidth, window.innerHeight]);
			};
			window.addEventListener("resize", windowSizeHandler);
			return () => {
				window.removeEventListener("resize", windowSizeHandler);
			};
		}, []);
		return windowSize;
	};
	const windowsize = useSize();

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
