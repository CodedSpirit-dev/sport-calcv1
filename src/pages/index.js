import Head from "next/head";
import Link from "next/link";
import { SlPaypal } from "react-icons/sl"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-2 sm:px-4 md:px-8 lg:px-16">
      <Head>
        <title>Calculadoras deportivas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center w-full">
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-4 bg">Calculadoras deportivas</h1>
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl mb-4 py-8">Selecciona una calculadora:</h2>
          <ul className="flex flex-col sm:flex-row flex-wrap items-center justify-center space-x-0 sm:space-x-4">
            {/* Agregué flex-col en pequeños dispositivos y flex-row en pantallas más grandes. */}
            <li className="mb-4 sm:mb-0">
              <Link href="/components/oneRM">
                <h3 className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-2xl sm:text-3xl md:text-4xl">Calculadora de RM</h3>
              </Link>
            </li>
            <li className="mb-4 sm:mb-0">
              <Link href="/components/RunningPace">
                <h3 className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-2xl sm:text-3xl md:text-4xl">Calculadora de ritmo de carrera</h3>
              </Link>
            </li>
            <li className="mb-4 sm:mb-0">
              <Link href="#">
                <h3 className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-2xl sm:text-3xl md:text-4xl">Proximamente</h3>
              </Link>
            </li>
            <li className="mb-4 sm:mb-0">
              <Link href="#">
                <h3 className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-2xl sm:text-3xl md:text-4xl">Proximamente</h3>
              </Link>
            </li>
          </ul>
          <div className=" w-full sm:w-8/12 m-20 block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="text-center mb-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cambios futuros
            </h5>
            <ul className="text-lg sm:text-xl text-gray-700 dark:text-gray-400 list-disc">
              <li>Posibilidad de conectarse a una app movil</li>
              <li>Formulario de contacto para peticiones</li>
              <li>Dar tambien un calculo de que peso utilizar con cuantas repeticiones a partir del 1RM</li>
              <li>Cambiar icono de pagina</li>
              <li>Centrar mejor esta seccion de cambios futuros😔</li>
            </ul>
        </div>
        </div>
      </main>
      <button type="button" class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-xl sm:text-2xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
  Donaciones <SlPaypal className="ml-2" size="1.5em sm:size-2em"/>
</button>
      <Footer/>
    </div>
  );
}
