import DataCard from "@/components/DataCard";
import { useAxios } from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const MySystems = () => {
  const axios = useAxios();

  const location = useLocation();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await axios.get("/mysystems.json");
      return response.data;
    },
  });

  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-5">
      {data?.map((item) => (
        <DataCard key={item?.id} data={item} />
      ))}
    </div>
  );
};

export default MySystems;
