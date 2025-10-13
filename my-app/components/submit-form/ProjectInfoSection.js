import { sectionStyle, labelStyle, inputStyle, selectStyle, textareaStyle } from '../../lib/styles';

export default function ProjectInfoSection({ register, errors }) {
  return (
    <section className={sectionStyle}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-extrabold text-blue-900 drop-shadow-sm">۱. اطلاعات کلی پروژه</h3>
        <span className="text-sm text-blue-700 italic">پر کردن تمام فیلدهای ستاره‌دار ضروری است</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="project-name" className={labelStyle}>نام پروژه <span className="text-yellow-500">•</span></label>
          <input
            id="project-name"
            type="text"
            placeholder="مثال: مجتمع مسکونی مهرگان"
            className={inputStyle(errors.projectName)}
            {...register('projectName')}
          />
          {errors.projectName && <p className="text-red-500 text-sm mt-1">{errors.projectName.message}</p>}
        </div>

        <div>
          <label htmlFor="project-type" className={labelStyle}>نوع پروژه</label>
          <div className="relative">
            <select
              id="project-type"
              className={selectStyle(errors.projectType)}
              {...register('projectType')}
            >
              <option>مسکونی</option>
              <option>تجاری</option>
              <option>اداری</option>
              <option>صنعتی</option>
              <option>تفریحی/گردشگری</option>
              <option>پروژه زیرساختی</option>
              <option>بازسازی/نوسازی</option>
              <option>دیگر</option>
            </select>
            <svg className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" /></svg>
          </div>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="project-description" className={labelStyle}>توضیحات پروژه</label>
          <textarea
            id="project-description"
            rows={5}
            placeholder="لطفاً هدف، دامنه و انتظارات اولیه را شرح دهید..."
            className={textareaStyle(errors.projectDescription)}
            {...register('projectDescription')}
          ></textarea>
        </div>

        <div>
          <label htmlFor="project-area" className={labelStyle}>مساحت تقریبی (مترمربع)</label>
          <input
            id="project-area"
            dir="ltr"
            type="number"
            placeholder="مثال: 5000"
            className={`${inputStyle(errors.projectArea)} text-left`}
            {...register('projectArea')}
          />
          {errors.projectArea && <p className="text-red-500 text-sm mt-1">{errors.projectArea.message}</p>}
        </div>

        <div>
          <label htmlFor="project-location" className={labelStyle}>موقعیت پروژه</label>
          <input
            id="project-location"
            type="text"
            placeholder="مثال: تهران، منطقه ۱"
            className={inputStyle(errors.projectLocation)}
            {...register('projectLocation')}
          />
        </div>
      </div>
    </section>
  );
}
