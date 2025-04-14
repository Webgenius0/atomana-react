import FormTextEditor from '@/components/form/FormTextEditor';
import ArrowLeftSvg from '@/components/svgs/ArrowLeftSvg';
import PersonPlusSvg from '@/components/svgs/PersonPlusSvg';
import ThreeDotsSvg from '@/components/svgs/ThreeDotsSvg';
import { useEditNote, useGetSingleNote } from '@/hooks/docs.hook';
import { useEffect } from 'react';
import { FormProvider } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditNote() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { note } = useGetSingleNote(slug);
  console.log(note);
  const { mutate: editNote, isPending, form } = useEditNote(slug);

  const onSubmit = (data) => {
    editNote(data, {
      onSuccess: () => {
        navigate(`/my-systems/team/docs/shared-notes/${slug}`);
      },
    });
  };

  const handleResetForm = (e) => {
    e.preventDefault();
    form.reset();
    navigate(-1);
  };

  useEffect(() => {
    if (note) {
      form.reset(note);
    }
  }, [note]);

  return (
    <div className="px-5 py-[25px] overflow-y-auto scrollbar-none w-full">
      <div className="w-full max-w-[670px] mx-auto flex items-center gap-4 justify-between">
        <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit my-5 cursor-pointer">
          <div
            // to={`${
            //   location.state?.from ||
            //   `/my-systems/team/docs/shared-notes/edit-note/${slug}`
            // }`}
            onClick={() => navigate(-1)}
          >
            <ArrowLeftSvg />
          </div>
          <h2 className="section-title">Edit Note</h2>
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
                {...form.register('title')}
              />
              {form.formState?.errors?.title?.message && (
                <p className="text-base font-semibold text-red-500">
                  {form.formState?.errors?.title?.message}
                </p>
              )}
            </div>

            <FormTextEditor name="notes" label="Note" />

            <div className="flex sm:flex-row flex-col items-center gap-4 justify-between mt-4 md:mt-6">
              <div className="flex items-center sm:justify-start justify-center gap-4 sm:w-unset w-full">
                <input
                  className="request-btn approve cursor-pointer"
                  type="submit"
                  value={isPending ? 'Editing...' : 'Edit'}
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
