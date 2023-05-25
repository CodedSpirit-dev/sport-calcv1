import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function PaceCalculator() {
  const [distance, setDistance] = useState();
  const [distanceUnit, setDistanceUnit] = useState("kilometers");
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [pace, setPace] = useState({
    formattedPace: "",
    speedKMH: "",
    speedMPH: "",
  });

  const calculatePace = (event) => {
    event.preventDefault();

    if (distance === "0" || hours === "" || minutes === "" || seconds === "") {
      alert("Por favor ingrese la distancia y el tiempo");
      return;
    }

    // Convertir la distancia a kilómetros si es necesario
    const distanceInKilometers =
      distanceUnit === "kilometers" ? distance : distance * 1.60934;

    // Convertir el tiempo a minutos
    const timeInMinutes =
      parseInt(hours) * 60 + parseInt(minutes) + parseInt(seconds) / 60;

    const calculatedPace = timeInMinutes / distanceInKilometers;

    const paceMinutes = Math.floor(calculatedPace);
    const paceSeconds = Math.round((calculatedPace - paceMinutes) * 60);

    const formattedPace = `${paceMinutes}:${
      paceSeconds < 10 ? "0" + paceSeconds : paceSeconds
    } min/km`;

    // Calcular la velocidad en KM/H y Millas/H
    const timeInHours = timeInMinutes / 60;
    const speedInKMH = (distanceInKilometers / timeInHours).toFixed(2);
    const speedInMPH = (speedInKMH / 1.60934).toFixed(2);

    // Establecer los resultados en el estado
    setPace({
      formattedPace,
      speedKMH: speedInKMH,
      speedMPH: speedInMPH,
    });
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
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-4 font-sans">
          Calculadora de Ritmo de Carrera
        </h1>
        <form onSubmit={calculatePace}>
          <label className="text-3xl font-display mb-4">
            Distancia: <br />
            <input
              className=" form-textarea text text-2xl"
              placeholder="Por ejemplo: 5.5"
              type="float"
              min="0"
              name="distance"
              value={distance}
              onChange={handleInputChange}
            />
            <select
              className="select select-bordered text-2xl"
              name="distanceUnit"
              value={distanceUnit}
              onChange={handleInputChange}
            >
              <option value="kilometers">Kilómetros</option>
              <option value="miles">Millas</option>
            </select>
          </label>
          <br />
          <label className="text-3xl font-display mb-4">
            Tiempo: <br />
            <input
              className=" form-textarea text-2xl"
              type="float"
              min="0"
              name="hours"
              placeholder="Horas"
              value={hours}
              onChange={handleInputChange}
            />
            :
            <input
              className=" form-textarea text-2xl"
              type="float"
              min="0"
              max="59"
              name="minutes"
              placeholder="Minutos"
              value={minutes}
              onChange={handleInputChange}
            />
            :
            <input
              className=" form-textarea text-2xl"
              type="float"
              min="0"
              max="59"
              name="seconds"
              placeholder="Segundos"
              value={seconds}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button
            className=" text-3xl bg-black hover:border-x-slate-950 hover:bg-white hover:text-black hover:border hover:border-black text-white font-bold py-4 px-6 rounded my-3"
            type="submit"
            onClick={calculatePace}
          >
            Calcular ritmo
          </button>
        </form>

        {pace && (
          <div>
            <h2 className="items-center justify-center text-3xl font-semibold">
              Resultados
            </h2>
            <ul className="items-center justify-center text-3xl">
              <li>Ritmo: {pace.formattedPace}</li>
              <li>Velocidad (KM/H): {pace.speedKMH}</li>
              <li>Velocidad (Millas/H): {pace.speedMPH}</li>
            </ul>
          </div>
        )}
        <div className=" w-8/12 m-20 block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class=" text-center mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cambios futuros
            </h5>
            <ul className="text-xl text-gray-700 dark:text-gray-400 list-disc">
              <li>Validación de entrada de usuario más detallada</li>
              <li>Interfaz mas interactiva</li>
              <li>Poder determinar que ritmo deberias llevar para completar cierta distancia en un tiempo determinado</li>
            </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
