import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialIcon = ({ icon, text, link }: { icon: IconDefinition; text: string; link?: string }) => {
	return (
		<div>
			<FontAwesomeIcon icon={icon} className={"mr-2 aspect-square"} />
			<a className="select-text" href={link}>
				{text}
			</a>
		</div>
	);
};
