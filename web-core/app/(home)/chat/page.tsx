'use client'

import { ChatContainer} from "@/components/ui/chat";
import { MessageInput } from "@/components/ui/message-input";
import { ChangeEvent, useState } from "react";

const ChatPage = () => {
    const [userInput, setUserInput] = useState("");
    const [isGenerating] = useState(false);

    const handleUserInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setUserInput(e.target.value)
    }

    return (
        <div className="max-w-xl h-full py-10 flex justify-center items-center ml-auto mr-auto">
            <ChatContainer>
                <MessageInput value={userInput} onChange={handleUserInputChange} isGenerating={isGenerating} stop={() => {}} enableInterrupt={false}/>
            </ChatContainer>
        </div> 
    )
}

export default ChatPage;
