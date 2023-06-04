import React from "react";
import { SocialIcons } from "../components/SocialIcons";

function DefaultTemplate({ children }: React.PropsWithChildren<{}>) {
	return (
		<div className="bg-gray-800 text-gray-200 svg-pattern font-poppins">
			{children}

			<footer className="m-auto w-full mt-32 pb-16 bg-gray-900 p-4">
				<div className="max-w-screen-lg grid grid-cols-2 text-gray-200 m-auto">
					<div className="mt-8">
						<p className="mb-4 font-bold">Info</p>
						<div className="text-gray-500">
							<p>Lawrey's 3D art portfolio</p>
							<p>
								<a target="_blank" href="https://icons8.com/icon/97652/roblox">
									Roblox logo
								</a>{" "}
								icon by{" "}
								<a target="_blank" href="https://icons8.com">
									Icons8
								</a>
							</p>
							<p>made by blackshibe</p>
							<p>2023</p>
						</div>
					</div>

					<div className="mt-8">
						<p className="mb-4 font-bold">Contact</p>
						<div className="text-gray-500">
							<SocialIcons />
						</div>
					</div>
				</div>
				{/* 
				<img
					src="cute.png"
					alt="fox on the bottom"
					className="invert from-transparent bg-gradient-to-b w-screen m-auto"
				/> */}
			</footer>
		</div>
	);
}

export default DefaultTemplate;
