import { useEffect, useState } from "react";
import quotes from "../data/quotes.json";
import "./Home.css";
import Note from "../components/Note";
import jar1 from "../res/jar1.PNG";

const Home = () => {
	console.log(quotes);

	const [opened, setOpened] = useState(false);
	const [year, setYear] = useState(2024);

	return (
		<div className="container">
			{opened ? (
				<Note />
			) : (
				<button style={{ border: "none", background: "none" }}>
					<img
						src={jar1}
						onClick={() => setOpened(!opened)}
						alt="jar"
						style={{ width: "40%" }}
					></img>
				</button>
			)}
		</div>
	);
};

export default Home;
