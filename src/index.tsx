import "./index.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Projects from "./routes/Projects";
import Site from "./routes/Landing";
import NotFound from "./routes/NotFound";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Site />} />
				<Route path="/projects/:id" element={<Projects />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
