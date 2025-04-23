import FormTextEditor from '@/components/form/FormTextEditor';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import Select from '@/components/ui/react-select';
import { useCreateVendor, useGetVendorCategories } from '@/hooks/vendor.hook';
import { Controller, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

function AddVendor() {
  const { categories, isLoading } = useGetVendorCategories();
  const {
    mutate: createVendor,
    isPending: isSubmitting,
    form,
  } = useCreateVendor();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = form;

  const categoryOptions = categories?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

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
          <FormProvider {...form}>
            <form
              onSubmit={handleSubmit(createVendor)}
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
                {errors?.name?.message && (
                  <p className="text-red-500 mt-2">{errors?.name?.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2 relative w-full">
                <label className="text-sm font-medium text-white">
                  Vendor Category
                </label>
                <Controller
                  name="vendor_category_id"
                  control={control}
                  render={({ field }) => (
                    <Select
                      options={categoryOptions}
                      value={categoryOptions?.find(
                        (option) => option?.value == field?.value
                      )}
                      onChange={(option) => field.onChange(option?.value)}
                      isDisabled={isLoading}
                      isLoading={isLoading}
                      placeholder="Select Vendor Category"
                    />
                  )}
                />
                {errors?.vendor_category_id?.message && (
                  <p className="text-red-500 mt-2">
                    {errors?.vendor_category_id?.message}
                  </p>
                )}
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
                {errors?.website?.message && (
                  <p className="text-red-500 mt-2">
                    {errors?.website?.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-medium text-light">Email</label>
                <input
                  className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark text-light w-full outline-none"
                  placeholder="example@email.com"
                  {...register('email')}
                />
                {errors?.email?.message && (
                  <p className="text-red-500 mt-2">{errors?.email?.message}</p>
                )}
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
                {errors?.phone?.message && (
                  <p className="text-red-500 mt-2">{errors?.phone?.message}</p>
                )}
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
                {errors?.about?.message && (
                  <p className="text-red-500 mt-2">{errors?.about?.message}</p>
                )}
              </div>

              {/* <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium text-white">
                Vendor Image or Logo
              </label>
              <label
                htmlFor="logo"
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full flex items-center justify-between cursor-pointer"
              >
                <span className="text-secondary text-sm leading-[21px] tracking-[-0.14px]">
                  {watch('logo')?.[0]?.name || 'Choose File'}
                </span>
                <FileSvg />
                <input
                  id="logo"
                  type="file"
                  className="hidden"
                  {...register('logo')}
                />
              </label>
              {errors?.logo?.message && (
                <p className="text-red-500 mt-2">{errors?.logo?.message}</p>
              )}
            </div> */}

              <FormTextEditor name="additional_note" label="Additional Notes" />

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
                  onClick={reset}
                  className="request-btn text-light"
                >
                  Cancel
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
}

export default AddVendor;
