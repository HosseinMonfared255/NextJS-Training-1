import Footer from "@/components/footer";
import Header from "@/components/header";
import { projects } from "@/components/lib/project-list";
import HeroBanner from "@/components/main-banner";
import ProjectSection from "@/components/projects-section";

// app/page.js
export default function Home() {
  return (
    <>
      <Header/>
      {/* Hero Banner */}
      <HeroBanner
        imageUrl="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
        imageAlt="بنر پروژه‌های ساختمانی"
        title="ساختن آینده، امروز"
        description="با بیش از ۱۵ سال سابقه درخشان، اجرای پروژه‌های باکیفیت و پایدار با تکیه بر تیم متخصص و تکنولوژی‌های روز."
        buttonText="ثبت پروژه جدید"
        buttonLink="/submit-new-pro"
      />

      {/* Intro Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
         ۱۵ سال سابقه داریم ما. پس چی فکر کردی؟! ما توی این مدت کلی پروژه ساختیم و تحویل دادیم. از خونه‌های کوچیک گرفته تا برج‌های بزرگ. تیم ما پر از آدمای باحال و حرفه‌ایه که عاشق کارشونن و همیشه دنبال بهترین راه‌حل‌ها هستن. ما به کیفیت و پایداری خیلی اهمیت میدیم و همیشه سعی میکنیم از تکنولوژی‌های جدید استفاده کنیم تا پروژه‌هامون بهتر و سریع‌تر انجام بشن. خلاصه که اگه دنبال یه تیم مطمئن برای ساخت پروژه‌ت هستی، ما اینجاییم!
        </p>
      </section>

      {/* Projects Section */}
        <ProjectSection selectedProject={projects} numberOfProjects={4} buttonLink="/" buttonText="نمایش بیشتر">پروژه های نمونه</ProjectSection>
      {/* Stats Section */}
      
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="text-4xl sm:text-[42px] font-black text-blue-600 mb-2">
              ۱۵۰+
            </div>
            <div className="text-base text-gray-600">پروژه موفق</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="text-4xl sm:text-[42px] font-black text-blue-600 mb-2">
              ۵۰+
            </div>
            <div className="text-base text-gray-600">متخصص</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="text-4xl sm:text-[42px] font-black text-blue-600 mb-2">
              ۱۵+
            </div>
            <div className="text-base text-gray-600">سال سابقه</div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
