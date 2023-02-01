import React, { useState } from 'react'
import Nav from '@/components/Nav'

function Billing() {
    const [billType, setBillType] = useState("$0.00");

    return (
        <div>
            <Nav />
            <div className="p-5 text-center">
                <h1 className="font-semibold pb-5">Please confirm the prices of each membership before proceed.</h1>
                <div className="flex justify-center">
                    <div className="flex flex-col">
                        <div className="py-2">
                            <input type="radio" name="billType" value="$0.00 CAD" onChange={e => setBillType(e.target.value)}/>
                            <span className="ml-2 font-semibold text-xl">Bronze Membership</span>
                        </div>
                        <div className="py-2">
                            <input type="radio" name="billType" value="$10.00 CAD" onChange={e => setBillType(e.target.value)}/>
                            <span className="ml-2 font-semibold text-xl">Gold Membership</span>
                        </div>
                        <div className="py-2">
                            <input type="radio" name="billType" value="$15.00 CAD" onChange={e => setBillType(e.target.value)}/>
                            <span className="ml-2 font-semibold text-xl">Diamond Membership</span>
                        </div>
                    </div>
                </div>
                <div className="pt-5">
                    <h1>TOTAL: {billType}</h1>
                </div>
                <div className="pt-10">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScqtV23lJssuuMoly45YkvwTB8csN_0eB03fW6lWYGeDqCcEg/viewform?usp=sf_link" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600">
                        <span class="relative text-black transition duration-300 group-hover:text-orange-700 ease">Proceed to Checkout</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Billing
