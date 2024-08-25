import React from "react";

import { Metadata } from "next";

import LayoutBody from "@/layouts/Body";

import contact from "@/data/contact";

export interface typeParams {
	category: string;
}

export const metadata: Metadata = {
	title: { default: "Blog", template: `%s - Categories - Blog - ${contact.name.app}` },
};

export default function LayoutBlog({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return <LayoutBody>{children}</LayoutBody>;
}