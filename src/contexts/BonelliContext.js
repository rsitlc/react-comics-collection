import React, { useState, useEffect, createContext } from "react";

export const BonelliContext = createContext();

export const BonelliProvider = ({ children }) => {
    const [personaggio, setPersonaggio] = useState([]);

    useEffect(() => {
        const url = "https://api.npoint.io/ca7a3c0362cf392fc490/bonelli";
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => setPersonaggio(res));
    }, []);
    return (
        <BonelliContext.Provider value={personaggio}>
            {children}
        </BonelliContext.Provider>
    );
};
