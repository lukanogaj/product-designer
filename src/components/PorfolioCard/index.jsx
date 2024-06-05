import styles from "./index.module.scss";
import PortfolioText from "../PortfolioText";

const PortfolioCard = () => {
	return (
		<div className={styles.portfolioCard}>
			<PortfolioText />
		</div>
	);
};

export default PortfolioCard;
