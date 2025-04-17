import { createContext } from "react";
import main from "../config/gemini";
import { useState } from "react";


export const Context=createContext();
const ContextProvider=(props)=>{

    const [input,setInput]=useState('');
    const [recentPrompt,setRecentPrompt]=useState('');
    const [previousPrompt,setPreviousPrompt]=useState([]);
    const [showresult,setShowResult]=useState(false);
    const [loading,setLoading]=useState(false);
    const [result,setResult]=useState('');

    const onSent= async(prompt)=>{
        setResult('')
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        const response = await main(input)
        setResult(response)
        setLoading(false)
        setInput('')
    }

    const contextValue={
        previousPrompt,
        setPreviousPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showresult,
        loading,
        result,
        input,
        setInput,

    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;