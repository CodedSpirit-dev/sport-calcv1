import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

const Footer = () => (
  <footer className="flex justify-center items-center py-4 bg-gray-200 fixed bottom-0 w-full">
    <a 
      href="https://github.com/CodedSpirit-dev" 
      target="_blank" 
      rel="noopener noreferrer"
      className="mx-2"
    >
      <FaGithub size="24px" />
    </a>
    <p className=' mx-2'>Creado con </p> <AiOutlineHeart/> <p className=' mx-2'> por tu CodedSpirit</p>
    <a 
      href="https://www.linkedin.com/in/victor-verdeja-9b9710218/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="mx-2"
    >
      <FaLinkedin size="24px" />
    </a>
  </footer>
);

export default Footer;
