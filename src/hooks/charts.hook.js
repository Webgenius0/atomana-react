import { formatCompactCurrency } from '@/lib/utils/formatCurrency';
import {
  getCurrentMonth,
  getCurrentQuarter,
  getCurrentYear,
} from '@/lib/utils/timeHelpers';
import { toNumber } from '@/lib/utils/toNumber';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useAxiosSecure } from './useAxios';

export const useGetCurrentSalesVolume = () => {
  const [timeRange, setTimeRange] = useState({
    value: 'monthly',
    label: 'This Month',
  });

  const axiosSecure = useAxiosSecure();

  const { data: currentSales, isLoading } = useQuery({
    queryKey: ['current-sales', timeRange.value],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/api/v1/statistic/current-sales/${timeRange.value}`
      );
      return response.data;
    },
  });

  const target = toNumber(currentSales?.data?.target) || 0;
  const targetFilled = toNumber(currentSales?.data?.target_fill) || 0;

  const percent = Number(((targetFilled / target) * 100).toFixed(2));

  const currentSalesData = {
    data: [
      {
        name:
          timeRange.value === 'monthly'
            ? getCurrentMonth()
            : timeRange.value === 'quarterly'
            ? getCurrentQuarter()
            : getCurrentYear(),
        value: targetFilled,
      },
    ],
    xKey: 'name',
    yKey: 'value',
    title: 'Current Sales Volume',
    yDomain: [0, target],
    total: formatCompactCurrency(targetFilled),
    percent,
  };

  return { currentSalesData, isLoading, setTimeRange };
};

export const useGetUnitsSold = () => {
  const [timeRange, setTimeRange] = useState({
    value: 'monthly',
    label: 'This Month',
  });

  const axiosSecure = useAxiosSecure();

  const { data: unitsSold, isLoading } = useQuery({
    queryKey: ['units-sold', timeRange.value],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/api/v1/statistic/units-sold/${timeRange.value}`
      );
      return response.data;
    },
  });

  const target = toNumber(unitsSold?.data?.target) || 0;
  const currentCount = toNumber(unitsSold?.data?.current_count) || 0;

  const percent = Number(((currentCount / target) * 100).toFixed(2));

  const unitsSoldData = {
    data: [
      {
        name:
          timeRange.value === 'monthly'
            ? getCurrentMonth()
            : timeRange.value === 'quarterly'
            ? getCurrentQuarter()
            : getCurrentYear(),
        amount: currentCount,
      },
    ],
    xKey: 'name',
    yKey: 'amount',
    title: 'Units Sold',
    yDomain: [0, target],
    total: currentCount,
    percent,
  };

  return { unitsSoldData, isLoading, setTimeRange };
};

export const useGetExpenses = () => {
  const [timeRange, setTimeRange] = useState({
    value: 'monthly',
    label: 'This Month',
  });

  const axiosSecure = useAxiosSecure();

  const { data: expenses, isLoading } = useQuery({
    queryKey: ['expenses', timeRange.value],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/api/v1/statistic/expenses/${timeRange.value}`
      );
      return response.data;
    },
  });

  const target = toNumber(expenses?.data?.target) || 0;
  const expense = toNumber(expenses?.data?.expense) || 0;

  const percent = Number(((expense / target) * 100).toFixed(2));

  const expensesData = {
    data: [
      {
        name:
          timeRange.value === 'monthly'
            ? getCurrentMonth()
            : timeRange.value === 'quarterly'
            ? getCurrentQuarter()
            : getCurrentYear(),
        sales: expense,
      },
    ],
    xKey: 'name',
    yKey: 'sales',
    title: 'Expenses',
    yDomain: [0, target],
    total: formatCompactCurrency(expense),
    percent,
  };

  return { expensesData, isLoading, setTimeRange };
};

export const useGetNetProfit = () => {
  const [timeRange, setTimeRange] = useState({
    value: 'monthly',
    label: 'This Month',
  });

  const axiosSecure = useAxiosSecure();

  const { data: netProfit, isLoading } = useQuery({
    queryKey: ['net-profit', timeRange.value],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/api/v1/statistic/net-profit/${timeRange.value}`
      );
      return response.data;
    },
  });

  const target = toNumber(netProfit?.data?.target) || 0;
  const profit = toNumber(netProfit?.data?.['net profit']) || 0;

  const percent = Number(((profit / target) * 100).toFixed(2));

  const netProfitData = {
    data: [
      {
        name:
          timeRange.value === 'monthly'
            ? getCurrentMonth()
            : timeRange.value === 'quarterly'
            ? getCurrentQuarter()
            : getCurrentYear(),
        profit: profit,
      },
    ],
    xKey: 'name',
    yKey: 'profit',
    title: 'Net Profit',
    yDomain: [0, target],
    total: formatCompactCurrency(profit),
    percent,
  };

  return { netProfitData, isLoading, setTimeRange };
};
