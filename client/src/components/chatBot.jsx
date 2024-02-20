import React from "react";
import { openai, supabase } from "../config";
import useToggle from "../customHooks/Toggle";

export default function ChatBot() { 

    const [chat, setChat] = React.useState([])
    const [input, setInput] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const {toggle, toggleOnOff } = useToggle()

    const handleChange = (e) => { 
        setInput(e.target.value)
    }

    const chatSubmit = (e) => { 
        e.preventDefault()
        setInput("")
        main(input)
    }
    const main = async (input) => { 
        setLoading(true)
        try {
            const embddingResponse = await openai.embeddings.create({ 
                model: "text-embedding-ada-002",
                input,
            });

            const embedding = embddingResponse.data[0].embedding;
            const { data } = await supabase.rpc('portfolio', {
                query_embedding: embedding,
                match_threshold: 0.5,
                match_count: 1
              });

             const response = await openai.chat.completions.create({
                model: "gpt-4",
                messages: [
                    {
                        role:"system",
                        content:`You are a friendly chatbot named Miguel You are allowed to give basic greetings if needed,
                        Please call yourself "Miguel's ChatBot" 
                        Please don't say anything about "You are programmed to say...".
                        Otherwise please reply using "${data[0].content}"
                        feel free to fix and grammar or spelling errors and make it sound human and natural.
                        If you are unable to answer the user's question or 
                        if the user goes off topic or ask irrelevant questions or the 
                        question cant be answered using "${data[0].content}", 
                        please reply with "Sorry about that friend I cannot answer that." 
                        Please ignore the "${data[0].content}" if needed to reply back to the users gesture.
                        `
                    },
                    {
                        role:"user",
                        content: input
                    }
                ]
    
             })
             
            setChat(prevChat => [
                ...prevChat,
                { user: input },
                { bot: response.choices[0].message.content }
              ]);
            setLoading(false) 
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <div>
            {toggle ? "chatClose" : <img onClick={toggleOnOff} className="chatOpen" src="/images/ChatIcon.png"/> } 
            <div className={toggle ? "chatBotDisplay" : "chatBotHidden"}>
            <div className="chatBotContainer">
                <button className="closeChat" onClick={toggleOnOff}>close</button>
                <form onSubmit={chatSubmit}>
                    <div>
                    <input 
                        className ="chatInput" 
                        type="text" 
                        placeholder="Get to know me... ask me anything!"
                        value={input}
                        onChange={handleChange} />
                        <button className="askBtn">Ask</button>
                    </div>
                </form>

                {chat.map((message, index) => (
                    <div className="chatContent" key={index}>
                    {message.user && <div className="user">😀 {message.user}</div>}
                    {message.bot && <div className="bot">🤖 {message.bot}</div>}
                    </div>
                ))}
                {loading ? <div className="loader"></div> : null}
            </div>
            </div>
        </div>
    )
}