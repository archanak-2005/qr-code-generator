import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./Qr.css";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  const [qrValue, setQrValue] = useState("");

  const generateQRCode = () => {
    setQrValue(text);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">QR Code Generator</h1>
        <input
          type="text"
          placeholder="Enter text or URL"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="input"
        />
        <button onClick={generateQRCode} className="button">
          Generate QR Code
        </button>
        {qrValue && (
          <div className="qr-code">
            <QRCode value={qrValue} size={150} />
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
