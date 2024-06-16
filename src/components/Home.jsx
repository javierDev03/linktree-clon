import { FaGithub } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <>
      {/* h-full w-full bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur-3xl bg-opacity-0 saturate-100 backdrop-contrast-100 */}
      <div className=" flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-green-200 to-teal-200 relative overflow-hidden">
        {/* AVATAR DESCRIPCION */}

        <img
          src="./public/memoji.jpg"
          alt="img avatar"
          className=" w-28 h-28 rounded-full mb-4 shadow-2xl"
        />
        <h1 className="text-black text-2xl mb-8 flex font-bold">
          Javier dev
          <div className="ml-2 flex  items-center ">
            <MdVerified />
          </div>
        </h1>

        {/* Contenedor de enlaces */}
        <div className="flex flex-col items-center space-y-4 w-60">
          {/* LINKS */}
          <div className="border shadow-lg border-slate-950 rounded-lg px-4 py-2 w-full text-center h-full bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur-md bg-opacity-10 saturate-100 backdrop-contrast-100 font-semibold hover:bg-opacity-25">
            <a
              href="https://javierdev.netlify.app/"
              className=" flex items-center justify-center"
            >
              {" "}
              <div className=" relative right-14">
                <FaFolderOpen />
              </div>
              <span>Portfolio</span>
            </a>
          </div>
          <div className="border shadow-lg border-slate-950 rounded-lg px-4 py-2 w-full text-center  bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur-md bg-opacity-10 saturate-100 backdrop-contrast-100 font-semibold hover:bg-opacity-25">
            <a
              href="https://www.linkedin.com/in/francisco-javier-cervantes-velasco-a40517275/"
              className=" flex  justify-center"
            >
              <div className=" relative right-14">
                <FaLinkedin />
              </div>
              <span>Linkedin</span>
            </a>
          </div>
          <div className="border shadow-lg border-slate-950 rounded-lg px-4 py-2 w-full text-center  bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur-md bg-opacity-10 saturate-100 backdrop-contrast-100 font-semibold hover:bg-opacity-25">
            <a
              href="mailto:javicervel250@gmail.com"
              className=" flex justify-center"
            >
              <div className="relative right-14">
                <MdEmail />
              </div>
              <span className=" mr-4">Email</span>
            </a>
          </div>
          <div className="flex">
            <div className="mr-2">
              <a href="https://github.com/javierDev03">
                <FaGithub />
              </a>
            </div>
            <div className="mr-2">
              <a href="https://x.com/uwur7u7">
                <FaTwitterSquare />
              </a>
            </div>
            <div>
              <FaFacebook />
            </div>
          </div>
        </div>

        <h3 className="text-center font-bold mt-14 ">
          Created by Javier Cervantes
        </h3>
      </div>
    </>
  );
}
