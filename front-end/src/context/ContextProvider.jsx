import React, { createContext, useEffect, useState } from 'react';
import { getRegisteredUser } from '../Api/profileUserApi';

export const ContextConsumer = createContext();
export default function ContextProvider(props) {
    const [userNameContext, setUserNameContext] = useState("");


    useEffect(() => {
        const asyncResult = async () => {
            const result = await getRegisteredUser();
            console.log('rerender and fetch', result.data.nome)
            console.log(userNameContext)
            setUserNameContext(result.data.nome);
        };
        asyncResult();

    }, [userNameContext]);

    return (
        <ContextConsumer.Provider value={{ userNameContext, setUserNameContext }}>
            {props.children}
        </ContextConsumer.Provider>
    )
}
