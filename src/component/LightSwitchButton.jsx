import React from "react";

function LightSwitchButton(props) {
	return (
		<button className="LightSwitchButton" onClick={props.handleClick}>
			{/* When the state is on */}
			{props.light ? (
				<span className="on">
					<i>💡</i> I'm on!
				</span>
			) : (
				<span className="off">
					<i>💡</i> I'm off!
				</span>
			)}
		</button>
	);
}

export default LightSwitchButton;
