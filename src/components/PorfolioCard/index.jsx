import styles from "./index.module.scss";
import PortfolioText from "../PorfolioText";
import PortfolioLinks from "../PortfolioLinks";

const PortfolioCard = () => {
	return (
		<div className={styles.portfolioCard}>
			<PortfolioText />
		</div>
	);
};

export default PortfolioCard;