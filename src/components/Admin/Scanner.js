import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const BarcodeScanner = ({ onScanSuccess }) => {
  const [scannedResult, setScannedResult] = useState('');

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "scanner-container",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      /* verbose= */ false
    );

    scanner.render(onScanSuccess, onScanFailure);

    function onScanSuccess(decodedText, decodedResult) {
      setScannedResult(decodedText);
      if (onScanSuccess) {
        onScanSuccess(decodedText);
      }
      scanner.clear();
    }

    function onScanFailure(error) {
      console.warn(`Code scan error = ${error}`);
    }

    return () => {
      scanner.clear();
    };
  }, [onScanSuccess]);

  return (
    <div>
      <div id="scanner-container" style={{ width: '640px', height: '480px' }}></div>
      {scannedResult && (
        <div>
          <label>Résultat du scan:</label>
          <input type="text" value={scannedResult} readOnly />
        </div>
      )}
    </div>
  );
};

export default BarcodeScanner;
