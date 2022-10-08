import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsInfo from './HogsInfo'

function App() {
	return (
		<div className="App">
			<Nav />
			<HogsInfo hogs = {hogs}/>
		</div>
	);
}

export default App;
