// 새로운 채팅 생성
export const createNewChat = (chatList, title) => {
    const newChatId = chatList.length + 1;
    return {
        chatId: newChatId,
        title,
        messages: [
            { sender: 'user', text: title },
            { sender: 'bot', text: 'This is a bot response!' },
        ],
    };
};

// 기존 채팅에 사용자 메시지 추가
export const addUserMessageToChat = (chatList, chatId, message) => {
    return chatList.map((chat) =>
        chat.chatId === chatId ? { ...chat, messages: [...chat.messages, { sender: 'user', text: message }] } : chat
    );
};

// 기존 채팅에 봇 메시지 추가
export const addBotMessageToChat = (chatList, chatId, message) => {
    return chatList.map((chat) =>
        chat.chatId === chatId ? { ...chat, messages: [...chat.messages, { sender: 'bot', text: message }] } : chat
    );
};
