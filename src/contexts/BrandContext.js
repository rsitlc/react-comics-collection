import React, { useState, useEffect, createContext } from "react";

export const BrandContext = createContext();

export const BrandProvider = ({ children }) => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const url = "https://api.npoint.io/ca7a3c0362cf392fc490/brands";
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => setBrands(res));
    }, []);
    return (
        <BrandContext.Provider value={brands}>{children}</BrandContext.Provider>
    );
};
