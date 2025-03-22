import React from 'react'
import Modal from '../shared/modal'

function AboutUpdate() {
    return (
    <Modal>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 p-8">
            <div className="flex flex-col justify-center gap-3">
                <label htmlFor="address" className="text-start font-bold leading-5 text-base text-[#ffffffcc]">
                    About Me
                </label>
                <input
                    type="text"
                    id={name}
                    name={name}
                    defaultValue={profileInfo?.address}
                    className="px-4 py-3 outline-none bg-transparent border border-secondPrimary rounded text-sm font-medium leading-5 text-light"
                    {...register(name)}
                />
                {errors.address && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
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
    </Modal>
    )
}

export default AboutUpdate