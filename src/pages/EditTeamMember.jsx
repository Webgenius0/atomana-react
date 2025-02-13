import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import FileSvg from '@/components/svgs/FileSvg';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const EditTeamMember = () => {
  const [fileName, setFileName] = useState('Jamal_Ahmed_Employee_Contract.pdf');
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);
    navigate('/profile/member-profile');
  };

  //   console.log(watch("example"));

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleResetForm = () => {
    setFileName('Select File');
    reset();
  };

  return (
    <div className="my-container">
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit">
          <Link to="/profile/manage-team">
            <ArrowLeftSvg />
          </Link>
          <h2 className="section-title">Edit Team Member</h2>
        </div>

        <div className="mt-6 sm:mt-8 lg:mt-12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[670px] mx-auto flex flex-col gap-[15px]"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                  First name
                </label>
                <input
                  className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                  defaultValue="Jamal"
                  placeholder="First"
                  {...register('firstName')}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                  Last name
                </label>
                <input
                  className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                  defaultValue="Ahmed"
                  placeholder="Last"
                  {...register('lastName')}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Title
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                defaultValue="Sales Lead"
                placeholder="i.e., Sales Lead"
                {...register('title')}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Work Email
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                defaultValue="j.ahmed@homegrown.com"
                placeholder="example@email.com"
                {...register('workEmail')}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Work Phone Number
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                defaultValue="673-278-9091"
                placeholder="000-000-0000"
                {...register('phone')}
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Employment Agreement
              </label>

              <label
                htmlFor="file-upload"
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full flex items-center justify-between cursor-pointer"
              >
                <span className="text-secondary text-sm leading-[21px] tracking-[-0.14px]">
                  {fileName}
                </span>
                <FileSvg />
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Additional Files
              </label>

              <label
                htmlFor="file-upload"
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full flex items-center justify-between cursor-pointer"
              >
                <span className="text-secondary text-sm leading-[21px] tracking-[-0.14px]">
                  {fileName}
                </span>
                <FileSvg />
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>

            <div className="flex items-center gap-4 justify-between sm:mt-2 md:mt-6">
              <input
                className="request-btn approve cursor-pointer"
                type="submit"
                value="Save Changes"
              />

              <button
                onClick={handleResetForm}
                className="request-btn text-light"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTeamMember;
