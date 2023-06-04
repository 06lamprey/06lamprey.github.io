import DefaultTemplate from "../templates/DefaultTemplate";
import { Title } from "../components/Title";
import { Segment } from "../components/Segment";
import { PROJECTS } from "../projects";
import { useCallback, useState } from "react";
import { useScrollLock } from "../hooks/useScrollLock";
import Gallery from "react-photo-gallery";

import Lightbox from "yet-another-react-lightbox";
import Download from "yet-another-react-lightbox/plugins/download";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function Projects() {
	let project_id = window.location.pathname.split("/")[2];
	let project = PROJECTS.find((project) => project.url === project_id);

	const [selectedImage, selectImage] = useState<number>(0);
	const [imageShown, setImageShown] = useState<boolean | undefined>(false);
	const [lockScroll, unlockScroll] = useScrollLock();

	const openLightbox = useCallback(
		(_: any, { index }: { index: number }) => {
			selectImage(index);
			setImageShown(true);
			lockScroll();
		},
		[lockScroll]
	);

	if (!project) {
		// redirect to 404
		window.location.href = "/404";
		return <DefaultTemplate></DefaultTemplate>;
	}

	return (
		<DefaultTemplate>
			<Segment classes="min-h-screen pt-32">
				<Lightbox
					plugins={[Download, Thumbnails]}
					open={imageShown}
					slides={project.images}
					close={() => {
						setImageShown(false);
						unlockScroll();
					}}
					index={selectedImage}
				/>

				<Title>{project.title}</Title>

				<div className="mt-16 mb-8">
					<Gallery photos={project.images} onClick={openLightbox} />
				</div>

				<a href="/" className="ml-2 bg-gray-600 p-2 pl-4 pr-4 rounded-md hover:bg-gray-700">
					Back to main page
				</a>
			</Segment>
		</DefaultTemplate>
	);
}

export default Projects;
