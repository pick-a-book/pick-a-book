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

import {
	IconArrowRight,
	IconChevronLeft,
	IconClockHour4,
	IconCreditCardPay,
	IconMail,
	IconMapPin,
	IconPackageExport,
	IconPhone,
	IconRefresh,
	IconTrash,
} from "@tabler/icons-react";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";
import FormContact from "@/partials/forms/Contact";
import AccordionFaq from "@/components/accordions/Faq";
import TableCart from "@/components/tables/Cart";
import CardShopCheckout from "@/components/card/shop/Checkout";
import AccordionCheckout from "@/components/accordions/Checkout";

import TemplateEmailContact from "@/templates/email/Contact";

import contact from "@/data/contact";
import Link from "next/link";

export const metadata: Metadata = { title: "Checkout" };

export default async function Checkout() {
	return (
		<LayoutPage>
			<LayoutSection padded containerized={"responsive"}>
				<Grid gutter={{ md: 48 }}>
					<GridCol span={12}>
						<Group>
							<Stack gap={0}>
								<Title order={2} fw={"bold"}>
									Checkout
								</Title>
								<Text inherit>
									Already have an account?{" "}
									<Anchor inherit component={Link} href={"#"}>
										Sign in
									</Anchor>
									.
								</Text>
							</Stack>
						</Group>
					</GridCol>

					<GridCol span={{ md: 7, lg: 8 }}>
						<AccordionCheckout />
					</GridCol>

					<GridCol span={{ md: 5, lg: 4 }}>{<CardShopCheckout />}</GridCol>
				</Grid>
			</LayoutSection>
		</LayoutPage>
	);
}