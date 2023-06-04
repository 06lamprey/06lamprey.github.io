import { Text } from "./Text";
import { SocialIcons } from "./SocialIcons";

export const Overview = () => {
	return (
		<div className="w-full relative min-h-screen flex flex-col lg:flex-row justify-center items-center z-10">
			<img
				className="rounded-full select-none mt-36 sm:mt-0 lg:mr-16"
				height={256}
				width={256}
				src="fuck.webp"
				alt="profile icon"
			/>
			<div className="flex gap-4 p-4 items-center">
				<div className="text-center lg:text-left max-w-5xl">
					<h1 className="font-semibold mb-2 text-4xl select-none sm:text-6xl">Lamprey</h1>
					<p className="text-gray-400 select-none ml-1 text-2xl">Freelance 3D Artist</p>
					<br />
					<div className="text-gray-300 text-left md:mt-0 mt-10">
						<Text>Hi, I'm kojichama/06Lamprey!</Text>
						<br />
						<Text>
							I am a freelance 3D artist on ROBLOX, for nearly the past two years I have modelled almost
							exclusively body armor and other equipment for ROBLOX in the modern military genre.
						</Text>
						<br />
						<Text>
							I have extensive knowledge in Adobe Substance 3D Painter and the main modelling tool I use
							is Blender, but I also have basic level knowledge in other programs such as ZBrush,
							CLO3D(Marvelous Designer), and Plasticity3D(CAD).
						</Text>

						<br />

						<div className=" text-left text-gray-300 text-1xl flex flex-col w-full">
							<SocialIcons />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
