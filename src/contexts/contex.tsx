import {  createContext, useState } from "react";
import getdata from "../services/poetry";
import { Poem } from "../types/poems";

import { useDispatch } from "react-redux";
const Context = createContext([]);

const PoemsContext = ({Children: Children}: any) => {

    const [poems, setPoems] = useState<Poem[]>([]);

    const addPoems = async (poem: Poem) => {
        const dataFetched = await getdata();
        setPoems([...poems, ...dataFetched]);
    
        const dispatch = useDispatch();
        dispatch({ type: "ADD_POEMS", payload: dataFetched });
        console.log(poems);
        
    };

   

    return (
        <Context.Provider value={{ poems, addPoems }}>
            {Children}
        </Context.Provider>
    );
   
}

export default PoemsContext;

