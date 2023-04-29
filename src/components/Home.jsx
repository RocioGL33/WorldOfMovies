import React, { useState } from "react";
import ReactStars from "react-stars";
import Movie from "./Movie";
import { useMovies } from "../hooks/useMovies";
import { Link } from "react-router-dom";
import HomeCinema from "../img/undraw_home_cinema_l7yl";
import Flame from "../img/flame";

const Home = () => {
  const [search, setSearch] = useState("");
  const [star, setStar] = useState(0);
  const { movies } = useMovies(search);

  const handleOnChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleOnClick = (value) => {
    if (star === value) {
      setStar(0);
    } else {
      setStar(value);
    }
  };

  let result = !search
    ? movies
    : movies.filter((d) =>
        d.original_title.toLowerCase().includes(search.toLocaleLowerCase())
      );

  result = movies.filter(
    (movie) =>
      !star ||
      (movie.vote_average <= star * 2 && movie.vote_average >= (star - 1) * 2)
  );

  // Obtener el botón de desplazamiento hacia arriba
  var mybutton = document.querySelector("button");

  // Cuando el usuario desplaza hacia abajo 20px desde la parte superior del documento, mostrar el botón
  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  };

  // Cuando el usuario hace clic en el botón, desplazar hacia arriba
  mybutton.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  return (
    <div className="bg-darkGrey">
      <button class="fixed bottom-4 right-4 p-2">
        <div class="bg-[#C11511] rounded-full p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 6.707l-4.146 4.147a.5.5 0 01-.708-.708l5-5a.5.5 0 01.708 0l5 5a.5.5 0 01-.708.708L10 6.707z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </button>

      <div className="flex items-center w-full py-48 bg-[url('https://i.imgur.com/3Zbkopf.png')] bg-center">
        <div className="relative left-5 bottom-[260px] bg-darkGrey h-11 w-11 flex items-center justify-center rounded-full">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="estate"
              width="25"
              height="25"
            >
              <path
                fill="#FFFFFF"
                d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="container flex-col mx-auto text-center text-white">
          <h1 className="text-7xl font-medium mb-6">
            Your favorite movies have arrived.
          </h1>
          <p className="text-2xl mb-12">They all have something to tell you.</p>

          <input
            type="search"
            name="search"
            placeholder="Search"
            value={search}
            onChange={(e) => handleOnChange(e)}
            className="bg-white h-10 w-96 px-5 pr-10 rounded-full text-sm text-darkGrey focus:outline-none"
          />
          <button type="submit" className="relative right-8 top-1 ">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style={{ "enable-background": "new 0 0 56.966 56.966" }}
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex justify-around">
        <div className="flex h-8 relative right-20">
          <div className="pr-2 pt-[50px]">
            <h2 className="text-white text-2xl">Releases of the week</h2>
          </div>
          <div className="pt-[52px]">
            <Flame />
          </div>
        </div>
        <div className="pt-10 relative left-20">
          <ReactStars
            count={5}
            value={star}
            onChange={handleOnClick}
            size={40}
            half={false}
            color2={"#C11511"}
          />
        </div>
      </div>

      <div flex="true" className="flex flex-col items-center">
        <div className="grid grid-cols-4 gap-5 px-8 pt-8">
          {result.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              original_title={movie.original_title}
              original_language={movie.original_language}
              img={movie.img}
              vote_average={movie.vote_average}
            />
          ))}
        </div>
      </div>

      <footer aria-label="Site Footer" className="bg-darkGrey mt-6">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center sm:justify-start">
                <HomeCinema />
              </div>

              <p className="mt-6 max-w-md text-center leading-relaxed text-white sm:max-w-xs sm:text-left">
                The latest movie releases at your fingertips.
              </p>

              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-grey">Find Us</p>

                <nav aria-label="Footer About Nav" className="mt-8">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a className="text-white" href="/">
                        California - CA
                      </a>
                    </li>

                    <li>
                      <a className="text-white" href="/">
                        Utah - UT
                      </a>
                    </li>

                    <li>
                      <a className="text-white" href="/">
                        Louisiana - LA
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-grey">Our Services</p>

                <nav aria-label="Footer Services Nav" className="mt-8">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a className="text-white" href="/">
                        Cinema 2D
                      </a>
                    </li>

                    <li>
                      <a className="text-white" href="/">
                        Cinema 3D
                      </a>
                    </li>

                    <li>
                      <a className="text-white" href="/">
                        Cinema 4D
                      </a>
                    </li>

                    <li>
                      <a className="text-white" href="/">
                        Cinema 4D Black
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-grey">Help</p>

                <nav aria-label="Footer Helpful Nav" className="mt-8">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a className="text-white" href="/">
                        FAQs
                      </a>
                    </li>

                    <li>
                      <a className="text-white" href="/">
                        Support
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-grey">Contact Us</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 text-grey"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>

                      <span className="flex-1 text-white">
                        worldofmovies@wom.com
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 text-grey"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>

                      <span className="flex-1 text-white">0123456789</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t text-grey pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="mt-4 text-sm text-grey sm:order-first sm:mt-0">
                &copy; 2023 World of Movies. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
