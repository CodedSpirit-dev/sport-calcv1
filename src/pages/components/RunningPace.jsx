import React, { useState } from 'react';
import NavBar from './NavBar';

export default function PaceCalculator() {
  const [distance, setDistance] = useState("");
  const [distanceUnit, setDistanceUnit] = useState("kilometers");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [pace, setPace] = useState("");
  const [speedKMH, setSpeedKMH] = useState("");
  const [speedMPH, setSpeedMPH] = useState("");

  const calculatePace = (event) => {
    event.preventDefault();

    if (distance === "" || hours === "" || minutes === "" || seconds === "") {
      alert("Por favor ingrese la distancia y el tiempo");
      return;
    }

    // Convertir la distancia a kilómetros si es necesario
    const distanceInKilometers = distanceUnit === "kilometers" ? distance : distance * 1.60934;
    
    // Convertir el tiempo a minutos
    const timeInMinutes = parseInt(hours) * 60 + parseInt(minutes) + parseInt(seconds) / 60;

    const calculatedPace = timeInMinutes / distanceInKilometers;

    const paceMinutes = Math.floor(calculatedPace);
    const paceSeconds = Math.round((calculatedPace - paceMinutes) * 60);

    setPace(`${paceMinutes}:${paceSeconds < 10 ? '0' + paceSeconds : paceSeconds} min/km`);

    // Calcular la velocidad en KM/H y Millas/H
    const timeInHours = timeInMinutes / 60;
    const speedInKMH = distanceInKilometers / timeInHours;
    const speedInMPH = speedInKMH / 1.60934;

    setSpeedKMH(speedInKMH.toFixed(2));
    setSpeedMPH(speedInMPH.toFixed(2));
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === "distance") {
      setDistance(value);
    } else if (name === "distanceUnit") {
      setDistanceUnit(value);
    } else if (name === "hours") {
      setHours(value);
    } else if (name === "minutes") {
      setMinutes(value);
    } else if (name === "seconds") {
      setSeconds(value);
    }
  };

  return (
    <div>
        <NavBar />
      <h1>Calculadora de ritmo de carrera</h1>
      <form onSubmit={calculatePace}>
        <label>
          Distancia:
          <input type="number" min="0" name="distance" value={distance} onChange={handleInputChange} />
          <select name="distanceUnit" value={distanceUnit} onChange={handleInputChange}>
            <option value="kilometers">Kilómetros</option>
            <option value="miles">Millas</option>
          </select>
        </label>
        <br />
        <label>
          Tiempo (Horas):
          <input type="number" min="0" name="hours" value={hours} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Tiempo (Minutos):
          <input type="number" min="0" name="minutes" value={minutes} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Tiempo (Segundos):
          <input type="number" min="0" name="seconds" value={seconds} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Calcular ritmo</button>
      </form>
      {pace && (
        <div>
          <p>Tu ritmo es: {pace}</p>
          <p>Tu velocidad es: {speedKMH} KM/H ({speedMPH} Millas/H)</p>
        </div>
      )}
    </div>
  );
}
