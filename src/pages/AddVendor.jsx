import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import DropdownIconSvg from '@/components/svgs/DropdownIconSvg';
import FileSvg from '@/components/svgs/FileSvg';
import { useCreateVendor, useGetVendorCategories } from '@/hooks/vendor.hook';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function AddVendor() {
  const [fileName, setFileName] = useState('Vendor_Logo.png');
  const [isOpen, setIsOpen] = useState(false);
  const { categories, isLoading } = useGetVendorCategories();
  const { mutate, isLoading: isSubmitting, form } = useCreateVendor();
  const { register, handleSubmit, reset } = form;

  const onSubmit = (data) => {
    const payload = {
      name: data.name,
      vendor_category_id: data.category,
      website: data.website,
      email: data.email,
      phone: data.phone,
      about: data.about,
      additional_note: 'Some default note',
    };

    mutate(payload);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : 'Vendor_Logo.png');
  };

  const handleResetForm = () => {
    reset();
    setFileName('Vendor_Logo.png');
  };

  return (
    <>
      <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
        <div className="flex items-center gap-5 hover:opacity-60 w-fit">
          <Link to="/my-systems/vendor-list">
            <ArrowLeftSvg />
          </Link>
          <h2 className="section-title">Add Vendor</h2>
        </div>
        <div className="mt-6 md:mt-8 lg:mt-12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[670px] mx-auto flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium text-white">
                Vendor Name
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark text-light w-full outline-none"
                placeholder="Enter vendor name"
                {...register('name', { required: true })}
              />
            </div>

            <div className="flex flex-col gap-2 relative w-full">
              <label className="text-sm font-medium text-white">
                Vendor Category
              </label>
              <select
                {...register('category', { required: true })}
                onClick={() => setIsOpen(!isOpen)}
                className="appearance-none px-4 py-3 outline-none rounded-[10px] border border-[#d8dfeb] bg-dark text-white w-full"
              >
                {isLoading ? (
                  <option value="" disabled>
                    Loading...
                  </option>
                ) : categories && categories.length > 0 ? (
                  categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    No categories available
                  </option>
                )}
              </select>
              <div
                className={`absolute top-1/2 right-3 transform ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                } transition-all`}
              >
                <DropdownIconSvg />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium text-light">
                Vendor Website
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark text-light w-full outline-none"
                placeholder="www.vendor.com"
                {...register('website')}
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium text-light">Email</label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark text-light w-full outline-none"
                placeholder="example@email.com"
                {...register('email')}
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium text-light">
                Vendor Phone
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark text-light w-full outline-none"
                placeholder="000-000-0000"
                {...register('phone')}
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium text-light">
                About the Vendor
              </label>
              <textarea
                placeholder="Enter vendor details..."
                {...register('about')}
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark text-light w-full outline-none"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium text-white">
                Vendor Image or Logo
              </label>
              <label
                htmlFor="file-upload"
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark flex items-center justify-between cursor-pointer"
              >
                <span className="text-secondary">{fileName}</span>
                <FileSvg />
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>

            <div className="flex items-center gap-4 justify-between">
              <button
                type="submit"
                className="request-btn approve"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Adding...' : 'Add Vendor'}
              </button>
              <button
                type="button"
                onClick={handleResetForm}
                className="request-btn text-light"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddVendor;
