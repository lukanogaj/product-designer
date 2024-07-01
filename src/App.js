import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkEfficiency from "./components/WorkEfficiency";
import Portfolio from "./components/Portfoliio";
import Skills from "./components/Skills";
import Feedback from "./components/Feedback";
import AboutMe from "./components/AboutMe";
import Frame from "./components/Frame";
import Footer from "./components/Footer";
import { useRef } from "react";
import useLocalStorage from "use-local-storage";
// import { useState } from "react";

function App() {
	const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

	const switchTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		console.log("hello");
	};

	// const changeThemeIcon = () => {
	// 	setShow(!show);
	// 	console.log("hello");
	// };
	return (
		<Layout>
			<Navbar switchTheme={switchTheme} />
			<Hero />
			<WorkEfficiency />
			<Portfolio />
			<Skills />
			<Feedback />
			<AboutMe />
			<Frame />
			<Footer />
		</Layout>
	);
}

export default App;
