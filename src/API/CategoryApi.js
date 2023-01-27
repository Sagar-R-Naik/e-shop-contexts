import axios from 'axios'
import React,{useState, useCallback, useEffect} from 'react'

const url = `http://dummyjson.com`

// Custom hook

function CategoryApi() {

    const [Category,setCategory] = useState([])

    const readCategories = async () => {
        const out = await axios.get(`${url}/products/categories`);
        setCategory(out.data)
    }

    const intiValue = useCallback(() => {
        readCategories()
    },[])

    useEffect(() =>{
        intiValue()
    },[])

  return {
    category: [Category, setCategory]
  }
}

export default CategoryApi
