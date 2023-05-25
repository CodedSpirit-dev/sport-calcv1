import Link from "next/link";
import { SlPaypal } from "react-icons/sl"

export default function NavBar() {
  return (
    <div className="p-4 flex justify-center bg-black text-white">
      <nav>
        <div>
          <ul className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <li>
              <Link href="/">
                <p className="text-2xl font-semibold hover:text-blue-500 inline-flex items-center border-b-2 border-b-white hover:border-b-blue-500">Inicio</p>
              </Link>
            </li>
            <li>
              <Link href="/components/oneRM">
                <p className="text-2xl font-semibold hover:text-blue-500 inline-flex items-center border-b-2 border-b-white hover:border-b-blue-500">Calculadora de 1RM</p>
              </Link>
            </li>
            <li>
              <Link href="/components/RunningPace">
                <p className="text-2xl font-semibold hover:text-blue-500 inline-flex items-center border-b-2 border-b-white hover:border-b-blue-500">Calculadora de ritmo de carrera</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p className="text-2xl font-semibold hover:text-blue-500 inline-flex items-center border-b-2 border-b-white hover:border-b-blue-500">Proximamente</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p className="text-2xl font-semibold hover:text-blue-500 inline-flex items-center border-b-2 border-b-white hover:border-b-blue-500">Proximamente</p>
              </Link>
            </li>
            <li className="donate text-2xl font-semibold hover:text-blue-500">
              <Link href="https://www.paypal.com/donate/?hosted_button_id=DRK97T3PRBGK8" target="_blank" rel="noopener noreferrer">
                <p className="text-2xl font-semibold hover:text-blue-500 inline-flex items-center border-b-2 border-b-white hover:border-b-blue-500"> 
                  Donar 
                  <SlPaypal size="24px" className="ml-2" />
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
