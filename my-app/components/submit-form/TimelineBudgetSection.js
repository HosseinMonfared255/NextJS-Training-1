import { sectionStyle, labelStyle, selectStyle } from '../../lib/styles';

export default function TimelineBudgetSection({ register, errors }) {
  return (
    <section className={sectionStyle}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-extrabold text-blue-900 drop-shadow-sm">۲ — زمانبندی و بودجه</h3>
        <span className="text-sm text-blue-700 italic">اطمینان حاصل کنید محدوده بودجه را تا حد امکان دقیق وارد کنید</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="timeline" className={labelStyle}>بازه زمانی مورد نیاز</label>
          <select
            id="timeline"
            className={selectStyle(errors.timeline)}
            {...register('timeline')}
          >
            <option>فوری (کمتر از 3 ماه)</option>
            <option>کوتاه مدت (3 تا 6 ماه)</option>
            <option>میان مدت (6 تا 12 ماه)</option>
            <option>بلند مدت (بیش از 1 سال)</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className={labelStyle}>محدوده بودجه (تومان)</label>
          <select
            id="budget"
            className={selectStyle(errors.budget)}
            {...register('budget')}
          >
            <option>کمتر از ۱ میلیارد</option>
            <option>۱ تا ۵ میلیارد</option>
            <option>۵ تا ۱۰ میلیارد</option>
            <option>۱۰ تا ۵۰ میلیارد</option>
            <option>بیش از ۵۰ میلیارد</option>
          </select>
        </div>
      </div>
    </section>
  );
}
