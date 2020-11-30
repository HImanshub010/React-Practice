import { useState, useEffect } from 'react'
// when we want to use React hooks in regular function we need to make such function
//as custom hooks by using 'use' before function name.
//otherwise react hooks can only be used components

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const products = await response.json()
    setProducts(products)
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [url])
  return { loading, products }
}
