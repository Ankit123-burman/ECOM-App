import React, { useEffect, useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import axios from 'axios';

function New() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`
        );
        setNewArrivals(response.data);
         
      } catch (error) {
        console.error(error);
      }
    };
    fetchNewArrivals();
  }, []);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

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
      updateScrollButtons();
      container.addEventListener("scroll", updateScrollButtons);
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, [newArrivals]);
 


  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p>
          Discover the latest style straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>

        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border bg-white text-black ${
              !canScrollLeft ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <HiChevronLeft className="text-2xl" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded border bg-white text-black ${
              !canScrollRight ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <HiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable product list */}
      <div
        ref={scrollRef}
        className="container mx-auto overflow-x-scroll flex space-x-6 relative scrollbar-hide"
      >
        {newArrivals.map((product) => (
          <div key={product._id} className="min-w-[200px]">
            <img
              src={product.image?.[0]?.url}
              alt={product.image?.[0]?.alttext || product.name}
              className="w-full h-auto rounded-lg shadow"
            />
            <h3 className="mt-2 font-semibold">{product.name}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default New;
