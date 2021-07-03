import React from 'react';
import QRCode from 'qrcode.react';

const QR = (props) => {
	const image = {
		src: "/cougar.png",
		width: 65,
		height: 65,
		excavate: true
	}
 
	const qrOptions = {
		fgColor: "#ec1c24",
		bgColor: "#f5f5f5",
		level: "H",
		includeMargin: false,
		size: 250,
		imageSettings: image
	}
	
	return (
		<div className="QR">
			<QRCode value={props.value} {...qrOptions} />
		</div>
	);
}

export default QR;
