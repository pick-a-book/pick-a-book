import React from "react";

import { Metadata } from "next";

import {
	Anchor,
	Button,
	ButtonGroup,
	Card,
	Flex,
	Grid,
	GridCol,
	Group,
	Stack,
	Text,
	ThemeIcon,
	Title,
} from "@mantine/core";

import { IconMail, IconPhone, IconTrash } from "@tabler/icons-react";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";
import FormContact from "@/partials/forms/Contact";
import AccordionFaq from "@/components/accordions/Faq";
import TableWishlist from "@/components/tables/Wishlist";

import ProviderProductWishlist from "@/providers/products/Wishlist";

import TemplateEmailContact from "@/templates/email/Contact";

import contact from "@/data/contact";

export const metadata: Metadata = { title: "Wishlist" };

export default async function Wishlist() {
	return (
		<LayoutPage>
			<LayoutSection>
				<Grid gutter={{ md: 48 }}>
					<GridCol span={12}>
						<Group align="start" justify="space-between">
							<Stack gap={0}>
								<Title order={2} fw={"bold"}>
									My Wishlist
								</Title>
								<Text inherit>There are {"5"} products in your wishlist.</Text>
							</Stack>

							<ProviderProductWishlist operation={{ type: "clear", unmount: true }}>
								<Button leftSection={<IconTrash size={16} stroke={2} />}>Clear Whishlist</Button>
							</ProviderProductWishlist>
						</Group>
					</GridCol>

					<GridCol span={12}>
						<TableWishlist />
					</GridCol>
				</Grid>
			</LayoutSection>
		</LayoutPage>
	);
}