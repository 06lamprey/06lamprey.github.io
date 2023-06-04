import DefaultTemplate from "../templates/DefaultTemplate";
import { Title } from "../components/Title";
import { Segment } from "../components/Segment";

function Projects() {
	return (
		<DefaultTemplate>
			<Segment classes="h-screen pt-16 flex items-center justify-center flex-col">
				<Title>Page not found!</Title>
				<a href="/" className="bg-gray-600 p-2 pl-4 pr-4 rounded-md hover:bg-gray-700">
					Back to main page
				</a>
			</Segment>
		</DefaultTemplate>
	);
}

export default Projects;
