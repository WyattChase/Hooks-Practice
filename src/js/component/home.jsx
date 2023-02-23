import React from "react";
import Hello from "./hello.jsx";
import Counter from "./counter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Time from "./time.jsx";
import ControlledInputForm from "./controlInputForm.jsx";

//create your first component
const Home = () => {
	return (
		<><div> <Hello /> </div>
		<hr />
		<Counter />
		<hr />
		<Time />
		<hr />
		<ControlledInputForm />
		</>

	);
};

export default Home;
