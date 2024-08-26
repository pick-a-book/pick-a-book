"use client";

import { ActionIcon, Group, NumberInput, NumberInputHandlers } from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import ContextProducts from "@/contexts/Products";
import { typeCart } from "@/types/cart";

import ProviderProductCart from "@/providers/products/Cart";

export default function Product({ data }: { data: typeCart }) {
	const handlersRef = useRef<NumberInputHandlers>();

	const [value, setValue] = useState<string | number>(data.quantity);

	return (
		<Group justify="center" gap={0}>
			<ProviderProductCart
				operation={{ type: "decrease", items: [{ product: data.product, variant: data.variant }] }}
			>
				<ActionIcon
					variant="outline"
					color="var(--mantine-color-default-border)"
					c="var(--mantine-color-text)"
					disabled={value == 1}
					onClick={() => handlersRef.current?.decrement()}
					style={{
						borderTopRightRadius: 0,
						borderBottomRightRadius: 0,
						height: 32,
						position: "relative",
						right: -1,
					}}
				>
					<IconMinus size={12} stroke={2} />
				</ActionIcon>
			</ProviderProductCart>

			<NumberInput
				size="xs"
				min={1}
				max={99}
				defaultValue={value}
				clampBehavior="strict"
				aria-label="quantity"
				allowNegative={false}
				allowDecimal={false}
				onChange={setValue}
				handlersRef={handlersRef}
				hideControls
				styles={{
					input: { borderRadius: 0, height: 32, width: 40, textAlign: "center" },
				}}
			/>

			<ProviderProductCart
				operation={{ type: "increase", items: [{ product: data.product, variant: data.variant }] }}
			>
				<ActionIcon
					variant="outline"
					color="var(--mantine-color-default-border)"
					c="var(--mantine-color-text)"
					disabled={value == 99}
					onClick={() => handlersRef.current?.increment()}
					style={{
						borderTopLeftRadius: 0,
						borderBottomLeftRadius: 0,
						height: 32,
						position: "relative",
						left: -1,
					}}
				>
					<IconPlus size={12} stroke={2} />
				</ActionIcon>
			</ProviderProductCart>
		</Group>
	);
}
