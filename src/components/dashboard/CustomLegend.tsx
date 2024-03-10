
import {useState , useRef,  useEffect} from 'react'
import { DateRangePicker, DateRange } from 'react-date-range';
import format from 'date-fns/format'
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


interface CustomRange {
  startDate: Date;
  endDate: Date;
  key: string;
}

const CustomLegend = ({ ranged, onRangeChange }: any) => {
  const [range, setRange] = useState<CustomRange[]>([
    {
      startDate: new Date(new Date().getFullYear(), 2, 2), 
      endDate: addDays(new Date(new Date().getFullYear(), 2, 2), 7),
      key: "selection",
    },
  ]);

  return (
    <div className="flex flex-row justify-end items-center gap-2">
      <div className="flex justify-end items-center gap-2 py-2 cursor-pointer">
        <div className="dropdown dropdown-top dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className="btn dropDownContent px-4 gap-4"
          >
            <p className="bg-gradient-to-r from-blue-400 to-blue-300 w-6 h-1 rounded"></p>
            <p className="dropDownContent">{`${format(
              range[0].startDate,
              "MMM dd, yyyy"
            )} - ${format(range[0].endDate, "MMM dd, yyyy")}`}</p>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box"
          >
            <DateRangePicker
              onChange={(item) => {
                console.log("Data available for 2024 , please select date range within this period");
                if (item.selection && item.selection.startDate && item.selection.endDate) {
                  const newRange: CustomRange[] = [{ 
                    startDate: item.selection.startDate as Date, 
                    endDate: item.selection.endDate as Date, 
                    key: "selection",
                  }];
              
                  setRange(newRange);
                  
                  onRangeChange({
                    startDate: item.selection.startDate as Date, 
                    endDate: item.selection.endDate as Date, 
                  });
                }
              }}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={range}
              months={1}
              direction="horizontal"
            />
          </ul>
        </div>
      </div>
      <div className="flex justify-end items-center gap-2 py-2 cursor-pointer ">
        <div className="dropdown dropdown-top dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn dropDownContent px-4 gap-4"
          >
            <p className="bg-gradient-to-r from-blue-300 to-blue-100 w-6 h-1 rounded"></p>
            <p className="dropDownContent">
              {`${format(
                range[0].startDate,
                "MMM dd, yyyy"
              )} - ${format(range[0].endDate, "MMM dd, yyyy")}`}
            </p>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box"
          >
            <DateRangePicker
              onChange={(item) => {
                console.log("Data available for 2024 , please select date range within this period")
                if (item.selection && item.selection.startDate && item.selection.endDate) {
                  const newRange: CustomRange[] = [{ 
                    startDate: item.selection.startDate as Date, 
                    endDate: item.selection.endDate as Date, 
                    key: "selection",
                  }];
              
                  setRange(newRange);
                  
                  onRangeChange({
                    startDate: item.selection.startDate as Date, 
                    endDate: item.selection.endDate as Date, 
                  });
                }
              }}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={range}
              months={1}
              direction="horizontal"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomLegend