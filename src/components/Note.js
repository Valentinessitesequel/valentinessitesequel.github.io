import quotes from "../data/quotes.json";

const Note = () => {
	const quote = quotes[Math.floor(Math.random() * quotes.length)];
	return (
		<div className="note">
			<p>{quote.quote}</p>
		</div>
	);
};

export default Note;
