import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

function FilterSidebar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  })
  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ["Top Wear", "Bottom Wear"];

  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Purple",
    "Pink"
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
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

  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    //

    setFilter({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,

    })
    setPriceRange([0, params.maxPrice || 100])
  }, [searchParams])


  const handelFilterchange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filter }
    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];

      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value)
      }
    } else {
      newFilters[name] = value
    }
    setFilter(newFilters)
    updateUrl(newFilters)
    console.log(newFilters);

  }

  const updateUrl = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","))
      } else if (newFilters[key]) {
        params.append(key, newFilters[key])
      }
    })
    setSearchParams(params)
    navigate(`?${params.toString()}`)
  }

  return (
    <div className='p-4' >
      <h3 className='text-xl font-medium text-gray-800 mb-4' >Filter</h3>

      {/*category filter*/}
      <div className='mb-6' >
        <label className='block text-gray-600 font-medium mb-2'>
          Category
        </label>
        {categories.map((categorie) => {
          return (
            <div className='flex items-center mb-1' key={categorie} >
              <input type="radio" name='category'
                checked={filter.category === categorie}
                value={categorie} onChange={handelFilterchange}
                className='mr2 h-4 w-4 text-blue-500 focus:ring-blue border-gray-300' />
              <span className='text-gray-700  ' >{categorie}</span>
            </div>
          );
        })}
      </div>

      {/* Gender filter*/}
      <div className='mb-6' >
        <label className='block text-gray-600 font-medium mb-2'>
          Gender
        </label>
        {genders.map((Gender) => {
          return (
            <div className='flex items-center mb-1' key={Gender} >
              <input type="radio" name='gender' value={Gender} onChange={handelFilterchange}
                className='mr2 h-4 w-4 text-blue-500 focus:ring-blue border-gray-300' />
              <span className='text-gray-700  ' >{Gender}</span>
            </div>
          )
        })}
      </div>

      {/* Color filter*/}
      <div className='mb-6' >
        <label className='block text-gray-600 font-medium mb-2'>
          Color
        </label>
        <div className='flex flex-wrap gap-2'>
          {colors.map((color) => {
            return (
              <button
                className='w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105'
                key={color}
                value={color} onClick={handelFilterchange}
                name='color'
                style={{ backgroundColor: color.toLowerCase() }}
              >
              </button>
            )
          })}
        </div>
      </div>

      {/*Size*/}
      <div className='mb-6' >
        <label className='block text-gray-600 font-medium mb-2' >Size</label>
        {sizes.map((size) => (
          <div key={size} className='flex items-center mb-1'>
            <input type="checkbox"
              name='size'
              value={size} onChange={handelFilterchange}
              className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'
            />
            <span className='text-gray-700' >{size}</span>
          </div>
        ))}
      </div>
      {/*materials*/}
      {/*materials*/}
      <div className='mb-6' >
        <label className='block text-gray-600 font-medium mb-2' >Material</label> {/* Corrected capitalization here for consistency */}
        {materials.map((material) => (
          <div key={material} className='flex items-center mb-1'>
            {/* Ensure the input styling matches others */}
            <input
              type="checkbox"
              name="material"
              value={material}
              onChange={handelFilterchange}
              className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'
            />
            <span className='text-gray-700' >{material}</span>
          </div>
        ))}
      </div>
      {/*brand*/}
      <div className='mb-6' >
        <label className='block text-gray-600 font-medium mb-2' >Brand</label>
        {brands.map((brand) => (
          <div key={brand} className='flex items-center mb-1'>
            <input type="checkbox"
              name='brand'
              value={brand} onChange={handelFilterchange}
              className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'
            />
            <span className='text-gray-700' >{brand}</span>
          </div>
        ))}
      </div>
      {/*price range*/}
      <div className='mb-8' >
        <label className='block text-gray-600 font-medium mb-2'>
          Price Range
        </label>
        <input type="range"
          name="priceRange"
          min={0}
          max={100}
          className='w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer'
        />
        <div className='flex justify-between text-gray-600 mt-2' >
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar