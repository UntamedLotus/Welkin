import "./App.scss";
import React from "react";
import MainContent from "./components/mainContent/mainContent";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<div className='App'>
			<MainContent />
			<ToastContainer
				closeOnClick
				autoClose={5000}
				position='top-right'
			/>
		</div>
	);
}

export default App;
