import FormTextEditor from "@/components/form/FormTextEditor";
import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import PersonPlusSvg from "@/components/svgs/PersonPlusSvg";
import ThreeDotsSvg from "@/components/svgs/ThreeDotsSvg";
import { useAddPassword } from "@/hooks/docs.hook";
import { FormProvider } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AddPassword() {
  const location = useLocation();
  const { mutate: addPassword, isPending, form } = useAddPassword();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    addPassword(data);
  };

  const handleResetForm = (e) => {
    e.preventDefault();
    form.reset();
    navigate(-1);
  };

  return (
    <div className="px-5 py-[25px] overflow-y-auto scrollbar-none w-full">
      <div className="w-full max-w-[670px] mx-auto flex items-center gap-4 justify-between">
        <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit my-5">
          <Link
            to={`${
              location.state?.from || "/my-systems/team/docs/shared-notes"
            }`}
          >
            <ArrowLeftSvg />
          </Link>
          <h2 className="section-title">Add New Password</h2>
        </div>
        <div className="flex items-center gap-2.5">
          <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
            <PersonPlusSvg />
          </button>
          <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
            <ThreeDotsSvg />
          </button>
        </div>
      </div>

      <div className="max-w-[670px] w-full mx-auto mt-4">
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-[670px] mx-start flex flex-col gap-[15px]"
          >
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Title
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter Title"
                {...form.register("title")}
              />
              {form.formState?.errors?.title?.message && (
                <p className="text-base font-semibold text-red-500">
                  {form.formState?.errors?.title?.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Website
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter Website"
                {...form.register("website")}
              />
              {form.formState?.errors?.website?.message && (
                <p className="text-base font-semibold text-red-500">
                  {form.formState?.errors?.website?.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Username
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter Username"
                {...form.register("user_name")}
              />
              {form.formState?.errors?.user_name?.message && (
                <p className="text-base font-semibold text-red-500">
                  {form.formState?.errors?.user_name?.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Email
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter Email"
                {...form.register("email")}
              />
              {form.formState?.errors?.email?.message && (
                <p className="text-base font-semibold text-red-500">
                  {form.formState?.errors?.email?.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Password
              </label>
              <input
                type="password"
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="Enter Password"
                {...form.register("password")}
              />
              {form.formState?.errors?.password?.message && (
                <p className="text-base font-semibold text-red-500">
                  {form.formState?.errors?.password?.message}
                </p>
              )}
            </div>

            <FormTextEditor name="notes" label="Note" />

            <div className="flex sm:flex-row flex-col items-center gap-4 justify-between mt-4 md:mt-6">
              <div className="flex items-center sm:justify-start justify-center gap-4 sm:w-unset w-full">
                <input
                  className="request-btn approve cursor-pointer"
                  type="submit"
                  value={isPending ? "Adding..." : "Add"}
                  disabled={isPending}
                />
              </div>

              <button
                onClick={handleResetForm}
                className="request-btn text-light"
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
