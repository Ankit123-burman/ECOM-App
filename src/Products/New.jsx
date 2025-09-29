import React, { useEffect, useRef, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function New() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newProducts = [
    {
      id: "1",
      name: "Stylish Jacket",
      price: 120,
      image: [{ url: "https://picsum.photos/200/300?random=1", alttext: "jacket" }],
    },
    {
      id: "2",
      name: "Casual Sneakers",
      price: 80,
      image: [{ url: "https://picsum.photos/200/300?random=2", alttext: "sneakers" }],
    },
    {
      id: "3",
      name: "Classic Watch",
      price: 150,
      image: [{ url: "https://picsum.photos/200/300?random=3", alttext: "watch" }],
    },
    {
      id: "4",
      name: "Leather Wallet",
      price: 50,
      image: [{ url: "https://picsum.photos/200/300?random=4", alttext: "wallet" }],
    },
    {
      id: "5",
      name: "Graphic T-Shirt",
      price: 30,
      image: [{ url: "https://picsum.photos/200/300?random=5", alttext: "t-shirt" }],
    },
    {
      id: "6",
      name: "Running Shoes",
      price: 100,
      image: [{ url: "https://picsum.photos/200/300?random=6", alttext: "shoes" }],
    },
    {
      id: "7",
      name: "Denim Jeans",
      price: 90,
      image: [{ url: "https://picsum.photos/200/300?random=7", alttext: "jeans" }],
    },
  ];

  // Scroll function
  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Update button states
  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      updateScrollButtons(); // initial state
      container.addEventListener("scroll", updateScrollButtons);
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  return (
    <section>
      <div className='container mx-auto text-center mb-10 relative'>
        <h2 className='text-3xl font-bold mb-4'>Explore New Arrivals</h2>
        <p>
          Discover the latest style straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>

        {/* Scroll buttons */}
        <div className='absolute right-0 bottom-[-30px] flex space-x-2'>
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`p-2 rounded border bg-white text-black ${!canScrollLeft ? "opacity-40 cursor-not-allowed" : ""}`}
          >
            <HiChevronLeft className='text-2xl' />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`p-2 rounded border bg-white text-black ${!canScrollRight ? "opacity-40 cursor-not-allowed" : ""}`}
          >
            <HiChevronRight className='text-2xl' />
          </button>
        </div>
      </div>

      {/* Scrollable product list */}
      <div
        ref={scrollRef}
        className='container mx-auto overflow-x-scroll flex space-x-6 relative scrollbar-hide'
      >
        {newProducts.map((product) => (
          <div key={product.id} className="min-w-[200px]">
            <img
              src={product.image[0]?.url}
              alt={product.image[0]?.alttext || product.name}
              className="w-full h-auto rounded-lg shadow"
            />
            <h3 className="mt-2 font-semibold">{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default New;
