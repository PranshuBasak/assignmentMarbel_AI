
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
import { useState } from "react";


type TResponsiveAreaChartProps = {
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
}: TResponsiveAreaChartProps) => {

  
    const first = data[0].date
    const last = data[data.length - 1].date;
    const range = first +  " - " + last ;
  return (
    <ResponsiveContainer height={400}>
      <AreaChart
        data={data}
        height={400}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid 
          stroke="#f4f4f4" 
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

        <Legend 
          content={<CustomLegend range={range}/>} 
          verticalAlign="bottom" 
          align="right" 
          
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
          fill={colors?.fill}
          dot={{
            stroke: colors?.stroke,
            strokeWidth: 0,
          }}
          stackId="1"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};





export default Chart;