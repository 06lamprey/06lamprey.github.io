import React from "react";

export const Text = ({ children }: React.PropsWithChildren<{}>) => (
	<p className="font-poppins text-gray-300">{children}</p>
);
