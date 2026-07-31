import HeroSection from "@/components/hero-section";
import WhyChooseUsSection from "@/components/why-choose";
import CoursesSection from "@/components/courses-section";
import CoachSection from "@/components/coach";
import TestimonialsSection from "@/components/testimonials-section";
import DemoBookingCTA from "@/components/demo-booking-cta";
import ChessFAQSection from "@/components/ui/chessfaq";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* 1. Premium Hero Banner */}
        <HeroSection />


        {/* 3. Academy Overview Section (Reference Layout) */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
            
            {/* TOP ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Card: Image Card */}
              <div className="lg:col-span-4 relative h-[250px] rounded-3xl overflow-hidden shadow-lg group">
                <img
                  src="/beginer.webp"
                  alt="Modern Knight Training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/65 flex flex-col justify-end p-6">
                  <h4 className="text-white text-xl font-black mb-1">How Does It Work?</h4>
                  <Link href="/courses" className="text-emerald-400 font-extrabold text-sm hover:underline flex items-center gap-1">
                    Learn More <span>➔</span>
                  </Link>
                </div>
              </div>

              {/* Right Card: 3-Column Dark Container */}
              <div className="lg:col-span-8 bg-[#0A1128] text-white rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center border border-slate-800 shadow-xl">
                {/* Col 1 */}
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400 text-xl font-bold">
                    🧩
                  </div>
                  <h4 className="text-base font-extrabold text-white">Tactical Drills</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Rigorous daily puzzle solving, calculation practice, and interactive mate-in-X patterns.
                  </p>
                </div>
                {/* Col 2 */}
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400 text-xl font-bold">
                    ⚔️
                  </div>
                  <h4 className="text-base font-extrabold text-white">Grandmaster Theory</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Deep dive into opening preparation, midgame transition themes, and theoretical endgames.
                  </p>
                </div>
                {/* Col 3 */}
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400 text-xl font-bold">
                    🏆
                  </div>
                  <h4 className="text-base font-extrabold text-white">Mental Game</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Championship mindset coaching, clock pressure training, and competitive tournament focus.
                  </p>
                </div>
              </div>
            </div>

            {/* BOTTOM ROW (Academy Heritage - Matches screenshot shape and styling exactly) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center pt-12">
              {/* Left Column: Heritage Copy */}
              <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
                <div className="inline-block">
                  <span className="text-[#E11D48] text-xs font-black uppercase tracking-widest px-4 py-2 bg-pink-50 rounded-full border border-pink-100">
                    🔸 ACADEMY HERITAGE
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-[1000] text-slate-900 leading-tight uppercase tracking-tighter">
                  ELEVATING <span className="text-[#0B4398] font-black">MINDS</span> <br />
                  THROUGH EVERY MOVE.
                </h2>

                <div className="space-y-5 text-slate-650 text-base md:text-lg leading-relaxed max-w-2xl font-medium">
                  <p>
                    At Modern Knight Chess Academy, we turn years of professional chess pedagogy into a transformative learning experience for Rajamahendravaram's bright young minds.
                  </p>
                  <p>
                    By blending international competitive standards with cognitive development theory, we help students build the foresight and resilience needed for life.
                  </p>
                </div>

                {/* Sub Features Strip (Horizontal Layout) */}
                <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#0B4398] font-black text-lg border border-blue-100 shrink-0">
                      🛡️
                    </div>
                    <span className="text-xs font-black text-slate-800 uppercase tracking-widest">
                      Elite FIDE Certified Coaching
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-[#E11D48] font-black text-lg border border-pink-100 shrink-0">
                      🏆
                    </div>
                    <span className="text-xs font-black text-slate-800 uppercase tracking-widest">
                      National Representative Training Hub
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Framed Image with organic shape and dashed offset outlines */}
              <div className="lg:col-span-5 relative flex justify-center lg:justify-end py-6">
                
                {/* Dashed outer outline (organic outline) */}
                <div 
                  className="absolute inset-0 border-2 border-dashed border-[#0B4398]/30 scale-[1.05] rotate-3 pointer-events-none" 
                  style={{ borderRadius: '60% 40% 60% 40% / 40% 60% 40% 60%' }} 
                />

                {/* Main Image Container in organic shape */}
                <div 
                  className="relative w-full max-w-[420px] aspect-square overflow-hidden shadow-2xl bg-slate-100 border-[6px] border-white z-10"
                  style={{ borderRadius: '60% 40% 60% 40% / 40% 60% 40% 60%' }}
                >
                  <img
                    src="/inter.jpg"
                    alt="Chess Match Classroom"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Excellence Badge */}
                <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 rounded-full shadow-2xl border border-slate-100 flex items-center gap-3 z-20">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md shrink-0">
                    🏆
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-black text-slate-900 leading-none">+8</span>
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest mt-1">
                      Years of Excellence
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 4. Why Choose Modern Knight Chess Academy */}
        <WhyChooseUsSection />

        {/* 5. Featured Courses */}
        <CoursesSection />

        {/* 6. Student Achievements Preview */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white text-slate-900 relative overflow-hidden">
          {/* Decorative background shapes */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-rose-50/40 rounded-full blur-3xl -z-10" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <span className="text-[#E11D48] text-xs font-black uppercase tracking-widest px-4 py-1.5 bg-rose-50 rounded-full border border-rose-100 inline-block">
                Hall Of Fame
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Student Achievements & <span className="bg-gradient-to-r from-[#0B4398] to-[#E11D48] bg-clip-text text-transparent italic font-serif">Milestones</span>
              </h2>
              <p className="text-slate-600 text-base md:text-lg font-light max-w-2xl mx-auto">
                Celebrating our brilliant young grandmasters in the making who crossed rating barriers and clinched national gold medals.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
              {[
                { 
                  name: "Viha Jain", 
                  level: "Elite", 
                  subtitle: "Outstanding Performance In",
                  heading: "Inter-School Chess",
                  desc: "Secured 2nd Place in Team Competition and 3rd Place Individually on the First Board.",
                  image: "/avatar1.jpg",
                  flagCode: "in",
                  country: "India",
                  gradient: "from-[#0B4398] via-[#0052CC] to-[#0B4398]",
                  pillText: "text-[#0B4398]"
                },
                { 
                  name: "Aamir Yassar", 
                  level: "Rated", 
                  subtitle: "Officially Achieved",
                  heading: "FIDE Rating",
                  desc: "Earned official international recognition and a global chess ranking from FIDE.",
                  image: "/avatar2.png",
                  flagCode: "in",
                  country: "India",
                  gradient: "from-[#E11D48] via-[#c2143b] to-[#E11D48]",
                  pillText: "text-[#E11D48]"
                },
                { 
                  name: "Aaryash", 
                  level: "Rising Star", 
                  subtitle: "Podium Finish At",
                  heading: "Seigle Cup 2026",
                  desc: "Demonstrated exceptional strategy to be crowned Runner-Up in this prestigious tournament.",
                  image: "/avatar3.jpeg",
                  flagCode: "us",
                  country: "USA",
                  gradient: "from-[#0B4398] via-[#0052CC] to-[#0B4398]",
                  pillText: "text-[#0B4398]"
                },
                { 
                  name: "Sanya Reddy", 
                  level: "Champion", 
                  subtitle: "Champion",
                  heading: "USA Open Chess",
                  desc: "Won first prize in the USA Open Chess Tournament in the under-14 category.",
                  image: "/avatar1.jpg",
                  flagCode: "us",
                  country: "USA",
                  gradient: "from-[#E11D48] via-[#c2143b] to-[#E11D48]",
                  pillText: "text-[#E11D48]"
                },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`relative bg-gradient-to-br ${item.gradient} rounded-[2rem] p-6 pt-20 pb-8 border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group`}
                >
                  {/* Overlapping student photo at the top-left */}
                  <div className="absolute -top-10 left-6 z-20">
                    <div className="relative w-24 h-24 rounded-[1.25rem] border-[4px] border-white bg-slate-100 shadow-md overflow-hidden rotate-2 group-hover:rotate-6 transition-transform duration-300">
                      {/* Floating Crown Badge */}
                      <div className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center text-[10px] text-white shadow-sm z-30 select-none">
                        👑
                      </div>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Name & Level in top-right corner */}
                  <div className="absolute top-5 right-6 text-right z-20">
                    <h3 className="text-white font-black uppercase text-sm sm:text-base tracking-tight leading-none">
                      {item.name}
                    </h3>
                    <span className="text-white/80 font-black uppercase text-[9px] tracking-widest mt-1 inline-block">
                      {item.level}
                    </span>
                  </div>

                  {/* Card Content Details */}
                  <div className="mt-4 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Highlight Stripe */}
                      <div className="w-10 h-1 bg-amber-500 mb-4 rounded-full" />
                      
                      {/* Subtitle */}
                      <span className="text-white/80 font-bold uppercase text-[9px] tracking-widest block mb-1">
                        {item.subtitle}
                      </span>
                      
                      {/* Main Achievement Header */}
                      <h4 className="text-xl font-black text-amber-300 tracking-tight leading-snug mb-3 uppercase">
                        {item.heading}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-white/90 text-xs sm:text-sm font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Pill Badge & Flag Flag Row */}
                    <div className="flex items-center justify-between mt-8 pt-5 border-t border-white/15">
                      {/* Verified Pill */}
                      <div className="bg-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 flex items-center justify-center text-[7px] text-white">★</span>
                        <span className={`font-black text-[9px] uppercase tracking-wider ${item.pillText}`}>
                          MODERN KNIGHT VERIFIED
                        </span>
                      </div>

                      {/* Flag Pill */}
                      <div className="bg-white px-2 py-1 h-7 rounded-lg shadow-sm flex items-center justify-center select-none overflow-hidden border border-slate-100">
                        <img 
                          src={`https://flagcdn.com/w40/${item.flagCode}.png`}
                          alt={item.country}
                          className="w-5.5 h-3.5 object-cover rounded-xs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link
                href="/achievements"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 border-2 border-slate-200 text-[#0B4398] font-extrabold text-sm rounded-xl shadow-xs hover:shadow-sm transition-all duration-200"
              >
                <span>View Full Wall of Fame & Certificates</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>


        {/* 8. Coaches Section */}
        <CoachSection />

        {/* 9. Testimonials */}
        <TestimonialsSection />

        {/* 10. Latest Blogs Preview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-[#0B4398] text-xs font-black uppercase tracking-widest px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
                Chess Insights & Tips
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
                Latest Articles & Educational Guides
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "5 Essential Endgame Patterns Every Young Player Must Master",
                  category: "Tactical Tips",
                  readTime: "4 min read",
                  date: "July 28, 2026",
                },
                {
                  title: "How to Prepare Against Higher Rated Opponents in Tournaments",
                  category: "Tournament Strategy",
                  readTime: "6 min read",
                  date: "July 20, 2026",
                },
                {
                  title: "Building Calculation Depth: The Candidate Move Method",
                  category: "Grandmaster Thinking",
                  readTime: "5 min read",
                  date: "July 12, 2026",
                },
              ].map((blog, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between hover:shadow-md transition-all">
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-[#E11D48] uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 hover:text-[#0B4398] transition-colors">
                      {blog.title}
                    </h3>
                    <div className="flex justify-between text-xs text-slate-500 pt-2">
                      <span>{blog.date}</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  <div className="pt-6">
                    <Link href="/blogs" className="text-xs font-bold text-[#0B4398] hover:underline">
                      Read Full Article →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Chess FAQ Section */}
        <ChessFAQSection />

        {/* 12. Call-to-Action Book Demo Section */}
        <DemoBookingCTA />
      </main>
    </div>
  );
}
