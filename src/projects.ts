import { ReactNode } from "react";
import { ImageTag } from "react-grid-gallery";

interface Image {
	src: string;
	width: number;
	height: number;
	nano?: string;
	alt?: string;
	tags?: ImageTag[];
	isSelected?: boolean;
	caption?: ReactNode;
	customOverlay?: ReactNode;
	thumbnailCaption?: ReactNode;
	orientation?: number;
}

type project = {
	title: string;
	url: string;
	images: Image[];
};

export const PROJECTS: project[] = [
	{
		title: "Body armor and equipment",
		url: "body_armor",
		images: [
			{ src: "/img/1/c89f5e28_original.jpg", width: 1440, height: 1145 },
			{ src: "/img/1/2f00d5e0_original.jpg", width: 1440, height: 1091 },
			{ src: "/img/1/329c8501_original.jpg", width: 1440, height: 810 },
			{ src: "/img/1/342ed208_original.jpg", width: 716, height: 728 },
			{ src: "/img/1/4beccb00_original.jpg", width: 874, height: 724 },
			{ src: "/img/1/5a40b748_original.jpg", width: 1242, height: 504 },
			{ src: "/img/1/6689fd7a_original.jpg", width: 1315, height: 1440 },
			{ src: "/img/1/7b103d22_original.jpg", width: 820, height: 748 },
			{ src: "/img/1/804e6e70_original.jpg", width: 1440, height: 810 },
			{ src: "/img/1/84bcb597_original.jpg", width: 1328, height: 512 },
			{ src: "/img/1/b3c47c49_original.jpg", width: 1440, height: 1114 },
			{ src: "/img/1/d6d5d86f_original.jpg", width: 1286, height: 657 },
		],
	},
	{
		title: "Hardsurface models",
		url: "hardsurface",
		images: [
			{ src: "/img/2/4b4638d0_original.jpg", width: 1440, height: 810 },
			{ src: "/img/2/001fdafb_original.jpg", width: 524, height: 734 },
			{ src: "/img/2/0401dfe1_original.jpg", width: 1440, height: 810 },
			{ src: "/img/2/04a26785_original.jpg", width: 1440, height: 810 },
			{ src: "/img/2/1718f109_original.jpg", width: 1440, height: 810 },
			{ src: "/img/2/20dcc8ea_original.jpg", width: 963, height: 1440 },
			{ src: "/img/2/27d1b82c_original.jpg", width: 592, height: 736 },
			{ src: "/img/2/34447a43_original.jpg", width: 912, height: 630 },
			{ src: "/img/2/3eb6636b_original.jpg", width: 451, height: 743 },
			{ src: "/img/2/3edec408_original.jpg", width: 840, height: 620 },
			{ src: "/img/2/43c28882_original.jpg", width: 856, height: 714 },
			{ src: "/img/2/4a0d53ce_original.jpg", width: 830, height: 1200 },
			{ src: "/img/2/524c7a7d_original.jpg", width: 1440, height: 810 },
			{ src: "/img/2/52c9dc8c_original.jpg", width: 856, height: 730 },
			{ src: "/img/2/537ff9d3_original.jpg", width: 1130, height: 1440 },
			{ src: "/img/2/56925cc4_original.jpg", width: 1440, height: 810 },
			{ src: "/img/2/650770de_original.jpg", width: 522, height: 744 },
			{ src: "/img/2/6e2cdfcd_original.jpg", width: 814, height: 734 },
			{ src: "/img/2/751bf2d3_original.jpg", width: 856, height: 730 },
			{ src: "/img/2/76f12b84_original.jpg", width: 910, height: 720 },
			{ src: "/img/2/85e78253_original.jpg", width: 1025, height: 730 },
			{ src: "/img/2/8bb415e9_original.jpg", width: 830, height: 1200 },
			{ src: "/img/2/993cabf4_original.jpg", width: 1208, height: 1440 },
			{ src: "/img/2/a166b94b_original.jpg", width: 963, height: 1440 },
			{ src: "/img/2/a3ac43d8_original.jpg", width: 1098, height: 1440 },
			{ src: "/img/2/a65d0232_original.jpg", width: 1138, height: 726 },
			{ src: "/img/2/b516fccf_original.jpg", width: 532, height: 744 },
			{ src: "/img/2/b8693e6e_original.jpg", width: 820, height: 735 },
			{ src: "/img/2/c8e06aeb_original.jpg", width: 952, height: 736 },
			{ src: "/img/2/df4b75e1_original.jpg", width: 452, height: 740 },
			{ src: "/img/2/f42c6a19_original.jpg", width: 424, height: 732 },
			{ src: "/img/2/f571c94f_original.jpg", width: 1440, height: 810 },
			{ src: "/img/2/f5cc57ea_original.jpg", width: 808, height: 754 },
		],
	},
	{
		title: "Retextures",
		url: "retextures",
		images: [
			{ src: "/img/3/ed9326d4_original.jpg", width: 1136, height: 684 },
			{ src: "/img/3/031bfadf_original.jpg", width: 914, height: 734 },
			{ src: "/img/3/08a9a85e_original.jpg", width: 1126, height: 684 },
			{ src: "/img/3/0af10ce6_original.jpg", width: 1440, height: 810 },
			{ src: "/img/3/2cf6b4f5_original.jpg", width: 1440, height: 810 },
			{ src: "/img/3/5d037bee_original.jpg", width: 914, height: 734 },
			{ src: "/img/3/5e3dd067_original.jpg", width: 1364, height: 744 },
			{ src: "/img/3/97f4c3bf_original.jpg", width: 1360, height: 736 },
			{ src: "/img/3/bb8a045d_original.jpg", width: 1056, height: 743 },
			{ src: "/img/3/c4b5c866_original.jpg", width: 1440, height: 810 },
			{ src: "/img/3/df33dc67_original.jpg", width: 1366, height: 746 },
		],
	},
];
