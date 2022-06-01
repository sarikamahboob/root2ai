import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#2E363A]">
      <footer class="footer p-10  text-neutral-content container mx-auto">
        <div className="flex items-center">
          <a
            href="#"
            className=" bg-[#0077C5] p-4 rounded-[50%] text-white hover:bg-white hover:text-[#0077C5] transition hover:ease-in-out"
          >
            <span className="text-lg   ">
              <MdEmail />
            </span>{" "}
          </a>
          <p>Email: info@gmail.com / info@gmail.com</p>
        </div>
        <div className="flex items-center">
          <a
            href="#"
            className=" bg-[#0077C5] p-4 rounded-[50%] text-white hover:bg-white hover:text-[#0077C5] transition hover:ease-in-out"
          >
            <span className="text-lg   ">
              <BsTelephoneFill />
            </span>{" "}
          </a>
          <p>+ 88888888888 / </p>
          <a
            href="#"
            className=" bg-[#0077C5] p-4 rounded-[50%] text-white hover:bg-white hover:text-[#0077C5] transition hover:ease-in-out"
          >
            <span className="text-lg   ">
              <BsWhatsapp />
            </span>
          </a>
          <p>+ 999999999 </p>
        </div>
        <div className="flex ">
          <a
            href="#"
            className=" bg-[#0077C5] p-4 rounded-[50%] text-white hover:bg-white hover:text-[#0077C5] transition hover:ease-in-out"
          >
            <span className="text-lg   ">
              <FaFacebookF />
            </span>
          </a>
          <a
            href="#"
            className=" bg-[#0077C5] p-4 rounded-[50%] text-white hover:bg-white hover:text-[#0077C5] transition hover:ease-in-out"
          >
            <span className="text-lg   ">
              <AiFillInstagram />
            </span>
          </a>
          <a
            href="#"
            className=" bg-[#0077C5] p-4 rounded-[50%] text-white hover:bg-white hover:text-[#0077C5] transition hover:ease-in-out"
          >
            <span className="text-lg   ">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </footer>
      <footer class="footer px-10 py-4 border-t border-gray-600 flex items-center justify-center ">
        <p className="text-white">Copyright 2022 ROOT2AI</p>
      </footer>
    </div>
  );
};

export default Footer;
