import styles from "./index.module.scss";
import data from "../Data";

const HighLightParagraph = ({ details }) => {
	const detailsArray = details.split("/");

	const highLightedParagraph = detailsArray.map((detail) => {
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

	return (
		<div className={styles.paragraphContainer}>
			<p>
				{highLightedParagraph.map((item, index) => (
					<span
						key={item.text}
						className={
							item.highlited === true
								? `${styles.highlitedParagraph}`
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
