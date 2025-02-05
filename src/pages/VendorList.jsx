import UtilitiesSvg from "@/components/svgs/UtilitiesSvg";
import PestControlSvg from "@/components/svgs/PestControlSvg";
import InsuranceSvg from "@/components/svgs/InsuranceSvg";
import RentalManagementSvg from "@/components/svgs/RentalManagementSvg";
import { useGetVendorListData } from '@/hooks/useVendorListData';
import TabCard from '@/components/TabCard';
import { Link } from 'react-router-dom';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
function VendorList() {
    const utilitiesData = useGetVendorListData("Utilities")
    const insuranceData = useGetVendorListData("insurance")
    const pestControlData = useGetVendorListData("Pest Control")
    const rentalData = useGetVendorListData("Rental Management")

    const vendorListTabs = [
        {
            icon: UtilitiesSvg,
            category: "Utilities",
            totalCategories: utilitiesData.length,
            totalCategoryName: "Total Vendors",
            path: "/my-systems/vendor-list/utilities",
        },
        {
            icon: PestControlSvg,
            category: "Pest Control",
            totalCategories: pestControlData.length,
            totalCategoryName: "Total Vendors",
            path: "/my-systems/vendor-list/pest-control",
        },
        {
            icon: InsuranceSvg,
            category: "Insurance",
            totalCategories: insuranceData.length,
            totalCategoryName: "Total Vendors",
            path: "/my-systems/vendor-list/insurance",
        },
        {
            icon: RentalManagementSvg,
            category: "Rental Management",
            totalCategories: rentalData.length,
            totalCategoryName: "Total Items",
            path: "/my-systems/vendor-list/rental-management",
        },
    ]

    return (
        <div className="mx-auto">
            <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit mb-5 sm:my-5 mr-auto sm:ml-0">
                <Link
                to="/my-systems/team/"
            >
                <ArrowLeftSvg />
            </Link>
            <h2 className="section-title">Vendor List</h2>
            </div>
            
            <div className='text-white grid lg:grid-cols-4 md:grid-cols-3 min-[426px]:grid-cols-2 grid-cols-1 lg:gap-x-4 gap-x-3 lg:gap-y-4 gap-y-3 my-4'>
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