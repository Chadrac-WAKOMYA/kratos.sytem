import connectionDB from "./connectionDB";
export async function getAnneeScolaires() {
    try {
        const anneeScolaires = await connectionDB.AnneeScolaire.findMany();
        if (!anneeScolaires) {
            // throw new Error("Annees Scolaires non trouvées");
        }
        
        return anneeScolaires
    } catch (error) {
        console.error("Error fetching AnneeScolaire", error);
    }
}