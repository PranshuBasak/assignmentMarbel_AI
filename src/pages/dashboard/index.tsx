import React, { useMemo, useState } from "react";
import { CrudFilter, useList } from "@refinedev/core";
import dayjs from "dayjs";
import { IChartDatum, TTab } from "../../interfaces";
import NewStats from "../../components/dashboard/NewStats";
import screenLoader from '../../assets/icons/screenLoader.svg'
import Chart from "../../components/dashboard/Chart";



const filters: CrudFilter[] = [
  {
    field: "start",
    operator: "eq",
    value: dayjs().startOf('year'),
  },
  {
    field: "end",
    operator: "eq",
    value: dayjs().endOf('year'),
  },
];


export const Dashboard: React.FC = () => {
  const [activeState, setActiveState] = useState(true); 

  const { data: dailyRevenue, isLoading: revenueLoading } = useList<IChartDatum>({
    resource: "dailyRevenue",
    filters,
  });

  const { data: dailyOrders } = useList<IChartDatum>({
    resource: "dailyOrders",
    filters,
  });

  const { data: newCustomers } = useList<IChartDatum>({
    resource: "newCustomers",
    filters,
  });

  const useMemoizedChartData = (d: any) => {
    return useMemo(() => {
      return d?.data?.data?.map((item: IChartDatum) => ({
        date: new Intl.DateTimeFormat("en-US", {
          month: "short",
          year: "numeric",
          day: "numeric",
        }).format(new Date(item.date)),
        value: item?.value,
        value1: Math.round(item?.value * Math.random()),
        percentage: parseInt((item?.value / 100).toString(), 10),
      }));
    }, [d]);
  };

  const memoizedRevenueData = useMemoizedChartData(dailyRevenue);
  // const memoizedOrdersData = useMemoizedChartData(dailyOrders);
  // const memoizedNewCustomersData = useMemoizedChartData(newCustomers);




  return (
    <div className="bg-white p-2 rounded-xl overflow-hidden">
      {revenueLoading? <img src={screenLoader} alt="loading" className="w-full h-full animate-pulse"/> : <>
      
      <NewStats 
        dailyRevenue={dailyRevenue} 
        dailyOrders={dailyOrders}
        newCustomers={newCustomers}
        onClick={() => setActiveState(!activeState)}
        active={activeState}
        />

      {activeState? 
        <Chart 
          kpi="Net Return Value"
          data={memoizedRevenueData}
          colors={{
            stroke: "rgb(54, 162, 235)",
            fill: "rgba(54, 162, 235, 0)",
          }}
      /> : null}
      </>}
    </div>
  );
};
