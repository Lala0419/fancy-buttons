import "./App.css";
import AngryButton from "./components/AngryButton";
import CounterButton from "./components/CounterButton";
import LightSwitchButton from "./components/LightSwitchButton";
import TextRepeaterButton from "./components/TextRepeaterButton";
import { useState } from "react";

function App() {
	const [light, setLight] = useState(false);
	const dark = light ? " " : "dark";

	const switchLight = () => {
		setLight((prevState) => !prevState);
	};

	return (
		<div className={`App ${dark}`}>
			<h1>Fancy Buttons!</h1>
			<section>
				<AngryButton />
				<CounterButton />
				<LightSwitchButton light={light} handleClick={switchLight} />
				<TextRepeaterButton />
			</section>
		</div>
	);
}

export default App;
