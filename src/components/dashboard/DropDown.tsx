import { useState } from 'react';
import edit from '../../assets/icons/edit.svg';
import dropdownchart from '../../assets/icons/dropdownchart.svg';
import help from '../../assets/icons/help.svg';
import dropdown from '../../database/dropdown.json';

type Drop = {
    active: boolean;
};

const DropDown = ({ active }: Drop) => {
    const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
    
    const handleMouseEnter = (title: string) => () => setSelectedTitle(title);
    const handleMouseLeave = () => setSelectedTitle(null);

    return (
        <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className={`btn btn-square btn-sm opacity-0 group-hover:opacity-100 transition duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}>
                <img src={edit} alt="edit" />
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-72 transition duration-500">
                {dropdown.map((titles) => (
                    <li className='' key={titles.title} onMouseEnter={handleMouseEnter(titles.title)} onMouseLeave={handleMouseLeave}>
                        <div className="flex gap-2 flex-row justify-center items-center ">
                            <img src={dropdownchart} alt="dropdownChart" className='w-4 h-4' />
                            <a className='dropDownContent'>{titles.title}</a>
                            <div className="grow group"></div>
                            <img src={help} alt="help" className={`w-4 h-4 transition duration-500 ${selectedTitle === titles.title ? 'opacity-100' : 'opacity-0'}`} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropDown;
