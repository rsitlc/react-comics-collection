import React, { useState, useEffect, createContext } from "react";

export const BonelliContext = createContext();

export const BonelliProvider = ({ children }) => {
    const [personaggi, setPersonaggi] = useState([]);

    useEffect(() => {
        const url = "https://api.npoint.io/ca7a3c0362cf392fc490/bonelli";
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => setPersonaggi(res));
    }, []);
    return (
        <BonelliContext.Provider value={personaggi}>
            {children}
        </BonelliContext.Provider>
    );
};
