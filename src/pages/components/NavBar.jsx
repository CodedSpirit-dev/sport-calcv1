import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <p className=" hover:text-blue-500">Inicio</p>
          </Link>
        </li>
        <li>
          <Link href="/components/oneRM">
            <p className=" hover:text-blue-500">Calculadora de 1RM</p>
          </Link>
        </li>
        <li>
          <Link href="/components/RunningPace">
            <p className=" hover:text-blue-500">Calculadora de ritmo de carrera</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p className=" hover:text-blue-500">Calculadora 3</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p className=" hover:text-blue-500">Calculadora 4</p>
          </Link>
        </li>
        <li className="donate">
          <Link href="https://www.paypal.com/donate?hosted_button_id=JWH4LGFDWSZ4S">
            <p className=" hover:text-blue-500" target="_blank" rel="noopener noreferrer">
              Donar
            </p>
          </Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}
