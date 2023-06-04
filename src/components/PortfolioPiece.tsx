import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const PortfolioPiece = ({
	title,
	link,
	role,
	children,
}: React.PropsWithChildren<{ title: string; link: string; role: string }>) => (
	<div className="bg-gray-900 rounded-md shadow-xl">
		<a href={link}>
			<div className="transition ease-in-out bg-gray-400 text-gray-900 p-4 rounded-t-md hover:bg-gray-900 hover:text-gray-50">
				<div className="flex justify-between w-full">
					<p className="text-2xl font-bold tracking-wide">{title}</p>

					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width={18} height={18}>
						<path
							fill="currentColor"
							d="M 12.125 1.9980469 A 1.0001 1.0001 0 0 0 11.199219 2.7441406 L 2.0332031 37.576172 A 1.0001 1.0001 0 0 0 2.7460938 38.798828 L 37.580078 47.966797 A 1.0001 1.0001 0 0 0 38.802734 47.253906 L 47.96875 12.419922 A 1.0001 1.0001 0 0 0 47.255859 11.197266 L 12.421875 2.03125 A 1.0001 1.0001 0 0 0 12.125 1.9980469 z M 21.5 19 L 31 21.5 L 28.5 31 L 19 28.5 L 21.5 19 z"
						/>
					</svg>
				</div>
				<p>{role}</p>
			</div>
			<div className="m-4">{children}</div>
		</a>
	</div>
);
