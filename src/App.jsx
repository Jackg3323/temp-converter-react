import { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";

function App() {
  const [C, setC] = useState("");
  const [F, setF] = useState("");
  return (
    <>
      <h1 className="my-4 text-center text-2xl font-bold">
        Temperature Converter
      </h1>

      <form className="mx-auto mt-8 flex w-1/3 justify-between">
        <Input label="Celsius" />
        <Input label="Fahrenheit" />
      </form>
    </>
  );
}

export default App;
