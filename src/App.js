import React, { useState } from "react";
import { navLinks } from "./constants";

const App = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="bg-primary w-full">
      <div className="sm:px-16 px-6">
        <nav className="flex justify-between items-center py-6">
          <img className="w-[120px] h-[32px]" src="/img/logo.svg" alt="logo" />

          <ul className="list-none hidden sm:flex flex-1 justify-end">
            {navLinks.map((item) => (
              <li
                key={item.id}
                className="text-white mr-6 last:mr-0 font-poppins cursor-pointer"
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end cursor-pointer">
            <img
              className="w-[32px] h-[32px] object-contain "
              src={toggle ? "/img/menu.svg" : "/img/close.svg"}
              alt=""
              onClick={() => setToggle(!toggle)}
            />

            <ul
              className={`flex absolute bg-slate-600 p-6  flex-col mt-[3.5rem] w-[100%] h-screen ${
                !toggle ? "left-0" : "left-[-100%]"
              } duration-500`}
            >
              {navLinks.map((item) => (
                <li
                  key={item.id}
                  className="text-white mx-6 last:mr-0 font-poppins cursor-pointer my-6"
                >
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default App;
