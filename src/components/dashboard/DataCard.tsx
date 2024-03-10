import DropDown from './DropDown'
import line from '../../assets/icons/line.svg'
import up from '../../assets/icons/up.svg'
import down from '../../assets/icons/down.svg'
import HoverCard from './HoverCard';

    type Datacard = {
        title?: string;
        data: any;
        active: boolean;
        onClick: () => void;
        format?: string;
    }


    const DataCard = ({title, data, active, onClick, format}: Datacard) => {

        const total = data?.data?.total;
        const trend = data?.data?.trend;
        const calc = Math.round((trend / total) * 100);
        const percent = total > trend ? `${calc}%` : `${calc}%`;
        const textSign = total > trend ? `${up}` : `${down}`;


    return (
        <div className={`${active? 'bg-gray-100' : 'bg-white'} card w-full bg-white hover:bg-gray-100 group transition-all duration-500  lg:h-20`} onClick={onClick}>
            <div className="card-body px-3 py-2 flex-row ">
                <div className="card-actions flex-col justify-between cursor-default">
                    <div className="dropdown dropdown-hover ">
                        <div tabIndex={0} role="button" className="cardHead cursor-default">{title}</div>
                        <img src={line} alt="line"/>
                        <HoverCard />
                    </div>
                    <div className="flex flex-row gap-1 justify-center items-center">
                        <p className='cardBody'>{format ? format+total: total}</p>
                        <img src={textSign} alt="sign" className='w-3 h-3'/>
                        <p className='percent'>{percent}</p>
                        <div className="grow"></div>
                    </div>
                </div>
                <div className="grow"></div>
                <DropDown active={active}/>
            </div>
        </div>
    )
    }



    export default DataCard