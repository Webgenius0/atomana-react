// hooks/useSystemsData.js
import { useQuery } from "@tanstack/react-query";
import { useAxios } from "@/hooks/useAxios";

export const useGetSystemsData = (type) => {
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

  const systemsData = [
    {
      id: "A123",
      type: "Open Houses",
      status: "In Review",
      lastActivity: "09/12",
      title: "Open House Request Form",
    },
    {
      id: "A124",
      type: "Open Houses",
      status: "In Review",
      lastActivity: "09/14",
      title: "Weekend Open House Event",
    },
    {
      id: "B321",
      type: "Expenses",
      status: "In Review",
      lastActivity: "09/10",
      title: "MyListing Expenses",
    },
    {
      id: "B322",
      type: "Expenses",
      status: "In Review",
      lastActivity: "09/13",
      title: "MyBusiness Expenses",
    },
    {
      id: "C455",
      type: "New Listing",
      status: "In Review",
      lastActivity: "09/11",
      title: "New Property Listing: Downtown Loft",
    },
    {
      id: "C456",
      type: "New Listing",
      status: "In Review",
      lastActivity: "09/15",
      title: "Modern Apartment in City Center",
    },
    {
      id: "D789",
      type: "New Contract",
      status: "In Review",
      lastActivity: "09/09",
      title: "Lease Agreement for 123 Main St",
    },
    {
      id: "D790",
      type: "New Contract",
      status: "In Review",
      lastActivity: "09/14",
      title: "Contract for New Rental Agreement",
    },
    {
      id: "E987",
      type: "Team",
      status: "In Review",
      lastActivity: "09/07",
      title: "Our Mission",
    },
    {
      id: "E988",
      type: "Team",
      status: "In Review",
      lastActivity: "09/10",
      title: "Vendor List",
    },
    {
      id: "A125",
      type: "Open Houses",
      status: "In Review",
      lastActivity: "09/13",
      title: "Luxury Home Open House",
    },
    {
      id: "B323",
      type: "Expenses",
      status: "In Review",
      lastActivity: "09/09",
      title: "MyAgent Expenses",
    },
    {
      id: "C457",
      type: "New Listing",
      status: "In Review",
      lastActivity: "09/06",
      title: "New Listing: Cozy Cottage",
    },
    {
      id: "D791",
      type: "New Contract",
      status: "In Review",
      lastActivity: "09/11",
      title: "Signed Contract for Residential Property",
    },
    {
      id: "E989",
      type: "Team",
      status: "In Review",
      lastActivity: "09/08",
      title: "About Me",
    },
    {
      id: "A126",
      type: "Open Houses",
      status: "In Review",
      lastActivity: "09/14",
      title: "Weekend Property Open House",
    },
    {
      id: "B324",
      type: "Expenses",
      status: "In Review",
      lastActivity: "09/15",
      title: "MyP&L",
    },
    {
      id: "C458",
      type: "New Listing",
      status: "In Review",
      lastActivity: "09/12",
      title: "Urban Penthouse Listing",
    },
    {
      id: "D792",
      type: "New Contract",
      status: "In Review",
      lastActivity: "09/13",
      title: "New Contract for Lease",
    },
    {
      id: "E990",
      type: "Team",
      status: "In Review",
      lastActivity: "09/09",
      title: "HOA Community Docs",
    },
    {
      id: "A127",
      type: "Open Houses",
      status: "In Review",
      lastActivity: "09/11",
      title: "Luxury Home Viewing",
    },
    {
      id: "C459",
      type: "New Listing",
      status: "In Review",
      lastActivity: "09/10",
      title: "New Beachfront Property Listing",
    },
    {
      id: "D793",
      type: "New Contract",
      status: "In Review",
      lastActivity: "09/12",
      title: "Pending Rental Contract",
    },
    {
      id: "A128",
      type: "Open Houses",
      status: "Completed",
      lastActivity: "09/15",
      title: "203 Westmore St Call",
      attendees: "James Filmore, Jesse Bard",
      date: "10/24/2024",
      time: "12:00 PM",
      duration: "37 m",
    },
    {
      id: "B326",
      type: "Open Houses",
      status: "Scheduled",
      lastActivity: "09/13",
      title: "Sync on Plan for SJ",
      invited: "Helga Ode, Matthew Buchanan",
      date: "11/01/2024",
      time: "07:30 PM",
    },
    {
      id: "C460",
      type: "New Listing",
      status: "In Review",
      lastActivity: "09/14",
      title: "Cozy Condo Listing",
    },
    {
      id: "D794",
      type: "New Contract",
      status: "In Review",
      lastActivity: "09/08",
      title: "Signed Lease Agreement",
    },
    {
      id: "E992",
      type: "Team",
      status: "In Review",
      lastActivity: "09/15",
      title: "Access Instruction",
    },
  ];

  // Filter data by the type,
  const filteredData = type
    ? systemsData?.filter(
        (item) => item?.type.toLowerCase() === type.toLowerCase()
      )
    : systemsData;

  // return { data: filteredData, isLoading, isError, error };
  return { data: filteredData };
};
