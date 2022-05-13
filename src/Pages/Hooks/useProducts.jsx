import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("products_db.json")
        .then(res => res.json())
        .then(data => {
            // console.log('data', data)
            setProducts(data)
        })
    }, [])

    return [products, setProducts];
};

export default useProducts;