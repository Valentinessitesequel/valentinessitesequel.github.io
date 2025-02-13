import { useEffect, useState } from "react";
import "./Home.css";
import Note from "../components/Note";
import jar4 from "../res/jar4.PNG";
import jar1 from "../res/jar1.PNG";
import jar2 from "../res/jar2.PNG";
import jar3 from "../res/jar3.PNG";

const Home = ({ toggleMode }) => {
	const [opened, setOpened] = useState(false);
	const [jar, setJar] = useState(jar4);
	const [noteIndex, setNoteIndex] = useState(0);

	useEffect(() => {
		//Get the current date
		const day = new Date().getDate();
		let month = new Date().getMonth();
		let year = new Date().getFullYear();

		if (day < 14) {
			if (month === 0) {
				month = 11;
				year = year - 1;
			} else {
				month = month - 1; // If it is not the yet the 14th, prevent the month from advancing
			}
		}

		//Calculate the number of days since the last 14th
		const valDate = new Date(year, month, 14).getTime();
		const currDate = new Date().getTime();
		const daysSinceValDay = Math.round(
			(currDate - valDate) / (1000 * 3600 * 24)
		);

		console.log(daysSinceValDay);

		const jarType = Math.floor(daysSinceValDay / 9);

		console.log(jarType);

		switch (jarType) {
			case 0:
				setJar(jar1);
				break;
			case 1:
				setJar(jar2);
				break;
			case 2:
				setJar(jar3);
				break;
			default:
				setJar(jar4);
				break;
		}

		setNoteIndex(day);
	}, []);

	return (
		<div className="container">
			{opened ? (
				<Note index={noteIndex} />
			) : (
				<button className="jar-container">
					<img
						src={jar}
						onClick={() => setOpened(!opened)}
						alt="jar"
						className="jar"
					/>
				</button>
			)}
		</div>
	);
};

export default Home;
