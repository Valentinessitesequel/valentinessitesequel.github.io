import { useEffect, useState } from "react";
import quotes from "../data/quotes.json";
import "./Note.css";
import blue from "../res/blue.jpg";
import orange from "../res/orange.jpg";
import red from "../res/red.jpg";
import pink from "../res/pink.jpg";
import green from "../res/green.jpg";
import purple from "../res/purple.jpg";
import cork from "../res/cork.jpg";
import chalk from "../res/chalk.jpg";

const Note = ({ index }) => {
	const quote = quotes[index];
	const [note, setNote] = useState(blue);

	useEffect(() => {
		const day = new Date().getDate();

		let numColors = 4;
		if (day < 14) {
			numColors = 8;
		} else if (day > 26) {
			numColors = 6;
		}

		const paperType = Math.floor(Math.random() * numColors);

		switch (paperType) {
			case 0:
				setNote(blue);
				break;
			case 1:
				setNote(orange);
				break;
			case 2:
				setNote(red);
				break;
			case 3:
				setNote(pink);
				break;
			case 4:
				setNote(green);
				break;
			case 5:
				setNote(purple);
				break;
			case 6:
				setNote(cork);
				break;
			default:
				setNote(chalk);
				break;
		}
	}, [quote]);

	return (
		<div
			className="quote-container"
			style={{ backgroundImage: `url(${note})` }}
		>
			<p className="quote">{quote.quote}</p>
		</div>
	);
};

export default Note;
