import styles from "./index.module.scss";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import WorkEfficiency from "../WorkEfficiency";
import Portfolio from "../Portfoliio";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<Navbar />
			<Wrapper />
			<WorkEfficiency />
			<Portfolio />
		</div>
	);
};

export default Hero;
