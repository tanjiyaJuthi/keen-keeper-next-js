import React from 'react';

const Counter = () => {
    return (
        <div className="py-10 grid grid-cols-2 lg:grid-cols-4 gap-10 justify-between text-center">
            <div className="bg-white p-5 rounded-sm shadow-sm">
                <p className="font-bold text-2xl">10</p>
                <p className=" text-[#64748B] mt-2">Total Friends</p>
            </div>

            <div className="bg-white p-5 rounded-sm shadow-sm">
                <p className="font-bold text-2xl">3</p>
                <p className="text-[#64748B] mt-2">On Track</p>
            </div>

            <div className="bg-white p-5 rounded-sm shadow-sm">
                <p className="font-bold text-2xl">10</p>
                <p className="text-[#64748B] mt-2">Need Attention</p>
            </div>

            <div className="bg-white p-5 rounded-sm shadow-sm">
                <p className="font-bold text-2xl">10</p>
                <p className="text-[#64748B] mt-2">Interactions This Month</p>
            </div>
        </div>
    );
};

export default Counter;