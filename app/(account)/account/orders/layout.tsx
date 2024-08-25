import React from "react";

import LayoutBody from "@/layouts/Body";
import { Metadata } from "next";
import link from "@/handlers/parsers/string/link";
import orders from "@/data/orders";
import contact from "@/data/contact";

export interface typeParams {
	order: number;
}

export const metadata: Metadata = {
	title: { default: "Orders", template: `%s - Orders - Account - ${contact.name.app}` },
};

export default function LayoutOrders({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return <LayoutBody>{children}</LayoutBody>;
}