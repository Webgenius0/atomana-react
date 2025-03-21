import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useAxiosSecure } from './useAxios';

export const useGetLeaderboardData = () => {
  const axiosSecure = useAxiosSecure();

  const [sorting, setSorting] = useState({
    value: 'highest-avg-sales',
    label: 'Sort By: Highest Average Sales',
  });

  const [filters, setFilters] = useState({
    value: 'monthly',
    label: 'This Month',
  });

  const { data, isLoading } = useQuery({
    queryKey: ['leaderboard', sorting.value, filters.value],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/api/v1/statistic/leaderboard/${sorting.value}/${filters.value}`
      );
      return response.data;
    },
  });

  const leaderboardData = data?.data?.map((item) => ({
    name: item.name,
    amount: item.avg_purchase_price,
    sales: item.total_sales,
    salesGoal: 25,
  }));

  const handleSorting = (option) => {
    setSorting(option);
  };

  const handleFiltering = (option) => {
    setFilters(option);
  };

  return { leaderboardData, isLoading, handleSorting, handleFiltering };
};
