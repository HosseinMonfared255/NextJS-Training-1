import { sectionStyle } from '../../lib/styles';

export default function DocumentsSection({ register, errors }) {
  return (
    <section className={sectionStyle}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-extrabold text-blue-900 drop-shadow-sm">۳ — مستندات پشتیبان</h3>
        <span className="text-sm text-blue-700 italic">آپلود فایل تا 10MB</span>
      </div>

      <div className="border-4 border-dashed border-blue-700 rounded-xl p-8 flex flex-col md:flex-row items-center gap-6 hover:bg-blue-100 transition-shadow duration-300 shadow-md cursor-pointer">
        <div className="flex-1 text-center md:text-right">
          <p className="text-md text-blue-900 mb-4 leading-relaxed">نقشه‌ها، تصاویر یا گزارش‌ها را آپلود کنید یا آن‌ها را اینجا بکشید و رها کنید.</p>
          <label
            htmlFor="file-upload"
            className="inline-flex items-center gap-3 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white rounded-xl font-bold shadow transition cursor-pointer"
          >
            انتخاب فایل
            <input id="file-upload" name="file-upload" type="file" multiple className="sr-only" {...register('fileUpload')} />
          </label>
        </div>

        <div className="w-36 h-28 flex items-center justify-center bg-blue-50 rounded-xl shadow-inner">
          <svg className="w-14 h-14 text-blue-700" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <p className="mt-4 text-sm text-blue-800 font-semibold">فرمت‌های مجاز: JPG, PNG, PDF. حداکثر حجم: 10MB</p>
    </section>
  );
}
