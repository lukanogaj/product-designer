import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkEfficiency from "./components/WorkEfficiency";
import Portfolio from "./components/Portfoliio";
import Skills from "./components/Skills";
import Feedback from "./components/Feedback";
import AboutMe from "./components/AboutMe";

function App({ reversed }) {
	return (
		<Layout>
			<Navbar />
			<Hero />
			<WorkEfficiency />
			<Portfolio />
			<Skills />
			<Feedback />
			<AboutMe reversed={reversed} />
		</Layout>
	);
}

export default App;
