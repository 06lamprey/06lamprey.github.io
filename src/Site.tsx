import { useState } from "react";
import Lightbox from "react-image-lightbox";
import { useScrollLock } from "./hooks/useScrollLock";
import { faDiscord, faTwitter, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";
import "react-image-lightbox/style.css";
import useScrollPosition from "./hooks/useScrollPosition";

function SocialIcon({ icon, text, link }: { icon: IconDefinition; text: string; link?: string }) {
	return (
		<div>
			<FontAwesomeIcon icon={icon} className={"mr-2 aspect-square"} />
			<a className="select-text" href={link}>
				{text}
			</a>
		</div>
	);
}

function Site() {
	let images = [
		"/portfolio/highpoly1.png",
		"/portfolio/1.png",
		"/portfolio/2.png",
		"/portfolio/3.png",
		"/portfolio/4.png",
		"/portfolio/just_the_two_of_us.png",
		"/portfolio/without_wireframe.png",
	];

	const [selectedImage, selectImage] = useState<number>(0);
	const [imageShown, setImageShown] = useState<boolean | undefined>(false);
	const [lockScroll, unlockScroll] = useScrollLock();
	const position = useScrollPosition();

	return (
		<div className="bg-slate-800">
			{imageShown && (
				<Lightbox
					imagePadding={20}
					mainSrc={images[selectedImage]}
					nextSrc={images[(selectedImage + 1) % images.length]}
					prevSrc={images[(selectedImage + images.length - 1) % images.length]}
					onImageLoad={() => {
						// this version of lightbox doesn't load images in dev mode correctly
						window.dispatchEvent(new Event("resize"));
					}}
					onCloseRequest={() => {
						setImageShown(false);
						unlockScroll();
					}}
					onMovePrevRequest={() => selectImage((selectedImage + images.length - 1) % images.length)}
					onMoveNextRequest={() => selectImage((selectedImage + 1) % images.length)}
				/>
			)}
			<div className="bg-gradient-to-b from-transparent to-slate-800 font-sans leading-6 font-poppins text-left text-lg bg-image underline-offset-4 bg-slate-900 text-white">
				<div className="w-screen select-none h-screen flex flex-col lg:flex-row justify-center items-center">
					<img className="rounded-full lg:mr-20" height={256} width={256} src="fuck.webp" />
					<div className="flex gap-4 p-4 items-center">
						<div className="text-center lg:text-left">
							<h1 className="font-semibold mb-4 text-6xl sm:text-8xl">Lamprey!</h1>
							<p className="text-slate-600">he/it, VERY straight, 160cm asian</p>
							<br />
							<div className="text-slate-400 text-left md:mt-0 mt-10 p-2">
								<p>Hi :33333 uwu am a siwwy wittwe modeller :333</p>
								<p>i do like textures in substance painter and stuff.</p>
								<p className="text-slate-700">
									i can also like meow exactly like a cat... you wouldn't be able to tell :3
								</p>

								<div className="mt-10 text-left text-slate-400 text-1xl flex flex-col w-full">
									<SocialIcon icon={faTwitter} text="akkihole" link="https://twitter.com/akkihole" />
									<SocialIcon icon={faDiscord} text="Aphrodities#7193" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<p
					className="absolute bottom-10 text-center w-screen text-slate-600 italic ease-in-out duration-100"
					style={{
						opacity: position === 0 ? "100%" : "0%",
					}}
				>
					Scroll down siwwy!
				</p>
			</div>
			<div className="bg-slate-800 p-8 pb-40 w-screen text-slate-200 max-w-screen-lg m-auto">
				<h1 className="text-6xl mb-8">my models :3</h1>
				<div className="w-full gap-2 grid md:grid-cols-2 lg:grid-cols-3">
					{images.map((value, index) => (
						<div
							className="aspect-square"
							onClick={() => {
								lockScroll();
								setImageShown(true);
								selectImage(index);
							}}
							style={{
								width: "100%",
								height: "100%",
								backgroundPosition: "center",
								backgroundSize: "cover",
								cursor: "pointer",
								backgroundImage: `url(${value})`,
							}}
						>
							<div
								className={
									"ease-in-out duration-300 hover:opacity-50 opacity-0 bg-gradient-to-b from-transparent to-zinc-900 h-full"
								}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Site;
