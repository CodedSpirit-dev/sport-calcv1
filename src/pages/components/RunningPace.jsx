import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function PaceCalculator() {
  const [distance, setDistance] = useState("");
  const [distanceUnit, setDistanceUnit] = useState("kilometers");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [pace, setPace] = useState({
    formattedPace: "",
    speedKMH: "",
    speedMPH: "",
  });

  const savingTime = () => {
    if (hours === "") {
      setHours(0);
    }
  };

  const calculatePace = (event) => {
    event.preventDefault();

    if (distance === "" || hours === "" || minutes === "" || seconds === "") {
      savingTime();
      alert("Por favor ingrese la distancia y el tiempo");

      return;
    }




    const distanceInKilometers =
      distanceUnit === "kilometers" ? parseFloat(distance) : parseFloat(distance) * 1.60934;

    const timeInMinutes =
      parseInt(hours) * 60 + parseInt(minutes) + parseInt(seconds) / 60;

    const calculatedPace = timeInMinutes / distanceInKilometers;

    const paceMinutes = Math.floor(calculatedPace);
    const paceSeconds = Math.round((calculatedPace - paceMinutes) * 60);

    const formattedPace = `${paceMinutes}:${
      paceSeconds < 10 ? "0" + paceSeconds : paceSeconds
    } min/km`;

    const timeInHours = timeInMinutes / 60;
    const speedInKMH = (distanceInKilometers / timeInHours).toFixed(2);
    const speedInMPH = (speedInKMH / 1.60934).toFixed(2);

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
        <h1 className="text-6xl font-bold mb-4 font-sans text-center">
          Calculadora de Ritmo de Carrera
        </h1>
        <form className="w-full max-w-lg" onSubmit={calculatePace}>
          <div className="mb-4">
            <label className="text-3xl font-display">
              Distancia:
              <br />
              <input
                className="form-input text-2xl"
                placeholder="Por ejemplo: 5.5"
                type="number"
                min="0"
                step="0.1"
                name="distance"
                value={distance}
                onChange={handleInputChange}
              />
            </label>
            <select
              className="form-select text-2xl"
              name="distanceUnit"
              value={distanceUnit}
              onChange={handleInputChange}
            >
              <option value="kilometers">Kilómetros</option>
              <option value="miles">Millas</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="text-3xl font-display">
              Tiempo:
              <br />
              <div className="flex">
                <input
                  className="form-input text-2xl"
                  type="number"
                  min="0"
                  max="23"
                  name="hours"
                  placeholder="Horas"
                  defaultValue="0"
                  value={hours}
                  onChange={handleInputChange}
                />
                <span className="mx-2">:</span>
                <input
                  className="form-input text-2xl"
                  type="number"
                  min="0"
                  max="59"
                  name="minutes"
                  placeholder="Minutos"
                  value={minutes}
                  onChange={handleInputChange}
                />
                <span className="mx-2">:</span>
                <input
                  className="form-input text-2xl"
                  type="number"
                  min="0"
                  max="59"
                  name="seconds"
                  placeholder="Segundos"
                  value={seconds}
                  onChange={handleInputChange}
                />
              </div>
            </label>
          </div>
          <div className="text-center">
            <button
              className="text-3xl bg-black hover:bg-white hover:text-black text-white font-bold py-4 px-6 rounded my-3"
              type="submit"
              onClick={calculatePace}
            >
              Calcular ritmo
            </button>
          </div>
        </form>

        {pace.formattedPace && (
          <div>
            <h2 className="text-3xl font-semibold">Resultados</h2>
            <ul className="text-2xl">
              <li>Ritmo: {pace.formattedPace}</li>
              <li>Velocidad (KM/H): {pace.speedKMH}</li>
              <li>Velocidad (Millas/H): {pace.speedMPH}</li>
            </ul>
          </div>
        )}

        <div className="w-full max-w-lg m-20 block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="text-center mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Cambios futuros
          </h5>
          <ul className="text-xl text-gray-700 dark:text-gray-400 list-disc">
            <li>Validación de entrada de usuario más detallada</li>
            <li>Interfaz más interactiva</li>
            <li>
              Poder determinar qué ritmo deberías llevar para completar cierta
              distancia en un tiempo determinado
            </li>
            <li>Al no poner alguna cantidad en algun campo se entienda como 0 y no como vacio</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
