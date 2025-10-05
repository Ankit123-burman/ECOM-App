import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'

function FilterSidebar() {
    const [searchParams,setSearchParams] = useSearchParams();
    const [filter, setFilter] = useState({
        category:"",
        gender:"",
        color:"",
        size:[],
        material: [],
        brand: [],
        minPrice: 0,
        maxPrice: 100,
    })
    const [priceRange,setPriceRRange] = useState([0,100]);

    const categories = ["Top Wear","Bottom Wear"];

    const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Purple",
    "Pink"
];

  const sizes = ["XS","S","M","L","XL","XXL"]
const materials = [
    "Cotton",
    "Silk",
    "Denim",
    "Leather",
    "Polyester",
    "Linen",
    "Wool"
];
const brands = [
    "Nike",
    "Adidas",
    "Puma",
    "Zara",
    "H&M",
    "Levi's",
    "Gucci"
];
 
const genders = ["Men","Women"];

useEffect(()=>{
    const params = object.fromEntries([...searchParams]);
    //

    setFilter({
        category:params.category || "",
        gender : params.gender || "",
        color: params.color || "",
        size: params.size ? params.size.split(","): [],
        material: params.size ? params.material.split(","): [],
        brand: params.size ? params.brand.split(","): [],
        minPrice: params.minPrice || 0,
        maxPrice: params.maxPrice || 100,

    })
    setPriceRRange([0,params.maxPrice || 100])
},[searchParams])

  return (
    <div className='p-4' >

    </div>
  )
}

export default FilterSidebar