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

    // console.log(data)
  return (
    <ResponsiveContainer height={300}>
      <AreaChart
        data={data}
        height={300}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid stroke="#fff" strokeDasharray="0 0 0" />
        <XAxis
          dataKey="date"
          tickCount={data?.length ?? 0}
          tick={{
            stroke: "light-grey",
            strokeWidth: 0.5,
            fontSize: "12px",
          }}
        />
        <YAxis
          tickCount={13}
          tick={{
            stroke: "light-grey",
            strokeWidth: 0.5,
            fontSize: "12px",
          }}
          interval="preserveStartEnd"
          domain={[0, "dataMax + 10"]}
        />

          <Tooltip
            content={<CustomToolTip  />}
            wrapperStyle={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              border: "1 solid #000",
              borderRadius: "10px",
            }}
          />

        <Legend />
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
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};





export default Chart;