// hooks/useSystemsData.js
// import { useQuery } from "@tanstack/react-query";
// import { useAxios } from "@/hooks/useAxios";

export const useGetSystemsData = (type) => {
  // const axios = useAxios();

  // const { data, isLoading, isError, error } = useQuery({
  //   queryKey: ["systemsData", type],
  //   queryFn: async () => {
  //     const response = await axios.get("/systemsData.json");
  //     return await response.data;
  //   },
  // });

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error: {error.message}</div>;

  const systemsData = [
    {
      id: 'A123',
      type: 'Open Houses',
      title: 'Open House Request Form',
    },
    {
      id: 'B321',
      type: 'Expenses',
      title: 'My Listing Expenses',
    },
    {
      id: 'B322',
      type: 'Expenses',
      title: 'My Business Expenses',
    },
    {
      id: 'C455',
      type: 'New Listing',
      title: 'New Listing Information Form',
    },
    {
      id: 'D789',
      type: 'New Contract',
      title: 'New Contract Information Form',
    },
    {
      id: 'D790',
      type: 'New Contract',
      title: "What To Do Once You're Under Contract",
    },
    // {
    //   id: 'E987',
    //   type: 'Team',
    //   title: 'Our Mission',
    // },
    {
      id: 'E988',
      type: 'Team',
      title: 'Vendor List',
    },
    {
      id: 'B323',
      type: 'Expenses',
      title: 'My Agent Earnings',
    },
    {
      id: 'B324',
      type: 'Expenses',
      title: 'My P&L',
    },
    // {
    //   id: 'E990',
    //   type: 'Team',
    //   title: 'HOA Community Docs',
    // },
    {
      id: 'E992',
      type: 'Team',
      title: 'Access Instruction',
    },
    {
      id: 'B944',
      type: 'Team',
      title: 'Sales Tracker',
    },
    {
      id: 'Z190',
      type: 'Team',
      title: 'Shared Notes',
    },
    {
      id: 'X492',
      type: 'Team',
      title: 'Password List',
    },
  ];

  // Filter data by the type,
  const filteredData = type
    ? systemsData?.filter(
        (item) => item?.type.toLowerCase() === type.toLowerCase()
      )
    : systemsData;

  // return { data: filteredData, isLoading, isError, error };
  // return { data: filteredData };
  return filteredData;
};
