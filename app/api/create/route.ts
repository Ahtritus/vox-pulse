import { PrismaClient } from "@prisma/client";
import { generate } from "random-words";

const prisma = new PrismaClient();

export async function POST(
    req: Request,
) {
    console.log("Inside post");
    const body  = await req.json();
    const orgName = body.orgName;

    let orgId = `${orgName}-${generate(2).join("-")}`;

    // Fetch all organisations from the database
    const allOrgs = await prisma.organisation.findMany();

    // Check if the generated orgId already exists
    while (allOrgs.some((org) => org.orgId === orgId)) {
        // If it does, generate a new orgId
        orgId = `${orgName}-${generate(2).join("-")}`;
    }

    try {
        const newOrg = await prisma.organisation.create({
            data: {
                orgName,
                orgId,
            },
        });

        return new Response(JSON.stringify(newOrg));
    } catch (error) {
        return new Response(JSON.stringify({ error: "Unable to create organization: "+ error }));
    }

}