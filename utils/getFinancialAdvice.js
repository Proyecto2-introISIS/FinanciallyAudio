import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
})


const getFinancialAdvice = async (totalBudget, totalSpend) => {
    console.log(totalBudget, totalSpend);
    try {
        const userPrompt = `
        Based on the following financial data: 
        - Total budget: ${totalBudget} COP
        - Expenses: ${totalSpend} COP
        provide detailed financial advice in 2 sentences to help the user manage their finances
        `;

        const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo', // or 'gpt-4' depending on your access level
            messages: [{ role: 'user', content: userPrompt }],
        });

        const advice = chatCompletion.choices[0].message.content;
        console.log(advice);
        return advice;
    } catch (error) {
        console.error("Error fetching financial advice:", error.response ? error.response.data : error.message);
        return "Lo siento, no puedo analizar la información financiera en este momento. Por favor intenta de nuevo más tarde.";
    }
};

export default getFinancialAdvice