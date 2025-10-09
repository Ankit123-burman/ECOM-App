import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import PayPalButton from './PayPalButton';

function CheckOut() {
    const cart = {
        product:[
            {
                name:"stylish jacket",
                size: "M",
                color: "Black",
                price: 120,
                image: "https://picsum.photos/150?random=1"
            },
            {
                name:"Casual Sneakers",
                size: "42",
                color: "White",
                price: 75,
                image: "https://picsum.photos/150?random=2"
            },
        ],
        totalPrice:195
    }

    const navigate = useNavigate();
    const [checkoutId, setCheckoutId] = useState(null)
    const [shippingAddresh, setShippingAddress] = useState({
        postalCode: "",
        lastName: "",
        addresh: "",
        city:"",
        postalCode :"",
        country:"",
        phone:""
    });

    const handelSubmit =(e)=>{
        e.preventDefault();
        setCheckoutId(123)
    }

    const handelPaymentSuccess =(details)=>{
        console.log("payment successfull",details);
        navigate("/order-confirmation")
        
    }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6
    tracking-righter' >
        <div className='bg-white rounnded-lg p-6' >
            <h2 className='text-2xl uppercase mb-6 ' >Checkout</h2>
            <form onSubmit={handelSubmit} >
                <h3 className='text-lg mb-4' >Contact Details</h3>
                <div className='mb-4' >
                    <label className='block text-gray-700'>Email</label>
                    <input type="email"
                    value="user@example.com"
                    className='w-full p-2 border rounded'
                    disabled
                    />
                </div>
                <h3 className='text-lg mb-4' >Delivery</h3>
                <div className='mb-4 grid grid-cols-2 gap-4' >
                    <div className='' >
                        <label className='block text-gray-700'>First Name</label>
                        <input type="text"
                        value={shippingAddresh.postalCode}
                        onChange={(e)=>
                            setShippingAddress({
                                ...shippingAddresh,
                                postalCode: e.target.value,
                            })
                        }
                        className='w-full p-2 border rounded' required
                        />
                    </div>
                     <div className='' >
                        <label className='block text-gray-700'>Last Name</label>
                        <input type="text"
                        value={shippingAddresh.lastName}
                        onChange={(e)=>
                            setShippingAddress({
                                ...shippingAddresh,
                                lastName: e.target.value,
                            })
                        }
                        className='w-full p-2 border rounded' required
                        />
                    </div>
                </div>
                <div className='mb-4' >
                    <label className='block text-gray-700'>Addresh</label>
                    <input type="text" value={shippingAddresh.addresh}
                    onChange={(e)=>setShippingAddress({
                        ...setShippingAddress,
                        addresh: e.target.value
                    })
                }   
                className='w-full p-2 border rounded'
                required
                />
                </div>
                <div className='mb-4 grid grid-cols-3 gap-4' >
                     <div className='' >
                        <label className='block text-gray-700'>City Name</label>
                        <input type="text"
                        value={shippingAddresh.Ciry}
                        onChange={(e)=>
                            setShippingAddress({
                                ...shippingAddresh,
                                City: e.target.value,
                            })
                        }
                        className='w-full p-2 border rounded' required
                        />
                    </div>
                     <div className='' >
                        <label className='block text-gray-700'>Postal Code</label>
                        <input type="text"
                        value={shippingAddresh.postalCode}
                        onChange={(e)=>
                            setShippingAddress({
                                ...shippingAddresh,
                                postalCode: e.target.value,
                            })
                        }
                        className='w-full p-2 border rounded' required
                        />
                    </div>
                </div>
                <div className='' >
                        <label className='block text-gray-700'>Country Name</label>
                        <input type="text"
                        value={shippingAddresh.country}
                        onChange={(e)=>
                            setShippingAddress({
                                ...shippingAddresh,
                                Country: e.target.value,
                            })
                        }
                        className='w-full p-2 border rounded' required
                        />
                    </div><div className='' >
                        <label className='block text-gray-700'>Phone No.</label>
                        <input type="text"
                        value={shippingAddresh.phone}
                        onChange={(e)=>
                            setShippingAddress({
                                ...shippingAddresh,
                                Phone: e.target.value,
                            })
                        }
                        className='w-full p-2 border rounded' required
                        />
                    </div>
                    <div className='mt-6' >
                        {!checkoutId ? (
                            <button  type='submit' className='w-full bg-black text-white py-3 rounded' >Continue to Pay</button>

                        ):(
                            <div>
                                <h3 className='text-lg mb-4' >Pay With PayPal</h3>
                                <PayPalButton amount={100} onSuccess= {handelPaymentSuccess} onError={(err)=>alert("something went wrong")} />
                            </div>
                        )}
                    </div>
            </form>
        </div>
    </div>
  )
}

export default CheckOut