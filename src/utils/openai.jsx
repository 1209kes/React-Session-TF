// utils/openai.js
export const getChatResponse = async (userMessage) => {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: userMessage }],
            }),
        });

        const data = await response.json();
        return data.choices[0]?.message?.content || '응답이 없습니다.';
    } catch (error) {
        console.error('API 호출 실패:', error);
        return '오류가 발생했습니다.';
    }
};
