import { openai, supabase } from "./config";
import aboutMe from "./aboutMe";

async function main(data) {
    console.log(data)
    try {
        const embeddingResponses = await Promise.all(
            data.map(async (item) => {
                // Generate embedding for the content
                const embeddingResponse = await openai.embeddings.create({
                    model: "text-embedding-ada-002",
                    input: item.content,
                });
                return {
                    ...item,
                    embedding: embeddingResponse.data[0].embedding,
                };
            })
        );

        // Upsert the data into Supabase
        const { data: upsertedData, error } = await supabase
            .from("portfolio")
            .upsert(embeddingResponses, { onConflict: ['content'] });

        if (error) {
            console.error("Error upserting data:", error);
        } else {
            console.log("Upsert successful. Data:", upsertedData);
        }

        console.log("Upsert complete!");
    } catch (error) {
        console.error("Error in main function:", error);
    }
}

main(aboutMe);
export default main;