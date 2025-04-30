import React from "react";
import "./search.scss";
import { IoCheckmarkSharp } from "react-icons/io5";

// Handling SearchQuery
const Search = ({ onSubmit, handleValue, inputQuery }) => {
	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				onChange={handleValue}
				name='inputQuery'
				value={inputQuery}
				placeholder='Enter name of Celestial body'
				required
			/>
			<button type='submit'>
				<IoCheckmarkSharp
					className='icon'
					color={"#21504a"}
					size={"1.5rem"}
				/>
			</button>
		</form>
	);
};

export default Search;
