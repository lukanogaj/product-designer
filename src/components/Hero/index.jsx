import styles from "./index.module.scss";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import WorkEfficiency from "../WorkEfficiency";
import Portfolio from "../Portfoliio";
import Skills from "../Skills";
import Feedback from "../Feedback";
import AboutMe from "../AboutMe";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<Navbar />
			<Wrapper />
			<WorkEfficiency />
			<Portfolio />
			<Skills />
			<Feedback />
			<AboutMe />
		</div>
	);
};

export default Hero;
