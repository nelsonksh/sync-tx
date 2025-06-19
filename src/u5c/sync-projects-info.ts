import { PrismaClient, ScriptCategory } from "../../prisma/generated/client";

export async function SyncProjectsInfo(prisma: PrismaClient): Promise<void> {
    try {
        const relevantTypes: ScriptCategory[] = [
            "TreasuryScripts",
            "TreasuryToken",
            "Escrow1",
            "ContributorStateScripts",
        ];

        const instances = await prisma.instance.findMany({
            include: {
                instancePolicy: true,
            },
            where: {
                type: {
                    in: relevantTypes,
                },
            },
        });

        const groupedByPolicy = instances.reduce((acc, instance) => {
            const policyId = instance.instancePolicy.policyId;
            if (!acc[policyId]) acc[policyId] = [];
            acc[policyId].push(instance);
            return acc;
        }, {} as Record<string, typeof instances>);

        for (const [policyId, instanceGroup] of Object.entries(groupedByPolicy)) {
            const findInstance = (type: ScriptCategory) =>
                instanceGroup.find((i) => i.type === type);

            const data = {
                projectNftPolicy: policyId,
                TreasuryTokenPolicy: findInstance("TreasuryToken")?.hash,
                TreasuryAddress: findInstance("TreasuryScripts")?.address,
                ContributorStateAddress: findInstance("ContributorStateScripts")?.address,
                EscrowAddress: findInstance("Escrow1")?.address,
            };

            await prisma.projectDetails.upsert({
                where: { projectNftPolicy: policyId },
                create: data,
                update: data,
            });

            console.log(`✅ Upserted ProjectDetails for policyId: ${policyId}`);
        }
    } catch (error) {
        console.error("❌ Error syncing project details:", error);
        throw error; // Let the caller handle it
    }
}
