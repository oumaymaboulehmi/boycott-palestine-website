import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const BarcodeScanner = ({ onScanSuccess }) => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "scanner-container",
      { fps: 10, qrbox: { width: 300, height: 300 } },
      false
    );

    scanner.render(
      (decodedText) => {
        onScanSuccess(decodedText);
        scanner.clear();
      },
      (error) => {
        console.warn(`Code scan error = ${error}`);
      }
    );

    return () => {
      scanner.clear();
    };
  }, [onScanSuccess]);

  return (
    <div className="scanner-container">
      <div id="scanner-container"></div>
    </div>
  );
};

export default BarcodeScanner;
