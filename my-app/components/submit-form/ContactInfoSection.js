import { sectionStyle, labelStyle, inputStyle } from '../../lib/styles';

export default function ContactInfoSection({ register, errors }) {
  return (
    <section className={sectionStyle}>
      <h3 className="text-xl font-extrabold mb-6 text-blue-900 drop-shadow-sm">۴ — اطلاعات تماس</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="full-name" className={labelStyle}>نام و نام خانوادگی / نام شرکت</label>
          <input
            id="full-name"
            type="text"
            placeholder="نام شما / نام شرکت"
            className={inputStyle(errors.fullName)}
            {...register('fullName')}
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelStyle}>شماره تماس</label>
          <input
            id="phone"
            dir="ltr"
            type="tel"
            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
            className={`${inputStyle(errors.phone)} text-left`}
            {...register('phone')}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="email" className={labelStyle}>ایمیل (اختیاری)</label>
          <input
            id="email"
            dir="ltr"
            type="email"
            placeholder="you@example.com"
            className={`${inputStyle(errors.email)} text-left`}
            {...register('email')}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>
    </section>
  );
}
