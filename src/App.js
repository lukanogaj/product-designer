import "./App.css";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import WorkEfficiency from "./components/WorkEfficiency";
import Portfolio from "./components/Portfoliio";
import Skills from "./components/Skills";
import Feedback from "./components/Feedback";
import AboutMe from "./components/AboutMe";
import Frame from "./components/Frame";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
	// const windowSize = useRef([window.innerWidth, window.innerHeight]);
	return (
		<Layout>
			<Hero />
			<WorkEfficiency />
			<Portfolio />
			<Skills />
			<Feedback />
			<AboutMe />
			{/* <Frame /> */}
			{/* <Footer /> */}
		</Layout>
	);
}

export default App;
