import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Form from "../components/Form";
import Values from "values.js";

function App() {
  const [allColors, setAllColors] = useState(new Values("#87ae73").all(5));
  const [color, setColor] = useState({
    shade: "#87ae73",
    colorShade: "",
  });
  const [isError, setIsError] = useState(false);

  const changeColor = (e) => {
    setColor({
      [e.target.name]: e.target.value,
    });
  };

  const generatePalette = (e) => {
    e.preventDefault();

    try {
      setAllColors(new Values(color.colorShade).all(5));
      setIsError(false);
    } catch (error) {
      setIsError(true);
      toast.error("Please enter a color value", {
        position: "top-center",
      });
    }
  };

  const copyToClipboard = (hexString) => {
    navigator.clipboard
      .writeText(hexString)
      .then(() => {
        console.log("Color copied to clipboard:", hexString);
      })
      .catch((err) => {
        console.error("Failed to copy color to clipboard:", err);
      });
  };

  return (
    <main>
      <Form
        color={color}
        generatePalette={generatePalette}
        changeColor={changeColor}
      />

      <ToastContainer />

      <div className="palette">
        {allColors.map((eachColor, index) => {
          return (
            <button
              className="eachColor"
              key={index}
              onClick={() => copyToClipboard(eachColor.hexString())}
              style={{
                background: eachColor.hexString(),
                color: eachColor.type === "shade" ? "white" : "black",
              }}>
              <p>{eachColor.hexString()}</p>
              <p>
                {eachColor.type} {eachColor.weight}%
              </p>
            </button>
          );
        })}
      </div>
    </main>
  );
}

export default App;
