import { GetListResponse } from '@refinedev/core';
import { IChartDatum } from '../../interfaces';
import DataCard from './DataCard';
import { useState } from 'react';
import arrowdown from '../../assets/icons/arrowdown.svg'
import arrowup from '../../assets/icons/arrowup.svg'
import loadingCard from '../../assets/icons/loadingsingle.svg'

type TStat = {
    dailyRevenue?: GetListResponse<IChartDatum>;
    dailyOrders?: GetListResponse<IChartDatum>;
    newCustomers?: GetListResponse<IChartDatum>;
    onClick?: () => void;
    active?: boolean;
};



const NewStats = ({ dailyRevenue, dailyOrders, newCustomers, onClick, active } : TStat) => {
    const [activeIndex, setActiveIndex] = useState(0); 


    const handleClick = (index: number) => {
        setActiveIndex(index);
    }

    return (
        <div className="flex flex-col gap-2 lg:flex-row justify-center items-center">
            <DataCard 
                title="Online store sessions" 
                data={newCustomers}
                format='52'
                active={activeIndex === 0} 
                onClick={() => handleClick(0)} />

            <DataCard 
                title="Net return value" 
                data={dailyRevenue}
                format='$1'
                active={activeIndex === 1} 
                onClick={() => handleClick(1)} />
            <DataCard 
                title="Total orders" 
                data={dailyOrders}
                format='10'
                active={activeIndex === 2} 
                onClick={() => handleClick(2)} />
            <DataCard 
                title="Conversion rate" 
                data={newCustomers}
                format=''
                active={activeIndex === 3} 
                onClick={() => handleClick(3)} />
            <div className="card w-96 bg-base-100">
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <button className="btn bg-white border-white" onClick={onClick}>
                            <img src={active? arrowdown : arrowup} alt="arrow" className='w-4 h-4'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewStats