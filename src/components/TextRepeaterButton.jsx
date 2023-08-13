import React from "react";
import { useState } from "react";

function TextRepeaterButton() {
	const [repetitions, setRepetitions] = useState(1);
	const clickHandler = () => {
		setRepetitions((prev) => prev + 1);
	};
	const textArray = [];
	for (let i = 0; i < repetitions; i++) {
		textArray.push(<span key={i}>I like this text</span>);
	}

	return (
		<button className="TextRepeaterButton" onClick={clickHandler}>
			{textArray}
		</button>
	);
}

export default TextRepeaterButton;
