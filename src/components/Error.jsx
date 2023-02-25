import React from 'react';

export const Error = ({ children }) => {
	return (
		<div className="bg-red-500 text-white text-center p-2 uppercase font-bold mb-3 rounded-md">
			<p>{children}</p>
		</div>
	);
};

//el children sirve cuando tienes que pasar muchas propiedades o código
