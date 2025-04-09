import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Controller, useFormContext } from 'react-hook-form';

const FormTextEditor = ({ name, label }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium leading-[21px] tracking-[-0.14px] text-light">
          {label}
        </label>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <ReactQuill
              {...field}
              className="h-[240px] pb-16 xl:h-[250px] xl:pb-10 text-white/80"
            />
          )}
        />
      </div>
      {errors?.[name]?.message && (
        <p className="text-base font-semibold text-red-500 -mt-2">
          {errors?.[name]?.message}
        </p>
      )}
    </div>
  );
};

export default FormTextEditor;
