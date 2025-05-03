import React, { useState } from "react";

import Search from "./search/search";
import Result from "./result/result";

import "./mainContent.scss";
import { BASE_URL } from "../../constants";
import { toast } from "react-toastify";

const MainContent = () => {
	// Setting state to initialize values
	const [elems, setElems] = React.useState({
		result: {},
		status: false,
	});

	// State to store temporary input values

	const [inputQuery, setInputQuery] = useState("");

	// Targeting the input value
	const handleValue = function (e) {
		const val = e.target.value;
		setInputQuery(val);
	};

	// Setting values and rendering results + Deciding state by boolean
	const onSubmit = function (e) {
		e.preventDefault();

		try {
			fetch(`${BASE_URL}/rest/bodies/${inputQuery}`)
				.then((res) => {
					if (res.status >= 404) {
						toast.error("Celestial body not found");
						setElems({
							...elems,
							status: false,
						});
					}
					return res.json();
				})
				.then((data) => {
					setElems({
						result: data,
					});
				});
		} catch (error) {
			toast.error(error?.message);
		}
	};

	const closeScreen = function () {
		setElems({
			...elems,
			status: false,
		});

		setInputQuery("");
	};

	return (
		<div className='mainContent'>
			<Search
				onSubmit={onSubmit}
				handleValue={handleValue}
				inputQuery={inputQuery}
			/>
			<Result elems={elems} closeScreen={closeScreen} />
		</div>
	);
};

export default MainContent;
