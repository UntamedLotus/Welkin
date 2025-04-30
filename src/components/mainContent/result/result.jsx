import React from "react";
import "./result.scss";
import { IoCloseCircleOutline } from "react-icons/io5";

const Result = (props) => {
	const data = props?.elems?.result;

	const pageIntro = function () {
		return (
			<div className='page-intro'>
				<section>
					<h1 className='page-intro-title neon'>Welkin</h1>
					<p className='page-intro-text'>
						Enter the name of the Celestial body of solar system and
						get basic information about it!
					</p>
				</section>

				<p className='text'>
					This app is made by using{" "}
					<a
						href='https://react.dev/'
						target='_blank'
						rel='noreferrer'
					>
						React
					</a>
					.
				</p>
			</div>
		);
	};

	const Information = function () {
		return (
			<div className='information card'>
				<h1 className='name neon'>{data?.englishName}</h1>
				<div className='basic'>
					<h2>Basic Properties:</h2>
					<ul className='list'>
						<li>
							Body Type -{" "}
							{data?.bodyType ? data?.bodyType : "Not defined"}
						</li>
						<li>
							Axial Tilt -{" "}
							{data?.axialTilt ? data?.axialTilt : "Not defined"}
						</li>
						<li>
							Density -{" "}
							{data?.density ? data?.density : "Not defined"}
						</li>
						<li>
							Dimension -{" "}
							{data?.dimension ? data?.dimension : "Not defined"}
						</li>
						<li>
							Discovered By -{" "}
							{data?.discoveredBy
								? data?.discoveredBy
								: "Not defined"}
						</li>
						<li>
							Discovery Date -{" "}
							{data?.discoveryDate
								? data?.discoveryDate
								: "Not defined"}
						</li>
						<li>
							Equa Radius -{" "}
							{data?.equaRadius
								? data?.equaRadius
								: "Not defined"}
						</li>
						<li>
							Flattening -{" "}
							{data?.flattening
								? data?.flattening
								: "Not defined"}
						</li>
						<li>
							Gravity -{" "}
							{data?.gravity ? data?.gravity : "Not defined"}
						</li>
						<li>
							Inclination -{" "}
							{data?.inclination
								? data?.inclination
								: "Not defined"}
						</li>
					</ul>
				</div>
				<div className='other'>
					<h2>Other properties :</h2>
					<ul className='list'>
						<li>
							Mass Exponent -{" "}
							{data?.mass?.massExponent
								? data?.mass?.massExponent
								: "Not defined"}
						</li>
						<li>
							Mass Value -{" "}
							{data?.mass?.massValue
								? data?.mass?.massValue
								: "Not defined"}
						</li>
						<li>
							Perihelion -{" "}
							{data?.perihelion
								? data?.perihelion
								: "Not defined"}
						</li>
						<li>
							Polar Radius -{" "}
							{data?.polarRadius
								? data?.polarRadius
								: "Not defined"}
						</li>
						<li>
							Mean Radius -{" "}
							{data?.meanRadius
								? data?.meanRadius
								: "Not defined"}
						</li>
						<li>
							Semi Major Axis -{" "}
							{data?.semimajorAxis
								? data?.semimajorAxis
								: "Not defined"}
						</li>
						<li>
							Sideral Orbit -{" "}
							{data?.sideralOrbit
								? data?.sideralOrbit
								: "Not defined"}
						</li>
						<li>
							Sideral Rotation -{" "}
							{data?.sideralRotation
								? data?.sideralRotation
								: "Not defined"}
						</li>
						<li>
							Volume Exponent -{" "}
							{data?.vol?.volExponent
								? data?.vol?.volExponent
								: "Not defined"}
						</li>
						<li>
							Volume Value -{" "}
							{data?.vol?.volValue
								? data?.vol?.volValue
								: "Not defined"}
						</li>
					</ul>
				</div>
				{data?.isPlanet
					? data?.moons?.length > 0 && (
							<div className='moons'>
								<h2 className='moon-title'>
									{data?.moons?.length > 1 ? "Moons" : "Moon"}{" "}
									:
								</h2>
								<ul className='moon-list'>
									{data?.moons?.map((m, i) => (
										<li className='moon' key={i + 1}>
											{m?.moon}
										</li>
									))}
								</ul>
							</div>
					  )
					: ""}{" "}
				<p className='close-icon' onClick={props.closeScreen}>
					<IoCloseCircleOutline />
				</p>
			</div>
		);
	};

	return (
		<div>{props.elems.status === false ? pageIntro() : Information()}</div>
	);
};

export default Result;
