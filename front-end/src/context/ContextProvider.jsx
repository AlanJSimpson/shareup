import React, { createContext, useState } from 'react';

export const ContextConsumer = createContext();
export default function ContextProvider(props) {
    const [userNameContext, setUserNameContext] = useState("");

    return (
        <ContextConsumer.Provider value={{ userNameContext, setUserNameContext }}>
            {props.children}
        </ContextConsumer.Provider>
    )
}
