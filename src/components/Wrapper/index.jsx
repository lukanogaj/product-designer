import styles from "./index.module.scss";
import Navbar from "../Navbar";
import Hero from "../Hero";
import WorkEfficiency from "../WorkEfficiency";
import Portfolio from "../Portfoliio";
import Skills from "../Skills";
import Feedback from "../Feedback";
import AboutMe from "../AboutMe";

const Wrapper = ({ reversed }) => {
	return (
		<div className={styles.wrapper}>
			<Navbar />
			<Hero />
			<WorkEfficiency />
			<Portfolio />
			<Skills />
			<Feedback />
			<AboutMe reversed={reversed} />
		</div>
	);
};

export default Wrapper;
