import profile from "@/assets/images/avatar-placeholder.gif";
import imageIcon from "@/assets/images/image-icon.svg";
import CustomDatePicker from "@/components/CustomDatePicker";
import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import CalenderSvg from "@/components/svgs/CalenderSvg";
import FileSvg from "@/components/svgs/FileSvg";
import Select from "@/components/ui/react-select";
import { useRegisterAgent } from "@/hooks/agent.hook";
import { format } from "date-fns";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const AddTeamMember = () => {
  const [preview, setPreview] = useState(profile);
  const navigate = useNavigate();
  const {
    mutate: registerAgent,
    isPending: isRegisterPending,
    form,
  } = useRegisterAgent();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    watch,
  } = form;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  //   const { agents, isLoading, isError, error } = useGetAgents();

  const isRoleLoading = false;
  const roleOptions = [
    {
      value: 2,
      label: "Admin",
    },
    {
      value: 3,
      label: "Agent",
    },
  ];

  const onSubmit = (data) => {    
    registerAgent({...data,
      avar: data?.avatar?.[0],
      additional_file: data?.additional_file?.[0],
      employement_agrement: data?.employement_agrement?.[0],
    });
  };

  return (
    <div className="my-container">
      <div className="pt-6 md:pt-8 lg:pt-12 pb-3">
        <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit">
          <Link to="/profile/manage-team">
            <ArrowLeftSvg />
          </Link>
          <h2 className="section-title">Add a Team Member</h2>
        </div>
        <div className="mt-6 md:mt-8 lg:mt-12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[670px] mx-auto flex flex-col gap-[15px]"
          >
            {/* Avatar */}
            <label className="cursor-pointer border rounded-full border-light w-40 h-40 flex items-center justify-center relative mx-auto">
              <Controller
                name="avatar"
                control={form.control}
                render={({ field }) => (
                  <input
                    type="file"
                    className="hidden"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      field.onChange(file);
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setPreview(reader.result);
                      };
                      reader.readAsDataURL(file);
                    }}
                  />
                )}
              />
              <img
                src={preview}
                alt="icon"
                className="opacity-40 w-full h-full rounded-full absolute"
              />
              <img
                src={imageIcon}
                alt="icon"
                className="flex items-center justify-center"
              />
            </label>

            {/* Name */}
            <div className="flex items-center gap-2.5">
              {/* First Name */}
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                  First name
                </label>
                <input
                  className="input-field px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                  placeholder="First"
                  {...register("first_name", {
                    required: "First name is required",
                  })}
                />
                {errors?.firstName && (
                  <span className="text-red-500 mt-2">
                    {errors?.firstName.message}
                  </span>
                )}
              </div>
              {/* Last Name */}
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                  Last name
                </label>
                <input
                  className="input-field px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                  placeholder="Last"
                  {...register("last_name", {
                    required: "Last name is required",
                  })}
                />
                {errors?.lastName && (
                  <span className="text-red-500 mt-2">
                    {errors?.lastName.message}
                  </span>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Email
              </label>
              <input
                className="input-field px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="example@email.com"
                type="text"
                {...register("email", { required: "Email is required" })}
              />
              {errors?.email && (
                <span className="text-red-500 mt-2">
                  {errors?.email.message}
                </span>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Phone
              </label>
              <input
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                placeholder="0"
                // type="number"
                {...register("phone")}
              />
              {errors?.phone?.message && (
                <p className="text-red-500 mt-2">{errors?.phone?.message}</p>
              )}
            </div>

            {/* Contract Year Starts */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Contract Year Starts
              </label>

              <label className="flex items-center px-4 rounded-[10px] border border-[#d8dfeb] bg-dark w-full gap-2.5">
                <Controller
                  name="contract_year_start"
                  control={control}
                  render={({ field }) => (
                    <CustomDatePicker
                      value={field.value}
                      onChange={(date) => {
                        field.onChange(format(date, "yyyy-MM-dd"));
                      }}
                    />
                  )}
                />
                <CalenderSvg />
              </label>
              {errors?.date?.message && (
                <p className="text-red-500 mt-2">{errors?.date?.message}</p>
              )}
            </div>

            {/* Employment Agreement */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Employment Agreement
              </label>

              <label
                htmlFor="employement_agrement"
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full flex items-center justify-between cursor-pointer"
              >
                <span className="text-secondary text-sm leading-[21px] tracking-[-0.14px]">
                  {watch("employement_agrement")?.[0]?.name || "Choose File"}
                </span>
                <FileSvg />
                <input
                  id="employement_agrement"
                  type="file"
                  accept="image/* application/pdf"
                  className="hidden"
                  {...register("employement_agrement")}
                />
              </label>
              {errors?.employement_agrement?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.employement_agrement?.message}
                </p>
              )}
            </div>

            {/* Additional Files */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Additional Files
              </label>

              <label
                htmlFor="additional_file"
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full flex items-center justify-between cursor-pointer"
              >
                <span className="text-secondary text-sm leading-[21px] tracking-[-0.14px]">
                  {watch("additional_file")?.[0]?.name || "Choose File"}
                </span>
                <FileSvg />
                <input
                  id="additional_file"
                  type="file"
                  accept="image/* application/pdf"
                  className="hidden"
                  {...register("additional_file")}
                />
              </label>
              {errors?.additional_file?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.additional_file?.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Password
              </label>
              <div className="relative">
                <input
                  className="input-field pr-10 px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEye size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
                </button>
              </div>
              {errors?.password && (
                <span className="text-red-500 mt-2">
                  {errors?.password.message}
                </span>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  className="input-field pr-10 px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  {...register("password_confirmation", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <FaEye size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
                </button>
              </div>
              {errors?.password_confirmation && (
                <span className="text-red-500 mt-2">
                  {errors?.password_confirmation.message}
                </span>
              )}
            </div>

            {/* Role */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Role
              </label>
              <Controller
                name="role_id"
                control={control}
                render={({ field }) => {
                  return (
                    <Select
                      options={roleOptions}
                      value={roleOptions?.find(
                        (option) => option?.value == field?.value
                      )}
                      onChange={(option) => field.onChange(option?.value)}
                      isDisabled={isRoleLoading}
                      isLoading={isRoleLoading}
                      placeholder="Select Role"
                    />
                  );
                }}
              />
              {errors?.role_id && (
                <p className="text-red-500 text-xs">
                  {errors?.role_id?.message}
                </p>
              )}
            </div>

            <div className="flex items-center gap-4 justify-between mt-3">
              <input
                className="request-btn approve cursor-pointer"
                type="submit"
                value={isRegisterPending ? "Adding..." : "Add"}
                disabled={isRegisterPending}
              />
              <button
                type="button"
                onClick={() => reset()}
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

export default AddTeamMember;
