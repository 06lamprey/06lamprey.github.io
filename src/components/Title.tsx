import React from "react";

export const Title = ({ children }: React.PropsWithChildren<{}>) => (
	<h1 className="font-semibold font-poppins mb-4 text-gray-100 text-4xl sm:text-6xl tracking-wide">{children}</h1>
);
