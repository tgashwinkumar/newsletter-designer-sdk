import React from "react";

const Home = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden font-display">
      <main className="w-1/2 bg-black h-full">
        <nav className="bg-teal w-full px-8 py-2 flex items-center space-x-4">
          <img
            className="filter h-20"
            src="https://upload.wikimedia.org/wikipedia/en/e/eb/PSG_College_of_Technology_logo.png"
            alt="PSG College of Technology"
          />
          <div className="">
            <h1 className="text-black text-2xl font-semibold">
              Newsletter API
            </h1>
            <h2 className="text-slate text-lg">
              PSG College of Technology, Coimbatore
            </h2>
          </div>
        </nav>
      </main>
    </div>
  );
};

export default Home;
