import React from "react";
import "./result.scss";

const Result = (props) => {
  const NAME = props.elems.result.englishName;
  const BODY_TYPE = props.elems.result.bodyType;
  const AXIAL_TILT = props.elems.result.axialTilt;
  const DENSITY = props.elems.result.density;
  const DIMENSION = props.elems.result.dimension;
  const DISCOVERED_BY = props.elems.result.discoveredBy;
  const DISCOVERY_DATE = props.elems.result.discoveryDate;
  const EQUA_RADIUS = props.elems.result.equaRadius;
  const FLATTENING = props.elems.result.flattening;
  const GRAVITY = props.elems.result.gravity;
  const INCLINATION = props.elems.result.inclination;

  const MASS_EXPONENT = props.elems.mass.massExponent;
  const MASS_VALUE = props.elems.mass.massValue;
  const PERIHELIAN = props.elems.result.perihelion;
  const POLAR_RADIUS = props.elems.result.polarRadius;
  const MEAN_RADIUS = props.elems.result.meanRadius;
  const SEMI_MAJOR_AXIS = props.elems.result.semimajorAxis;
  const SIDERAL_ORBIT = props.elems.result.sideralOrbit;
  const SIDERAL_ROTATION = props.elems.result.sideralRotation;
  const VOLUME_EXPONENT = props.elems.vol.volExponent;
  const VOLUME_VALUE = props.elems.vol.volValue;

  const moonsArray = props.elems.moons;
  const MOONS =
    moonsArray !== null
      ? moonsArray.map((body) => <p key={body.moon}>{body.moon}</p>)
      : 0;

  const pageIntro = function () {
    return (
      <div className="page-intro">
        <h1 className="pageintro-title">Welkin</h1>
        <p className="pageintro-text">
          Enter the name of the Celestial body of solar system and get basic
          information about it!
        </p>
        <p className="text">
          This app is made by using <span className="underlined">React</span>.
        </p>
      </div>
    );
  };

  const Information = function () {
    return (
      <div className="Information">
        <h2>Basic Properties:</h2>
        <li>
          <ul>Name: {NAME}</ul>
          <ul>Body Type: {BODY_TYPE}</ul>
          <ul>Axial Tilt: {AXIAL_TILT}</ul>
          <ul>Density: {DENSITY}</ul>
          <ul>Dimension: {DIMENSION}</ul>
          <ul>Discovered By: {DISCOVERED_BY}</ul>
          <ul>Discovery Date: {DISCOVERY_DATE}</ul>
          <ul>Equa Radius: {EQUA_RADIUS}</ul>
          <ul>Flattening: {FLATTENING}</ul>
          <ul>Gravity: {GRAVITY}</ul>
          <ul>Inclination: {INCLINATION}</ul>
          <ul>Moons: {MOONS}</ul>
        </li>

        <h2>Other properties:</h2>
        <li>
          <ul>Mass Exponent: {MASS_EXPONENT}</ul>
          <ul>Mass Value: {MASS_VALUE}</ul>
          <ul>Perihelion: {PERIHELIAN}</ul>
          <ul>Polar Radius: {POLAR_RADIUS}</ul>
          <ul>Mean Radius: {MEAN_RADIUS}</ul>
          <ul>Semi Major Axis: {SEMI_MAJOR_AXIS}</ul>
          <ul>Sideral Orbit: {SIDERAL_ORBIT}</ul>
          <ul>Sideral Rotation: {SIDERAL_ROTATION}</ul>
          <ul>Volume Exponent: {VOLUME_EXPONENT}</ul>
          <ul>Volume Value: {VOLUME_VALUE}</ul>
        </li>
      </div>
    );
  };

  return (
    <div>{props.elems.status === false ? pageIntro() : Information()}</div>
  );
};

export default Result;
