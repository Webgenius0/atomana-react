import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addressSchema } from '@/schema/profile-update.schema';

const label = {
  address: 'Home Address',
  email: 'Update Email',
  bio: 'About',
  phone: 'Update Phone Number',
  birthday: 'Update Birthday',
}



function Modal({ modal, onClose, profileInfo, editProfile, isPending }) {
  // Dynamic schema based on the field name
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      address: profileInfo?.address || '',
      email: profileInfo?.email || '',
      phone: profileInfo?.phone || '',
      date_of_birth: profileInfo?.date_of_birth || '',
      bio: profileInfo?.bio || '',
    },
  });
console.log(errors)
  // Handle form submission
  const onSubmit = (data) => {
    console.log('Form Data:', data);
    editProfile({ newAddress: data, field: modal });
  };

  return (
    <div className="fixed inset-0 sm:flex items-center justify-center z-20 bg-black bg-opacity-50 hidden">
      <div className="bg-dark rounded-2xl shadow-2xl w-[80%] max-w-2xl relative text-light">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition duration-300 mb-6"
        >
          <IoClose size={24} />
        </button>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 p-8">
          <div className="flex flex-col justify-center gap-3">
            <label htmlFor="address" className="text-start font-bold leading-5 text-base text-[#ffffffcc]">
              {label[modal] || 'Update  Field'}
            </label>
            <input
              type="text"
              id={modal}
              name={modal}
              className="px-4 py-3 outline-none bg-transparent border border-secondPrimary rounded text-sm font-medium leading-5 text-light"
              {...register(modal)}
            />
            {errors[modal] && (
              <p className="text-red-500 text-sm mt-1">{errors[modal]?.message}</p>
            )}
          </div>
          <button className="flex items-center sm:justify-end justify-center gap-4 sm:w-unset w-full">
            <input
              className="request-btn approve cursor-pointer bg-gray-300"
              type="submit"
              disabled={isPending}
              value={isPending ? "Updating..." : "Update"}
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;