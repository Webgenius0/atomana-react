import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import DropdownIconSvg from "@/components/svgs/DropdownIconSvg";
import FileSvg from "@/components/svgs/FileSvg";

function AddVendor() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("Vendor_Logo.png");
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data:", { ...data, fileName });
    navigate("/my-systems/vendor-list");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "Vendor_Logo.png");
  };

  const handleResetForm = () => {
    reset();
    setFileName("Vendor_Logo.png");
  };

  return (
    <>
      <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
        <Link to="/my-systems/vendor-list" className="flex items-center gap-5 hover:opacity-60 w-fit">
          <ArrowLeftSvg />
          <h2 className="section-title">Add Vendor</h2>
        </Link>

        <div className="mt-6 md:mt-8 lg:mt-12">
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-[670px] mx-auto flex flex-col gap-4">
            
            {/* Vendor Name */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium text-white">Vendor Name</label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark text-light w-full outline-none"
                placeholder="Enter vendor name"
                {...register("name")}
              />
            </div>

            {/* Vendor Category */}
            <div className="flex flex-col gap-2 relative w-full">
              <label className="text-sm font-medium text-white">Vendor Category</label>
              <select {...register("category")} onClick={() => setIsOpen(!isOpen)}
                className="appearance-none px-4 py-3 outline-none rounded-[10px] border border-[#d8dfeb] bg-dark text-white w-full"
              >
                <option value="Utilities">Utilities</option>
                <option value="Pest Control">Pest Control</option>
                <option value="Insurance">Insurance</option>
                <option value="Rental Management">Rental Management</option>
              </select>
              <div className={`absolute top-1/2 right-3 transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-all`}>
                <DropdownIconSvg />
              </div>
            </div>

            {/* Website */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium text-light">Vendor Website</label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark text-light w-full outline-none"
                placeholder="www.vendor.com"
                {...register("website")}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium text-light">Email</label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark text-light w-full outline-none"
                placeholder="example@email.com"
                {...register("email")}
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium text-light">Vendor Phone</label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark text-light w-full outline-none"
                placeholder="000-000-0000"
                {...register("phone")}
              />
            </div>

            {/* About Vendor */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium text-light">About the Vendor</label>
              <textarea
                placeholder="Enter vendor details..."
                {...register("about")}
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark text-light w-full outline-none"
              />
            </div>

            {/* File Upload */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium text-white">Vendor Image or Logo</label>
              <label htmlFor="file-upload" className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark flex items-center justify-between cursor-pointer">
                <span className="text-secondary">{fileName}</span>
                <FileSvg />
                <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
              </label>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 justify-between">
              <button type="submit" className="request-btn approve">Add Vendor</button>
              <button type="button" onClick={handleResetForm} className="request-btn text-light">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddVendor;
