import React, { useReducer } from "react";
//import { useState } from "react";

function AngryButton() {
	//const [anger, setAnger] = useState(0);
	const [anger, dispatch] = useReducer((anger, action) => {
		//useReducer
		return anger > 1 ? 0 : anger + action;
	}, 0);

	// 	if (anger < 1) {
	// 		return anger + action;
	// 	} else {
	// 		return 0;
	// 	}
	// }, 0);

	//useState
	//const clickHandler = () => {
	// 	if (anger < 1) {
	// 		setAnger((prev) => prev + 0.1);
	// 	} else {
	// 		setAnger(0);
	// 	}
	// };

	return (
		<button
			className="AngryButton"
			style={{ backgroundColor: `rgba(255,0,0,${anger})` }}
			onClick={() => dispatch(0.1)}
			//onClick={clickHandler}
		>
			{anger < 1 ? <span>Don't click me too much! </span> : <span>Rawr!</span>}
		</button>
	);
}

export default AngryButton;
