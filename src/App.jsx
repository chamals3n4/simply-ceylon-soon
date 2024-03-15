import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mx-auto max-w-2xl py-40 sm:py-60 lg:py-20">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get Ready to Discover Paradise
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get ready to explore Sri Lanka like never before. We're building an
            exciting new travel platform to help you discover the island's
            hidden treasures.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
