import React from 'react'
import UtilitiesSvg from "@/components/svgs/UtilitiesSvg";
import PestControlSvg from "@/components/svgs/PestControlSvg";
import InsuranceSvg from "@/components/svgs/InsuranceSvg";
import RentalManagementSvg from "@/components/svgs/RentalManagementSvg";
import { useGetVendorListData } from '@/hooks/useVendorListData';
import TabCard from '@/components/TabCard';

function VendorList() {
    const utilitiesData = useGetVendorListData("Utilities")
    const insuranceData = useGetVendorListData("Insurance")
    const pestControlData = useGetVendorListData("Pest Control")
    const rentalData = useGetVendorListData("Rental Management")

    const vendorListTabs = [
        {
            icon: UtilitiesSvg,
            category: "Utilies",
            totalCategories: utilitiesData.length,
            totalCategoryName: "Total Vendors",
            path: "/my-systems/finances",
        },
        {
            icon: PestControlSvg,
            category: "Pest Control",
            totalCategories: insuranceData.length,
            totalCategoryName: "Total Vendors",
            path: "/my-systems/new-listing",
        },
        {
            icon: InsuranceSvg,
            category: "Insurance",
            totalCategories: pestControlData.length,
            totalCategoryName: "Total Vendors",
            path: "/my-systems/new-contract",
        },
        {
            icon: RentalManagementSvg,
            category: "Rental Management",
            totalCategories: rentalData.length,
            totalCategoryName: "Total Items",
            path: "/my-systems/team",
        },
    ]

    return (
        <div className="my-container mx-auto">
            <div className='text-white grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-x-4 gap-x-3 lg:gap-y-4 gap-y-3 my-4'>
                {vendorListTabs?.map((tab, idx) => {
                    const IconComponent = tab.icon
                    return (
                        <TabCard key={idx} tab={tab} IconComponent={IconComponent} />
                    )
                })
                }
            </div>
        </div>
    );
}

export default VendorList;