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
import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";

function App() {
	const [theme, setTheme] = useState("");

  const initialTheme=()=>{
console.log('Hello');
if(typeof window !== 'undefined'){
  const val = localStorage.getItem('theme');
  return val ? JSON.parse(val) :themeType.light
}
  }

	// const initialTheme = () => {
	// 	console.log("Heart");
	// 	localStorage.getItem("theme");
	// 	return initialTheme ? initialTheme : "light";
	// };

	// function getThemeFromLocalStorage() {
	// 	console.log("NO");
	// 	const savedTheme = localStorage.getItem("theme");
	// 	if (savedTheme) {
	// 		setTheme(savedTheme);
	// 	}
	// }

	// function toggleTheme() {
	// 	setTheme((prevTheme) => {
	// 		console.log("Good");
	// 		const newTheme = prevTheme === "light" ? "dark" : "light";
	// 		localStorage.setItem("theme", newTheme);
	// 		return newTheme;
	// 	});
	// }

	// useEffect(() => {
	// 	getThemeFromLocalStorage();
	// }, [theme]);

	return (
		<Layout
			initialTheme={initialTheme}
			// toggleTheme={toggleTheme}
			// getThemeFromLocalStorage={getThemeFromLocalStorage}
      >
			<Navbar
				// initialTheme={initialTheme}
				// toggleTheme={toggleTheme}
				// getThemeFromLocalStorage={getThemeFromLocalStorage}
			/>
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
