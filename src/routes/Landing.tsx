import { useWindowSize } from "usehooks-ts";
import { Overview } from "../components/Overview";
import useScrollPosition from "../hooks/useScrollPosition";
import DefaultTemplate from "../templates/DefaultTemplate";
import { Segment } from "../components/Segment";
import { Title } from "../components/Title";
import { PortfolioPiece } from "../components/PortfolioPiece";
import { PROJECTS } from "../projects";

function Site() {
	const position = useScrollPosition();
	const { height } = useWindowSize();

	return (
		<DefaultTemplate>
			{/* 1st page */}
			<div className="min-h-screen leading-6 text-left text-md w-full m-0 relative grid bg-image-wallpaper">
				<Overview />
				<div className="w-full h-full bg-gray-900 opacity-80 absolute"></div>

				<p
					className="absolute bottom-10 text-center w-full text-gray-600 italic ease-in-out duration-100"
					style={{
						opacity: position === 0 && height > 850 ? "100%" : "0%",
					}}
				>
					More info below
				</p>
			</div>

			<Segment classes="pt-10">
				<Title>Experience</Title>
				<ul className="list-disc ml-4 mt-8 space-y-1 text-gray-300">
					<li>Began modelling early September 2021</li>
					<li>Experienced in highpoly to lowpoly game ready asset pipeline</li>
					<li>Willing to create highpoly assets for texturing commissions</li>
					<li>Efficient in the creation of highpoly assets using remeshing and other modelling tools</li>
					<li>
						Extensive technical knowledge in texturing fabric-type assets aswell as hardsurface-type assets
					</li>
					<li>Familiar with basic principles of design</li>
					<li>Familiar with basic CAD modelling (Plasticity3D)</li>
					<li>Honestly a bad designer but I've been there a few times</li>
				</ul>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8">
					<PortfolioPiece
						link="https://www.roblox.com/groups/13546557/HIIIPower#!/about"
						role="Lead (and only) 3D Artist"
						title="LampreyMilsimWorks"
					>
						<p>
							LampreyMilsimWorks is a company ran by myself and my friend nene, we specialize in creating
							high quality assets for the Milsim community on ROBLOX.
						</p>
					</PortfolioPiece>
					<PortfolioPiece
						link="https://www.roblox.com/groups/15128644/TAU#!/about"
						role="3D Artist"
						title="HiiiPower (TAU1A)"
					>
						<p>Not willing to disclose involvement and employment, not very significant.</p>
					</PortfolioPiece>
				</div>
			</Segment>
			<Segment classes="pt-10">
				<Title>My work</Title>

				<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
					{PROJECTS.map((project) => (
						<a href={`/projects/${project.url}`} key={project.url}>
							<div
								className="aspect-square relative hover:grayscale transition-all rounded-md shadow-xl"
								style={{
									backgroundImage: `url('${project.images[0].src}')`,
									backgroundPosition: "center",
									backgroundSize: "cover",
								}}
							>
								<div className="transition-all opacity-0 hover:opacity-100">
									<div className="w-full h-full bg-gray-900 opacity-50 absolute"></div>
									<div className="flex justify-center items-center flex-col gap-2 w-full h-full absolute">
										<p className="z-100 font-bold text-2xl">{project.title}</p>
										<p className="z-100">Click to view</p>
									</div>
								</div>
							</div>
						</a>
					))}
				</div>
			</Segment>
		</DefaultTemplate>
	);
}

export default Site;
