import { useEffect, useState } from "react";

const Home = () => {
	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		fetch("./quotes.json")
			.then((response) => response.json())
			.then((data) => {
				setQuotes(data);
				console.log(data);
			});
	}, []);

	return (
		<div>
			<h1>Home</h1>
			<ul>
				{quotes.map((quote) => (
					<li key={quote.id}>
						<blockquote>{quote.quote}</blockquote>
						<cite>{quote.author}</cite>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
