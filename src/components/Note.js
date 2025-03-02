import { useEffect, useState } from "react";
import quotes2024 from "../data/quotes.json";
import quotes2025 from "../data/quotes2025.json";
import "./Note.css";
import blue from "../res/blue.jpg";
import orange from "../res/orange.jpg";
import red from "../res/red.jpg";
import pink from "../res/pink.jpg";
import green from "../res/green.jpg";
import purple from "../res/purple.jpg";
import cork from "../res/cork.jpg";
import chalk from "../res/chalk.jpg";

const Note = ({ index, setIndex }) => {
	const [quotes, setQuotes] = useState(quotes2025);
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

	const handlePreviousNote = () => {
		if (index >= 14) {
			setIndex((prevIndex) =>
				prevIndex > 14 ? prevIndex - 1 : prevIndex
			);
		} else {
			let daysInPrevMonth = 0;
			if (new Date().getMonth() === 0) {
				daysInPrevMonth = 31;
			} else {
				daysInPrevMonth = new Date(
					new Date().getFullYear(),
					2,
					0
				).getDate();
			}

			setIndex((prevIndex) =>
				prevIndex > 0 ? prevIndex - 1 : daysInPrevMonth
			);
		}
	};

	const handleToggleYear = () => {
		if (quotes === quotes2024) {
			setQuotes(quotes2025);
		} else {
			setQuotes(quotes2024);
		}
	};

	return (
		<div
			className="quote-container"
			style={{ backgroundImage: `url(${note})` }}
		>
			<p className="quote">{quote.quote}</p>
			<button
				onClick={handlePreviousNote}
				disabled={index === 14}
				className="note-button"
			>
				<p className="quote">Previous Note</p>
			</button>
			<button onClick={handleToggleYear} className="note-button">
				<p className="quote">
					{quotes === quotes2024 ? "This Year" : "Last Year"}
				</p>
			</button>
		</div>
	);
};

export default Note;
