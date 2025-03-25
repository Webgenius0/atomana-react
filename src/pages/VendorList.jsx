import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import VlHeader from '@/components/VlHeader';
import { useGetVendorList } from '@/hooks/vendor.hook';
import { Link, useParams } from 'react-router-dom';

const VendorList = () => {
  const { slug } = useParams();
  const { vendorList, isLoading } = useGetVendorList(slug);

  if (isLoading) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <>
      <VlHeader />
      <div className="grid min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5">
        {vendorList?.map((item) => (
          <Link
            to={`/my-systems/vendor-list/${item?.category?.slug}/${item?.slug}`}
            key={item.id}
            className="rounded-2xl bg-[#242424] py-4 px-6 hover:shadow-[2px_2px_4px] hover:shadow-[#009696] duration-300 ease-in-out"
          >
            {/* card header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex py-1 px-2 justify-center items-center gap-1 rounded-lg border border-[#009696] bg-secondPrimary text-[#ccc] text-xs leading-[21px] tracking-[-0.12px]">
                <span className="w-[9px] h-[9px] rounded-full bg-[#009696]"></span>
                {item.category.name}
              </div>
              <button className=" flex w-[30px] h-[30px] justify-center items-center gap-1 rounded-full border border-[#4d4d4d] bg-[#242424] shadow-[0px_0px_0px_1px] shadow-[#000] cursor-pointer duration-300 active:scale-95">
                <ThreeDotsSvg />
              </button>
            </div>

            {/* card-title */}
            <h3 className="text-light lg:text-lg md:text-base text-sm font-semibold leading-[21px] tracking-[-0.2px]">
              {item.name}
            </h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export default VendorList;
