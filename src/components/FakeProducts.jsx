import { useState, useEffect } from 'react'

function FakeProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    let productElements = products.map(product => {
        return (
            <img src={`${product.image}`} alt="" key={product.id}/>

        )
    })

    return (
        <>
        <div className="flex">
            {products && productElements}
        </div>
        </>
    )
}

export default FakeProducts