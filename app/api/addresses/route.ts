import addresses from "@/data/addresses";
import addAddresses from "@/handlers/database/create/addresses";
import prisma from "@/services/prisma";

export async function GET(req: Request) {
	try {
		// const data = await req.json();

		const addresses = await prisma.address.findMany();

		return Response.json(addresses);
	} catch (error) {
		console.error("x-> Error getting addresses:", error);
		return Response.error();
	}
}

export async function POST(req: Request) {
	try {
		// const data = await req.json();

		const response = await addAddresses(addresses);

		return Response.json(response);
	} catch (error) {
		console.error("x-> Error adding addresses:", error);
		return Response.error();
	}
}