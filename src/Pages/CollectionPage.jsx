import React, { useEffect, useRef, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import SortOptions from '../Products/SortOptions'
import FilterSidebar from '../Products/FilterSidebar';
import ProductGrid from '../Products/ProductGrid';

function CollectionPage() {
    const [products, setProduct] = useState([]);
    const sidebarRef  = useRef(null);
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);

    const toggleSidebar = () =>{
        setIsSidebarOpen(!isSidebarOpen);
    }

    const handleClickOutSide = (e) =>{
        if(sidebarRef.current && !sidebarRef.current.contains(e.target))
            setIsSidebarOpen(false);
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutSide);
        return () => {
            document.removeEventListener("mousedown", handleClickOutSide);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const fetchedProducts = [
                { id: 1, name: "Floral Summer Dress", price: 1299, image: [{ url: "https://picsum.photos/400/600?random=11" }] },
                { id: 2, name: "Elegant Evening Gown", price: 3499, image: [{ url: "https://picsum.photos/400/600?random=12" }] },
                { id: 3, name: "Casual Denim Dress", price: 1899, image: [{ url: "https://picsum.photos/400/600?random=13" }] },
                { id: 4, name: "Classic Black Dress", price: 2499, image: [{ url: "https://picsum.photos/400/600?random=14" }] },
                { id: 5, name: "Floral Summer Dress", price: 1299, image: [{ url: "https://picsum.photos/400/600?random=11" }] },
                { id: 6, name: "Elegant Evening Gown", price: 3499, image: [{ url: "https://picsum.photos/400/600?random=12" }] },
                { id: 7, name: "Casual Denim Dress", price: 1899, image: [{ url: "https://picsum.photos/400/600?random=13" }] },
                { id: 8, name: "Classic Black Dress", price: 2499, image: [{ url: "https://picsum.photos/400/600?random=14" }] },
            ]; 
            setProduct(fetchedProducts);
        }, 1000);
    }, []);

    return (
        <div className='flex flex-col lg:flex-row'>
            {/*mobile filter */}
            <button onClick={toggleSidebar} className='lg:hidden border p-2 flex justify-center items-center'>
                <FaFilter className='mr-2' />
            </button>

            {/*filter sidebar*/}
            <div ref={sidebarRef} className={`${isSidebarOpen ? "translate-x-0" : "-translate-full"} fixed inset-y-0 z-50 w-64 bg-white
            left-0 overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
                <FilterSidebar/>
            </div>
            <div className='felx-grow p-4 ' >
                <h2 className='text-2xl uppercase mb-4 '>All Collection</h2>

                
                {/*sort option*/}
                <SortOptions/>
                {/*Product grid*/}
                <ProductGrid products={products}  />
            </div>
        </div>
    );
}

export default CollectionPage;
