function LightSwitchButton(props) {
	// const [light, setLight] = useState('off');
	//const handleClick = () => setLight(light === "on" ? "off" : "on");
	return (
		<button className="LightSwitchButton" onClick={props.handleClick}>
			{props.light ? (
				<span>
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
