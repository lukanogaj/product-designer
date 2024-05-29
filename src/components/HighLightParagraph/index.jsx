import styles from "./index.module.scss";
import data from "../Data";
import { type } from "@testing-library/user-event/dist/type";

const HighLightParagraph = ({ details, color }) => {
	const detailsArray = details.split("/");

	console.log(detailsArray);
	// console.log(data.dataForAboutMe);

	// data.dataForAboutMe.forEach(function (element) {
	// 	console.log(element.color);
	// });

	const highLightedParagraph = detailsArray.map((detail, index) => {
		if (detail.includes("*")) {
			return {
				text: detail.replaceAll("*", ""),
				highlited: true,
				color: data.dataForAboutMe.color,
			};
		} else {
			return {
				text: detail,
				highlited: false,
			};
		}
	});

	// console.log(highLightedParagraph);

	return (
		<div className={styles.paragraphContainer}>
			<p>
				{highLightedParagraph.map((item, index) => (
					<span
						key={item.text}
						className={
							item.highlited === true && index[0]
								? `${styles.highlitedParagraph}``${styles[color[0]]}`
								: `${styles.paragraphDefault}`
						}>
						{item.text}
					</span>
				))}
			</p>
		</div>
	);
};

export default HighLightParagraph;
