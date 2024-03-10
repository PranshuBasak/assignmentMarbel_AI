
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  Legend,
} from "recharts";;
import { IChartDatum } from "../../interfaces";
import { CustomToolTip } from "./CustomToolTip";
import CustomLegend from "./CustomLegend";
import { useEffect, useState } from "react";
import { addDays } from "date-fns";


type TChartProps = {
  kpi: string;
  data: IChartDatum[];
  colors: {
    stroke: string;
    fill: string;
  };
};

const Chart = ({
  kpi,
  data,
  colors,
}: TChartProps) => {

  const [range, setRange] = useState({ 
    startDate: new Date(new Date().getFullYear(), 2, 2), 
    endDate: addDays(new Date(new Date().getFullYear(), 2, 2), 7) 
  });

  const [filteredData, setFilteredData] = useState<IChartDatum[]>([]);

  useEffect(() => {
    
    const initialFilteredData = data.filter(d => 
      new Date(d.date) >= range.startDate && new Date(d.date) <= range.endDate
    );
    setFilteredData(initialFilteredData);
  }, []); 




  const handleRangeChange = (selectedRange: any) => {
    setRange(selectedRange);
    const newFilteredData = data.filter(d => 
      new Date(d.date) >= selectedRange.startDate && new Date(d.date) <= selectedRange.endDate
    );
    setFilteredData(newFilteredData);
  };
    const first = data[0].date
    const last = data[data.length - 1].date;
    const ranged = first +  " - " + last ;

  return (
    <ResponsiveContainer height={400}>
      <AreaChart
        data={filteredData}
        height={400}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <Legend 
          content={<CustomLegend ranged={ranged} onRangeChange={handleRangeChange}/>} 
          verticalAlign="bottom" 
          align="right"
        />
        <CartesianGrid 
          stroke="#f2f2f2" 
          strokeWidth={2} 
          vertical={false}
        />

        <XAxis
          dataKey="date"
          tickCount={data?.length ?? 0}
          tick={{
            stroke: "light-grey",
            strokeWidth: 0,
            fontSize: "15px",
          }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          dataKey="value"
          tick={{
            stroke: "light-grey",
            strokeWidth: 0,
            fontSize: "15px",
          }}
          interval="preserveStartEnd"
          domain={[0, "dataMax + 10"]}
          axisLine={false}
          tickLine={false}
        />



          <Tooltip
            content={<CustomToolTip  />}
            wrapperStyle={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              border: "1 solid #000",
              borderRadius: "10px",
            }}
          />

        <Area
          type="monotone"
          dataKey="value"
          stroke={colors?.stroke}
          strokeWidth={3}
          fill="rgba(54, 162, 235, 0)"
          dot={{
            stroke: colors?.stroke,
            strokeWidth: 0,
          }}
          stackId="1"
        />
        <Area
          type="monotone"
          dataKey="value1"
          stroke="rgba(135, 206, 250)" 
          strokeDasharray="5 5" 
          strokeWidth={3}
          fill="rgba(54, 162, 235, 0)"
          dot={{
            stroke: "rgba(135, 206, 250)", 
            strokeWidth: 0,
          }}
          stackId="2"
        />

        
      </AreaChart>
    </ResponsiveContainer>
  );
};





export default Chart;