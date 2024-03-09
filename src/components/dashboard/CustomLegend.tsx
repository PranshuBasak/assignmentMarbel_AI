import { useState } from 'react';


const CustomLegend = ({ range }: any) => {

    const [value, setValue] = useState<Date | null>(null);
  return (
    <div className="flex justify-end items-center gap-2 py-2 cursor-pointer">
        <p className="bg-gradient-to-r from-blue-400 to-blue-300 w-6 h-1 rounded"></p>
        <p className="dropDownContent">{range}</p>
        

    </div>
  )
}

export default CustomLegend