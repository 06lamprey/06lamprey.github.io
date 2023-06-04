import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { SocialIcon } from "./SocialIcon";

export const SocialIcons = () => (
	<div className="mt-4">
		<SocialIcon icon={faTwitter} text="akkihole" link="https://twitter.com/akkihole" />
		<SocialIcon icon={faDiscord} text="Aphrodities#7193" />
	</div>
);
