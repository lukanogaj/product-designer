import styles from "./index.module.scss";
import data from "../Data";
import { type } from "@testing-library/user-event/dist/type";

const HighLightParagraph = ({ details, color }) => {
	const detailsArray = details.split("/");
	const highLightedParagraph = detailsArray.map((detail, index) => {
		if (detail.includes("*")) {
			return {
				text: detail.replaceAll("*", ""),
				highlited: true,
				color: color,
			};
		} else {
			return {
				text: detail,
				highlited: false,
			};
		}
	});


	return (
		<div className={styles.paragraphContainer}>
			<p>
				{highLightedParagraph.map((item, index) => (
					<span
						key={item.text}
						className={
							item.highlited
								? `${styles.rainbowClass}`
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
