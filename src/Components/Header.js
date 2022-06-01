import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-[#00478F]">
      <div className="container mx-auto">
        <footer class="footer items-center p-4 text-neutral-content">
          <div class="items-center grid-flow-col">
            <p className="flex items-center flex-col lg:flex-row">
              {" "}
              <span className="mr-2 ">
                <BsTelephoneFill />
              </span>{" "}
              +999999999999 /
            </p>
            <p className="flex items-center flex-col lg:flex-row ">
              {" "}
              <span className="mr-2 ">
                <BsWhatsapp />
              </span>{" "}
              +999999999999
            </p>
            <div
              class="divider divider-horizontal "
              style={{ backgroundColor: "white", width: "1px" }}
            ></div>
            <p className="flex items-center font-bold">
              {" "}
              <span className="mr-2">
                <MdEmail />
              </span>{" "}
              Email: info@gmail.com / info@gmail.com
            </p>
          </div>
          <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <p className="flex items-center ">
              {" "}
              <span className="mr-2">
                <AiFillQuestionCircle />
              </span>{" "}
              Have any questions?
              <a className="ml-6">
                {" "}
                <FaFacebookF />
              </a>
              <a className="ml-2">
                <FaInstagram />
              </a>
              <a className="ml-2">
                <FaLinkedinIn />
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Header;
