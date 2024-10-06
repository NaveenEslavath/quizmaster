// src/components/QRCode.js
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

function QRCodeComponent() {
    return (
        <div>
            <h3>Scan to Join on Mobile</h3>
            <QRCodeSVG value="http://localhost:3000" size={256} />
        </div>
    );
}

export default QRCodeComponent;