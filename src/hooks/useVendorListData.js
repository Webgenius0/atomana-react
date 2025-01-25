// hooks/useSystemsData.js
import { useQuery } from "@tanstack/react-query";
import { useAxios } from "@/hooks/useAxios";

export const useGetVendorListData = (type) => {
  const axios = useAxios();

  // const { data, isLoading, isError, error } = useQuery({
  //   queryKey: ["systemsData", type],
  //   queryFn: async () => {
  //     const response = await axios.get("/systemsData.json");
  //     return await response.data;
  //   },
  // });

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error: {error.message}</div>;

  const VendorListData = [
    {
      id: "B283",
      type: "Utilities",
      phone: "+1 (408) 914-7843",
      title: "Bright Home Inspections",
    },
    {
      id: "B173",
      type: "Utilities",
      phone: "+1 (408) 914-7843",
      title: "Staging Pros by Design",
    },
    {
      id: "B173",
      type: "Utilities",
      phone: "+1 (408) 914-7843",
      title: "Focus Realty Photography",
    },
    {
      id: "B173",
      type: "Pest Control",
      phone: "+1 (408) 914-7843",
      title: "Focus Realty Photography",
    },
    {
      id: "B173",
      type: "Rental Management",
      phone: "+1 (408) 914-7843",
      title: "Prime Landscaping Co.",
    },
    {
      id: "B173",
      type: "insurance",
      phone: "+1 (408) 914-7843",
      title: "Prime Landscaping Co.",
    },
    {
      id: "B173",
      type: "Rental Management",
      phone: "+1 (408) 914-7843",
      title: "EZ Mortgage Solutions",
    },
    {
      id: "B173",
      type: "Utilities",
      phone: "+1 (408) 914-7843",
      title: "Green Clean Homes",
    },
    {
      id: "B173",
      type: "insurance",
      phone: "+1 (408) 914-7843",
      title: "Smith & Associates Law",
    },
    {
      id: "B173",
      type: "Utilities",
      phone: "+1 (408) 914-7843",
      title: "Top Moves Relocation",
    },
    {
      id: "B173",
      type: "Pest Control",
      phone: "+1 (408) 914-7843",
      title: "Urban Pest Control",
    },
    {
      id: "B173",
      type: "insurance",
      phone: "+1 (408) 914-7843",
      title: "Signature Insurance",
    },
    {
      id: "B173",
      type: "Utilities",
      phone: "+1 (408) 914-7843",
      title: "EcoPaint Solutions",
    },
    {
      id: "B173",
      type: "Utilities",
      phone: "+1 (408) 914-7843",
      title: "Premier Roofing Experts",
    },
    {
      id: "B173",
      type: "Rental Management",
      phone: "+1 (408) 914-7843",
      title: "EZ Mortgage Solutions",
    },
    {
      id: "B173",
      type: "Utilities",
      phone: "+1 (408) 914-7843",
      title: "Green Clean Homes",
    },
    {
      id: "B173",
      type: "insurance",
      phone: "+1 (408) 914-7843",
      title: "Smith & Associates Law",
    },
    {
      id: "B173",
      type: "Utilities",
      phone: "+1 (408) 914-7843",
      title: "Top Moves Relocation",
    },
  ];

  // Filter data by the type,
  const filteredData = type ? VendorListData?.filter( (item) => item?.type.toLowerCase() === type.toLowerCase()) : VendorListData;

  // return { data: filteredData, isLoading, isError, error };
  return { data: filteredData };
};
