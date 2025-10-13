'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { projectSchema } from '../../lib/validationSchema';
import ProjectInfoSection from './ProjectInfoSection';
import TimelineBudgetSection from './TimelineBudgetSection';
import DocumentsSection from './DocumentsSection';
import ContactInfoSection from './ContactInfoSection';

export default function SubmissionForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(projectSchema),
    mode: 'onChange', // Real-time validation
  });

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log('Form submitted successfully:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      {/* Sections with 3D effect */}
      <ProjectInfoSection register={register} errors={errors} />
      <TimelineBudgetSection register={register} errors={errors} />
      <DocumentsSection register={register} errors={errors} />
      <ContactInfoSection register={register} errors={errors} />

      <div className="flex items-center justify-between gap-4">
        <label className="inline-flex items-center gap-4 text-blue-900 font-semibold">
          <input 
            id="terms-agreement" 
            type="checkbox" 
            className={`h-6 w-6 rounded-lg text-blue-700 focus:ring-yellow-400 ${errors.termsAgreement ? 'border-red-500' : ''}`}
            {...register('termsAgreement')}
          />
          <span>با تکمیل این فرم موافقم و اطلاعات ارائه شده صحیح است. <a className="text-yellow-600 hover:underline" href="#">شرایط و ضوابط</a></span>
        </label>
        {errors.termsAgreement && <p className="text-red-500 text-sm mt-1">{errors.termsAgreement.message}</p>}

        <button
          type="submit"
          className="ml-auto inline-flex items-center gap-4 bg-blue-900 text-white px-8 py-4 rounded-xl font-extrabold shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 active:scale-[0.95]"
        >
          ارسال و بررسی پروژه <span className="material-symbols-outlined">send</span>
        </button>
      </div>
    </form>
  );
}
