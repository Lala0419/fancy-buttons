import React from "react";
import { useState } from "react";

function TextRepeaterButton() {
	const [repetitions, setRepetitions] = useState(1);
	const textArray = [];
	const handleClick = () => {
		setRepetitions(repetitions + 1);
	};
	for (let i = 0; i < repetitions; i++) {
		textArray.push(<span key={i}>I like this text</span>);
	}
	return (
		<button className="TextRepeaterButton" onClick={handleClick}>
			{textArray}
		</button>
	);
}

export default TextRepeaterButton;
