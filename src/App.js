import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import "./index.css";

function App() {
  const [data, setData] = React.useState("");
  const [torchOn, setTorchOn] = React.useState(false);
  const [appear, setAppear] = React.useState(false);

  const appearFunc = () => {
    setAppear(true);
  };

  return (
    <>
      {!appear ? (
        <div>
          <div className="scanImage">
            <iframe  src="https://giphy.com/embed/taVCVuunNzQjBKTrYn" width="361" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
          </div>
          <div className="scan-1">
            <button className="button-27" onClick={appearFunc}>
              scan now
            </button>
          </div>
        </div>
      ) : (
        <div>
          <BarcodeScannerComponent
            // width={100}
            height={500}
            torch={torchOn}
            onUpdate={(err, result) => {
              if (result) setData(result.text);
            }}
          />
          <p>{data}</p>
          <button className="button-27" onClick={() => setTorchOn(!torchOn)}>
            Turn FlashLight {torchOn ? "Off" : "On"}
          </button>
        </div>
      )}
    </>
  );
}

export default App;
