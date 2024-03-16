
import React from "react";

const Chatgpt = ({query}) => {
    let [promptRes, setPromptRes] = React.useState ("output will appear here !");
    let [inputWin, setInputWin] = React.useState (query);
    React.useEffect (()=>{
        setPromptRes (promptRes);
    }, [promptRes])

    const queryGPT = async () => {
        const url = 'https://open-ai21.p.rapidapi.com/conversationgpt35';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'dc6038e1bamsh32f49ffb1710922p183393jsn5a32389cda92',
                'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: 'user',
                        content: JSON.stringify (query)
                    }
                ],
                web_access: false,
                system_prompt: '',
                temperature: 0.9,
                top_k: 5,
                top_p: 0.9,
                max_tokens: 256
            })
        };
    
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setPromptRes (result.result)
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="gpt-win glass">
            <div className="win1">
                <textarea 
                    className="prompt-win"
                    placeholder="write your prompt"
                    value={inputWin}
                    onChange={(e)=>setInputWin (e.target.value)}
                ></textarea>
            </div>
            <div>
                <button 
                    className="gen-btn"
                    onClick={ ()=>queryGPT()}

                >Generate</button>
            </div>
            <div className="win1">
                <textarea 
                    className="prompt-res-win"
                    placeholder="Output will appear here"
                    value={promptRes}   
                
                ></textarea>
            </div>
        </div>
    )
}

export default Chatgpt