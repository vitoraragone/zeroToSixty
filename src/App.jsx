import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faBars,
  faBolt,
  faChartColumn,
  faChartLine,
  faCheck,
  faClock,
  faDroplet,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <body className="font-poppins">
      <header className="">
        <div
          style={{
            backgroundImage: "url('./assets/banner.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: 600,
          }}
        >
          {/* navbar*/}
          <div className="fixed top-0 left-0 right-0 z-[1000] glasmorphism w-screen">
            <div className="container mx-auto flex items-center justify-between p-3">
              {/* logo */}
              <div className="w-fit p-2 bg-black rounded">
                <img
                  className="block w-[100px] md:w-[125px]"
                  src="./assets/logo.png"
                  alt=""
                  width={125}
                  height={125}
                />
              </div>
              <div className="hidden md:flex gap-10">
                <a href="#about">
                  <p className="text-white font-medium hover:text-red-600 duration-300">
                    Sobre Nós
                  </p>
                </a>
                <a href="#services">
                  <p className="text-white font-medium hover:text-red-600 duration-300">
                    Serviços
                  </p>
                </a>
                <a href="#contact">
                  <p className="text-gray-900 bg-white rounded px-2 font-medium hover:bg-red-600 hover:text-white duration-300">
                    Contato
                  </p>
                </a>
              </div>
              {/* mobile */}
              <div className="md:hidden">
                <Menu placement="bottom-start">
                  <MenuHandler>
                    <Button className="bg-transparent p-4 shadow-none">
                      <FontAwesomeIcon
                        icon={faBars}
                        style={{ color: "#898989" }}
                        size="xl"
                      />
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem>
                      <a href="#about">
                        <p className="text-gray-900 font-medium hover:text-red-600 duration-300">
                          Sobre Nós
                        </p>
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href="#services">
                        <p className="text-gray-900 font-medium hover:text-red-600 duration-300">
                          Serviços
                        </p>
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href="#contact">
                        <p className="text-gray-900 font-medium hover:bg-red-600">
                          Contato
                        </p>
                      </a>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
          <div className="h-full flex items-center container mx-auto px-2">
            <p className="text-gray-300 font-medium text-5xl md:text-6xl underline decoration-red-600  decoration-3 underline-offset-8">
              Engineering at it's finest
            </p>
          </div>
        </div>
      </header>
      <main
        className="mb-[200px]"
        style={{
          backgroundImage: "url('./assets/pattern.png')",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      >
        {/* about */}
        <section className="mt-[100px] container mx-auto px-2">
          <h1 className="text-gray-300 text-4xl">
            sobre nós<span className="text-red-600 font-bold">.</span>
          </h1>
          <h2 className="uppercase text-gray-300/20 text-xl">Zero to Sixty</h2>
          <p className="text-gray-50 mt-5 text-xl font-regular max-w-[75ch]">
            Fundada em 2019, a{" "}
            <span className="text-red-600">Zero to Sixty</span> reúne o que há
            de melhor e mais moderno no que se refere à calibração de motores –
            seja ciclo Otto, Diesel ou Wankel. Com profissionais capacitados e
            com vasta experiência na área automobilística, entregamos soluções
            totalmente personalizadas e da maneira mais eficiente, segura e ágil
            possível.
          </p>
        </section>
        {/* services */}
        <section className="mt-[100px] container mx-auto" id="services">
          <div className="px-2">
            <h1 className="text-gray-300 text-4xl">
              serviços<span className="text-red-600 font-bold">.</span>
            </h1>
            <h2 className="uppercase text-gray-300/20 text-xl">
              Peformance tuning
            </h2>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-10 px-2">
            {/* ECU */}
            <div className="text-white bg-red-600/10 hover:bg-red-600/30 duration-300 p-5 rounded w-[400px] shadow md:hover:scale-105">
              <div className="flex items-center gap-3 text-xl">
                <FontAwesomeIcon
                  icon={faChartColumn}
                  style={{ color: "#ff0000" }}
                />
                <p>ECU</p>
              </div>
              <p className="uppercase text-gray-300/80">Engine control unit</p>
              <ul className="mt-5 flex flex-col">
                <li className="flex items-center gap-3 py-3">
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    style={{ color: "#ff0000" }}
                  />
                  <p className="text-sm">
                    Aumento nos números de potência e torque
                  </p>
                </li>
                <li className="flex items-center gap-3 py-3">
                  <FontAwesomeIcon
                    icon={faDroplet}
                    style={{ color: "#ff0000" }}
                  />
                  <p className="text-sm">Redução no consumo de combustível*</p>
                </li>
                <li className="flex items-center gap-3 py-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "#ff0000" }}
                  />
                  <p className="text-sm">Mapas personalizados</p>
                </li>
              </ul>
            </div>
            {/* TCU */}
            <div className="text-white bg-red-600/10 hover:bg-red-600/30 duration-300  p-5 rounded w-[400px] shadow md:hover:scale-105">
              <div className="flex items-center gap-3 text-xl">
                <FontAwesomeIcon icon={faGear} style={{ color: "#ff0000" }} />
                <p>TCU</p>
              </div>
              <p className="uppercase text-gray-300/80">
                Transmission Control Unit
              </p>
              <ul className="mt-5 flex flex-col">
                <li className="flex items-center gap-3 py-3">
                  <FontAwesomeIcon icon={faBolt} style={{ color: "#ff0000" }} />
                  <p className="text-sm">Remoção do limitador de velocidade</p>
                </li>
                <li className="flex items-center gap-3 py-3">
                  <FontAwesomeIcon
                    icon={faChartLine}
                    style={{ color: "#ff0000" }}
                  />
                  <p className="text-sm">Launch-Control personalizado</p>
                </li>
                <li className="flex items-center gap-3 py-3">
                  <FontAwesomeIcon
                    icon={faClock}
                    style={{ color: "#ff0000" }}
                  />
                  <p className="text-sm">
                    Redução no tempo de troca entre as marchas
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* MOBILE IMAGES */}
          <div className="mt-[50px] container overflow-hidden mx-auto md:hidden">
            <Slider {...settings}>
              <div className="min-w-[250px] h-[250px] bg-red-600/20 shadow opacity-80 hover:opacity-100 hover:scale-105 duration-300">
                <img
                  className="object-cover w-full h-[250px]"
                  src="./assets/bmw.jpg"
                  alt=""
                />
              </div>
              <div className="min-w-[250px] h-[250px] bg-red-600/20 shadow opacity-80 hover:opacity-100 hover:scale-105 duration-300">
                <img
                  className="object-cover w-full h-[250px]"
                  src="./assets/subaru.jpg"
                  alt=""
                />
              </div>
              <div className="min-w-[250px] h-[250px] bg-red-600/20 shadow opacity-80 hover:opacity-100 hover:scale-105 duration-300">
                <img
                  className="object-cover w-full h-[250px]"
                  src="./assets/porsche.jpg"
                  alt=""
                />
              </div>
              <div className="min-w-[250px] h-[250px] bg-red-600/20 shadow opacity-80 hover:opacity-100 hover:scale-105 duration-300">
                <img
                  className="object-cover w-full h-[250px]"
                  src="./assets/lamborghini.jpg"
                  alt=""
                />
              </div>
              <div className="min-w-[250px] h-[250px] bg-red-600/20 shadow opacity-80 hover:opacity-100 hover:scale-105 duration-300">
                <img
                  className="object-cover w-full h-[250px]"
                  src="./assets/mercedes.jpg"
                  alt=""
                />
              </div>
            </Slider>
          </div>
          {/* LARGER DEVICES IMAGES */}
          <div className="hidden md:flex flex-wrap container mt-[50px] gap-5 items-center justify-center py-5 px-5">
            <div className="w-[350px] h-[250px] bg-red-600/20 rounded shadow opacity-80 hover:opacity-100 hover:scale-105 duration-300">
              <img
                className="object-cover w-full h-[250px] rounded"
                src="./assets/bmw.jpg"
                alt=""
              />
            </div>
            <div className="w-[350px] h-[250px] bg-red-600/20 rounded shadow opacity-80 hover:opacity-100 hover:scale-105 duration-300">
              <img
                className="object-cover w-full h-[250px] rounded"
                src="./assets/subaru.jpg"
                alt=""
              />
            </div>
            <div className="w-[350px] h-[250px] bg-red-600/20 rounded shadow opacity-80 hover:opacity-100 hover:scale-105 duration-300">
              <img
                className="object-cover w-full h-[250px] rounded"
                src="./assets/porsche.jpg"
                alt=""
              />
            </div>
            <div className="w-[350px] h-[250px] bg-red-600/20 rounded shadow opacity-80 hover:opacity-100 hover:scale-105 duration-300">
              <img
                className="object-cover w-full h-[250px] rounded"
                src="./assets/lamborghini.jpg"
                alt=""
              />
            </div>
            <div className="w-[350px] h-[250px] bg-red-600/20 rounded shadow opacity-80 hover:opacity-100 hover:scale-105 duration-300">
              <img
                className="object-cover w-full h-[250px] rounded"
                src="./assets/mercedes.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
        {/* contact */}
        <section className="mt-[150px] container mx-auto px-2" id="contact">
          <h1 className="text-gray-300 text-4xl">
            fale conosco<span className="text-red-600 font-bold">.</span>
          </h1>
          <h2 className="uppercase text-gray-300/20 text-xl">ZERO TO SIXTY</h2>
        </section>
      </main>
    </body>
  );
}

export default App;
