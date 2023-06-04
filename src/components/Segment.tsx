import React from "react";

export const Segment = ({ children, classes }: React.PropsWithChildren<{ classes: string }>) => (
	<div className={"p-4 max-w-screen-xl m-auto " + classes}>{children}</div>
);
