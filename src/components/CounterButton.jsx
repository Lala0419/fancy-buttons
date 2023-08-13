import React from "react";
import { useState } from "react";

function CounterButton() {
	const [clickAmount, setClickAmount] = useState(0);
	const clickHandler = () => {
		setClickAmount((prev) => prev + 1);
	};
	return (
		<button className="CounterButton" onClick={clickHandler}>
			You clicked me {clickAmount} amount of times
		</button>
	);
}

export default CounterButton;
