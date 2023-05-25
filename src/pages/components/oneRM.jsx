// Importa los componentes necesarios
import { Bar } from "react-chartjs-2";
import * as math from "mathjs";
import NavBar from "./NavBar";
import { useState } from "react";
import Footer from "./Footer";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
} from "chart.js";

// Registra los elementos, escalas y controladores necesarios en Chart.js
Chart.register(CategoryScale, LinearScale, BarElement, BarController);

// Componente OneRM
export default function OneRM() {
  // Estados de los campos de entrada y resultados de las fórmulas
  const [repetitions, setRepetitions] = useState("");
  const [repetitionsDone, setRepetitionsDone] = useState("");
  const [weight, setWeight] = useState("");
  const [rir, setRir] = useState("");
  const [resultFormulas, setResultFormulas] = useState({
    epley: "",
    brzycki: "",
    mcglothin: "",
    lombardi: "",
    mayhew: "",
    oconner: "",
    wathan: "",
  });

  // Maneja el cambio de valores en los campos de entrada
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === "repetitions") {
      setRepetitions(value);
    } else if (name === "weight") {
      setWeight(value);
    } else if (name === "repetitionsDone") {
      setRepetitionsDone(value);
    }
  };

  // Calcula el 1RM usando diferentes fórmulas y actualiza los resultados en el estado
  const handleCalculate = () => {
    setResultFormulas({
      epley: math.round(
        Number(weight) * (1 + 0.0333 * Number(repetitionsDone)),
        2
      ),
      brzycki: math.round(
        Number(weight) / (1.0278 - 0.0278 * Number(repetitionsDone)),
        2
      ),
      mcglothin: math.round(Number(weight) * Math.pow(repetitionsDone, 0.1), 2),
      lombardi: math.round(Number(weight) * Math.pow(repetitionsDone, 0.1), 2),
      mayhew: math.round(
        Number(weight) / (1.013 - 0.0267123 * Number(repetitionsDone)),
        2
      ),
      oconner: math.round(
        0.025 * (Number(weight) * Number(repetitionsDone)) + Number(weight),
        2
      ),
      wathan: math.round(
        (100 * Number(weight)) /
          (48.8 + 53.8 * Math.exp(-0.075 * repetitionsDone)),
        2
      ),
    });
  };

  // Datos del gráfico de barras
  const data = {
    labels: [
      "Brzycki",
      "O'Conner",
      "Lombardi",
      "Wathan",
      "McGlothin",
      "Epley",
      "Mayhew",
    ].map((label) => `${label} (${repetitionsDone} reps)`),
    datasets: [
      {
        label: "Peso máximo",
        data: [
          resultFormulas.brzycki,
          resultFormulas.oconner,
          resultFormulas.lombardi,
          resultFormulas.wathan,
          resultFormulas.mcglothin,
          resultFormulas.epley,
          resultFormulas.mayhew,
        ],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#BCAAA4",
          "#9FA8DA",
          "#A5D6A7",
          "#90CAF9",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Maneja la presentación del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    if (weight === "" || repetitionsDone === "") {
      alert("Por favor ingrese el peso y las repeticiones realizadas");
      return;
    }
    handleCalculate();
  };

  return (
<div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow flex flex-col items-center justify-center p-4 m-4">
        <h1 className="text-6xl font-bold mb-4 font-sans">
          Calculadora de 1RM
        </h1>
        <form onSubmit={handleSubmit}>
          <label className="text-3xl font-display mb-4">
            Peso utilizado: <br />
            <input
            placeholder="Puede ser en kg o lb"
              type="number"
              name="weight"
              value={weight}
              onChange={handleInputChange}
              min="0"
              className="text-2xl"
            />
          </label>
          <br />
          <label className="text-3xl font-display mb-4">
            Repeticiones realizadas: <br />
            <input
            placeholder="Debe ser al fallo"
              className="text-2xl"
              type="number"
              name="repetitionsDone"
              value={repetitionsDone}
              onChange={handleInputChange}
              min="0"
            />
          </label>
          <br />
          <button
            type="submit"
            className=" text-3xl bg-black hover:border-x-slate-950 hover:bg-white hover:text-black hover:border hover:border-black text-white font-bold py-4 px-6 rounded my-3"
          >
            Calcular 1RM
          </button>
        </form>
        <div>
          {resultFormulas.epley !== "" && (
            <>
              <h2 className="text-center items-center justify-center text-4xl font-semibold ">Resultados de las fórmulas</h2>
              <ul className="items-center justify-center text-3xl flex-wrap list-disc">
                <li>Epley: {resultFormulas.epley}</li>
                <li>Brzycki: {resultFormulas.brzycki}</li>
                <li>McGlothin: {resultFormulas.mcglothin}</li>
                <li>Lombardi: {resultFormulas.lombardi}</li>
                <li>Mayhew: {resultFormulas.mayhew}</li>
                <li>O'Conner: {resultFormulas.oconner}</li>
                <li>Wathan: {resultFormulas.wathan}</li>
              </ul>
              <h2 className=" pt-2 text-center items-center justify-center text-4xl font-semibold ">Gráfico de barras</h2>
              <div style={{ height: "400px", width: "400px" }}>
                <Bar data={data} />
              </div>
            </>
          )}
          <div className=" w-8/12 m-20 block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class=" text-center mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cambios futuros
            </h5>
            <ul className="text-xl text-gray-700 dark:text-gray-400 list-disc">
              <li>Validación de entrada de usuario más detallada</li>
              <li>Interfaz mas interactiva</li>
              <li>Dar tambien un calculo de que peso utilizar con cuantas repeticiones a partir del 1RM</li>
            </ul>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
