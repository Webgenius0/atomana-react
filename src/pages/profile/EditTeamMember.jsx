import profile from "@/assets/images/avatar-placeholder.gif";
import imageIcon from "@/assets/images/image-icon.svg";
import CustomDatePicker from "@/components/CustomDatePicker";
import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import CalenderSvg from "@/components/svgs/CalenderSvg";
import FileSvg from "@/components/svgs/FileSvg";
import Select from "@/components/ui/react-select";
import { useGetSingleAgent, useUpdateSingleAgent } from "@/hooks/agent.hook";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditTeamMember = () => {
  const [preview, setPreview] = useState(profile);
  const { slug } = useParams();
  const navigate = useNavigate();
  const { agent } = useGetSingleAgent(slug);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    mutate: editAgent,
    isPending: isAgentEditPending,
    form,
  } = useUpdateSingleAgent(slug);

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors, dirtyFields },
  } = form;

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

  useEffect(() => {
    if (agent) {
      setPreview(agent?.avatar);
      reset({
        ...agent,
        role_id: agent?.role_id || 3,
      });
    }
  }, [agent]);

  const onSubmit = (data) => {
    const updatedFields = {
      _method: "PUT",
    };

    for (const key in dirtyFields) {
      if (key === "aggrement") {
        updatedFields.aggrement = data.aggrement?.[0];
      } else if (key === "file") {
        updatedFields.file = data.file?.[0];
      } else {
        updatedFields[key] = data[key];
      }
    }

    console.log(data, "✅ Sending only updated fields:", updatedFields);

    editAgent(updatedFields);
  };
  // const onSubmit = (data) => {
  //   const _data = {
  //     ...data,
  //     _method: "PUT",
  //     aggrement: data?.aggrement?.[0],
  //     file: data?.file?.[0],
  //   };

  //   const updatedFields = {};
  //   for (const key in dirtyFields) {
  //     updatedFields[key] = data[key];
  //   }

  //   console.log("data", data);

  //   editAgent(_data);
  //   // navigate('/profile/member-profile');
  // };

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
            {/* Avatar */}
            <label className="cursor-pointer border rounded-full border-light w-40 h-40 flex items-center justify-center relative mx-auto">
              <Controller
                name="avatar"
                control={form.control}
                render={({ field }) => (
                  <>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
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
                  </>
                )}
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
                  {...register("first_name")}
                />
                {errors?.first_name && (
                  <span className="text-red-500 mt-2">
                    {errors?.first_name?.message}
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
                  {...register("last_name")}
                />
                {errors?.last_name && (
                  <span className="text-red-500 mt-2">
                    {errors?.last_name.message}
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
                {...register("email")}
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
              {errors?.contract_year_start?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.contract_year_start?.message}
                </p>
              )}
            </div>

            {/* Employment Agreement */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Employment Agreement
              </label>

              <label
                htmlFor="aggrement"
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full flex items-center justify-between cursor-pointer"
              >
                <span className="text-secondary text-sm leading-[21px] tracking-[-0.14px]">
                  {watch("employement_agrement")?.[0]?.name ||
                    watch("employement_agrement")?.substring(
                      watch("employement_agrement")?.lastIndexOf("/") + 1
                    ) ||
                    "Choose File"}
                </span>
                <FileSvg />
                <input
                  id="aggrement"
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  {...register("aggrement")}
                />
              </label>
              {errors?.aggrement?.message && (
                <p className="text-red-500 mt-2">
                  {errors?.aggrement?.message}
                </p>
              )}
            </div>

            {/* Additional Files */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
                Additional Files
              </label>

              <label
                htmlFor="file"
                className="px-4 py-3 rounded-[10px] border border-[#d8dfeb] bg-dark placeholder:text-secondary text-light text-sm leading-[21px] tracking-[-0.14px] w-full flex items-center justify-between cursor-pointer"
              >
                <span className="text-secondary text-sm leading-[21px] tracking-[-0.14px]">
                  {watch("additional_file")?.[0]?.name ||
                    watch("additional_file")?.substring(
                      watch("additional_file")?.lastIndexOf("/") + 1
                    ) ||
                    "Choose File"}
                </span>
                <FileSvg />
                <input
                  id="file"
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  {...register("file")}
                />
              </label>
              {errors?.file?.message && (
                <p className="text-red-500 mt-2">{errors?.file?.message}</p>
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
                  {...register("password")}
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
                    // required: "Confirm Password is required",
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

            <div className="flex items-center gap-4 justify-between sm:mt-2 md:mt-6">
              <input
                className="request-btn approve cursor-pointer"
                type="submit"
                value={isAgentEditPending ? "Saving..." : "Save Changes"}
              />

              <button
                type="button"
                onClick={() => navigate("/profile/manage-team")}
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
