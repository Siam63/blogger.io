import React, { useState } from 'react'
import Nav from '@/components/Nav'

function Billing() {
    const [billType, setBillType] = useState();

    return (
        <div>
            <Nav />
            <div className="p-5 text-center">
                <h1 className="font-semibold pb-5">Please confirm your membership before proceeding.</h1>
                <div className="flex justify-center">
                    <div className="flex flex-col">
                        <div className="py-2">
                            <input type="radio" name="billType" value="Bronze" onChange={e => setBillType(e.target.value)}/>
                            <span className="ml-2 font-semibold text-xl">Bronze Membership</span>
                        </div>
                        <div className="py-2">
                            <input type="radio" name="billType" value="Gold" onChange={e => setBillType(e.target.value)}/>
                            <span className="ml-2 font-semibold text-xl">Gold Membership</span>
                        </div>
                        <div className="py-2">
                            <input type="radio" name="billType" value="Diamond" onChange={e => setBillType(e.target.value)}/>
                            <span className="ml-2 font-semibold text-xl">Diamond Membership</span>
                        </div>
                    </div>
                </div>
                <div className="pt-5">
                    <h1>{billType} Membership</h1>
                </div>
            </div>
            
        </div>
    )
}

export default Billing
