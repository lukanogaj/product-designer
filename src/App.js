import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkEfficiency from "./components/WorkEfficiency";
import Portfolio from "./components/Portfoliio";
import Skills from "./components/Skills";
import Feedback from "./components/Feedback";
import AboutMe from "./components/AboutMe";
// import HighLightTextParagraph from "./components/HighLightTextParagraph";
// import DesignWords from "./components/DesignWords";

function App({ children, reversed }) {
	return (
		<Layout>
			<Navbar />
			<Hero />
			<WorkEfficiency />
			<Portfolio />
			<Skills />
			<Feedback />
			<AboutMe />
			{/* <HighLightTextParagraph /> */}
		</Layout>
	);
}

export default App;
