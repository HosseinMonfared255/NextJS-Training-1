import { z } from 'zod';

const persianRegex = /^[\u0600-\u06FF\s]+$/;

export const projectSchema = z.object({
  projectName: z.string()
    .min(1, { message: "نام پروژه الزامی است" })
    .max(20, { message: "نام پروژه نباید از ۲۰ کاراکتر بیشتر باشد" })
    .regex(persianRegex, { message: "نام پروژه باید به فارسی باشد" }),
  projectType: z.string(),
  projectDescription: z.string()
    .max(200, { message: "توضیحات پروژه باید حداکثر ۲۰۰ کاراکتر باشد" })
    .optional(),
  projectArea: z.preprocess(
    (a) => {
      if (a === '' || a === null) return undefined;
      return parseInt(z.string().parse(a), 10)
    },
    z.number().positive({ message: "مساحت باید عدد مثبت باشد" }).optional()
  ),
  projectLocation: z.string()
    .max(30, { message: "موقعیت پروژه حداکثر در ۳۰ کاراکتر باشد" })
    .optional(),
  timeline: z.string(),
  budget: z.string(),
  fullName: z.string()
    .min(1, { message: "نام و نام خانوادگی الزامی است" })
    .regex(persianRegex, { message: "نام و نام خانوادگی / نام شرکت باید به فارسی باشد" }),
  phone: z.string().regex(/^09[0-9]{9}$/, { message: "شماره تماس معتبر نیست (مثال: 09123456789)" }),
  email: z.string().email({ message: "ایمیل معتبر نیست" }).optional().or(z.literal('')),
  termsAgreement: z.boolean().refine(val => val === true, {
    message: "شما باید با شرایط و ضوابط موافقت کنید",
  }),
  fileUpload: z.any().optional(),
});
