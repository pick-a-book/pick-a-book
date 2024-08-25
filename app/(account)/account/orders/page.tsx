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
import TableOrders from "@/components/tables/orders/Main";

import TemplateEmailContact from "@/templates/email/Contact";

import contact from "@/data/contact";

export const metadata: Metadata = { title: "Orders" };

export default async function Orders() {
	return (
		<LayoutPage>
			<LayoutSection>
				<Grid gutter={{ md: 48 }}>
					<GridCol span={12}>
						<Group>
							<Stack gap={0}>
								<Title order={2} fw={"bold"}>
									My Orders
								</Title>
								<Text fz={"lg"}>You have placed {"5"} orders.</Text>
							</Stack>
						</Group>
					</GridCol>

					<GridCol span={12}>
						<TableOrders />
					</GridCol>
				</Grid>
			</LayoutSection>
		</LayoutPage>
	);
}