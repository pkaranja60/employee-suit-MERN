import React from "react";

const Navbar = () => {
  return (
    <>
      {/* <!-- component --> */}
      <header className="bg-white mt-24">
        <div
          className="container h-auto mx-auto px-4 py-5 flex items-center"
          //   className="pt-3 md:pt-2 pb-2 px-2 mt-0 h-auto fixed w-full z-20 top-0"
        >
          {/* <!-- logo --> */}
          <div className="mr-auto md:w-48 flex-shrink-0">
            <img
              src="https://tailus.io/images/logo.svg"
              className="w-32"
              alt=""
            />
          </div>

          {/* <!-- username --> */}
          <div className="ml-4 hidden sm:flex flex-col font-bold">
            <span>$2,650,59</span>
          </div>
        </div>

        <hr />
      </header>
    </>
  );
};

export default Navbar;
