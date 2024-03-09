import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';



const CustomLegend = ({ range }: any) => {

    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      }
    const handleSelect = (item: any) => {
        console.log(item)
        // setValue(item.selection.endDate)
    }   
    const [active, setActive] = useState(false);
  return (
    <div className="flex justify-end items-center gap-2 py-2 cursor-pointer">
        <div className="dropdown dropdown-top dropdown-end">
        <div tabIndex={0} role="button" className="btn dropDownContent px-4 gap-4">
            <p className="bg-gradient-to-r from-blue-400 to-blue-300 w-6 h-1 rounded"></p>
            <p className="dropDownContent">{range}</p>
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box">
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
        </ul>
        </div>

    </div>
  )
}

export default CustomLegend