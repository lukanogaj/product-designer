import styles from "./index.module.scss";
import data from "../Data";

const HighLightTextParagraph = ({ details }) => {
	const detailsArray = details.split("/");
	console.log(detailsArray);

	const highLightedParagraph = detailsArray.map((detail) => {
		console.log(detail);
		// detail.includes("*") ? console.log("Hello") : console.log("No Hello");
		if (detail.includes("*")) {
			return {
				text: detail.replaceAll("*", ""),
				highlited: true,
			};
		} else {
			return {
				text: detail,
				highlited: false,
			};
		}
	});

	console.log(highLightedParagraph);

	return (
		<div >
		
		</div>
	);
};

export default HighLightTextParagraph;
