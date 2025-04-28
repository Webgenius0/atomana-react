import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import { ROLE } from '@/constants';
import { useAuth } from '@/hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const data = [
  {
    id: 'C455',
    path: '/my-systems/new-contract/new-contract-information-form',
    type: 'New Contract',
    title: 'New Contract Information Form',
  },
  {
    id: 'C456',
    path: '/my-systems/new-contract/contract-information',
    type: 'New Contract',
    title: 'Contract Information List',
    role: [ROLE.ADMIN],
  },
];

const NewContract = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user } = useAuth();
  const userRole = user?.role;

  return (
    <>
      <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit my-5">
        <Link to="/my-systems/">
          <ArrowLeftSvg />
        </Link>
        <h2 className="section-title">New Contract</h2>
      </div>

      <div className="grid min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-5">
        {data
          ?.filter((item) => {
            if (!item.role || item.role?.length === 0) return true;
            return item.role.includes(userRole);
          })
          ?.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(item.path, { state: { from: pathname } })}
              className="rounded-2xl bg-[#242424] py-4 px-6 hover:shadow-[2px_2px_4px] hover:shadow-[#009696] duration-300 ease-in-out cursor-pointer"
            >
              {/* card header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex py-1 px-2 justify-center items-center gap-1 rounded-lg border border-[#009696] bg-secondPrimary text-[#ccc] text-xs leading-[21px] tracking-[-0.12px]">
                  <span className="w-[9px] h-[9px] rounded-full bg-[#009696]"></span>
                  {item.type}
                </div>
                <button className=" flex w-[30px] h-[30px] justify-center items-center gap-1 rounded-full border border-[#4d4d4d] bg-[#242424] shadow-[0px_0px_0px_1px] shadow-[#000] cursor-pointer duration-300 active:scale-95">
                  <ThreeDotsSvg />
                </button>
              </div>

              {/* card-title */}
              <h3 className="text-light lg:text-lg md:text-base text-sm font-semibold leading-[21px] tracking-[-0.2px]">
                {item.title}
              </h3>
            </div>
          ))}
      </div>
    </>
  );
};

export default NewContract;
