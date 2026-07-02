const OpenAI = require("openai");
const Chat = require("../models/Chat");
const askQuestion = async (req, res) => {
    try {
        const client = new OpenAI({ apiKey: process.env.OPENAI_KEY,
             baseURL: "https://openrouter.ai/api/v1" })

             const {question}=req.body;
             if(!question)
             {
                return res.status(401).json({
                    message:false,
                    message:"Please Write Question"
                });
                const answer=response.choices[0].message.content;
                const chat=await Chat.create({question,answer});
                
                res.status(201).json({
                    success:true,
                    message:"Amswer Generated Successfully",
                    data:chat
                });
             }
        const response=await client.chat.completions.create({
            model:"openai/gpt-40-mini",
            message:[
                {
                    role:"system",
                    content:"You are helpful teacher .Explain in simple Hinglish with exaple"
                },
                {
                    role:"user",
                    content:question
                }
            ]
        })

    }
    catch (err) {
        console.log("Unable to solve doubt", err);
        res.status(500).json({
            success: false,
            message: "Failed to generate answer",
            error: err.message
        });
    }
};

const getAllChats=()=>{
    try{

    }
    catch(err)
    {
        console.log("Unable to Fetch chats",err);
        res.status(500).json({
            success:false,
            message:"Unable to fetch chat history"
        })
    }
}