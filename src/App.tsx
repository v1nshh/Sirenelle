import logo from "./assets/logo.png";
import Snowfall from "react-snowfall";
import { PiStarFourLight } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram, FaFacebook } from 'react-icons/fa';


function App() {
  return (
    <div className="min-h-screen bg-orange-100 relative overflow-hidden">
      <Snowfall color="white" radius={[2,4]} speed={[1.5,2.0]} />
      <img
        src={logo}
        className="fixed -top-10 -left-7 h-40 w-40 sm:h-60 sm:w-60"
        alt="Sirenelle Logo"
      />

      
      <div className="min-h-screen flex flex-col items-center justify-start pt-52 sm:pt-60 text-center px-4">
        <h1 className="text-4xl sm:text-7xl font-bold" style={{ fontFamily: '"Dancing Script", cursive' }}>
          Welkom bij Sirenelle
        </h1>
        <p
          className="text-xl sm:text-3xl text-gray-800 font-normal mt-1"
          style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
        >
          Discreet. Elegant. Veilig.
        </p>
        <p
          className="flex gap-2 items-center text-xl sm:text-2xl font-medium mt-8"
          style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
        >
          <PiStarFourLight />Veiligheid in stijl – binnenkort beschikbaar<PiStarFourLight />
        </p>
      </div>

      <div className="absolute bottom-8 w-full px-4">
        <p className="text-center text-lg sm:text-xl font-medium">
          Blijf onze socials volgen voor updates. Het Sirenelle-team wenst jullie fijne feestdagen! xxx
        </p>
        <div className="flex justify-center gap-4 sm:gap-6 mt-3 text-2xl sm:text-3xl text-gray-800">
          <a href="https://www.instagram.com/sirenelle.be/" target="_blank"><FaInstagram /></a>
          <a href="https://www.facebook.com/profile.php?id=61584474654588" target="_blank"><FaFacebook /></a>
          <a href="mailto:Info@sirenelle.be?subject=Vraag%20over%20Sirenelle"><MdOutlineMail /></a>
        </div>
      </div>
    </div>
  );
}


export default App
