"use client";
import React from "react";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Arjun Mehta",
      role: "Parent of U-12 Student",
      quote:
        "The coaching here is exceptional! My son has improved not just in chess, but in confidence and concentration as well.",
      rating: 5,
      image: "/avatar1.jpg",
      borderColor: "border-b-[6px] border-[#E11D48]",
      arrowColor: "border-t-[#E11D48]",
      roleColor: "text-[#E11D48]",
    },
    {
      name: "Vihaan Kapoor",
      role: "U-14 State Champion",
      quote:
        "I've learned strategies that helped me win my first national tournament. Grateful to my coach for believing in me!",
      rating: 5,
      image: "/avatar2.png",
      borderColor: "border-b-[6px] border-[#0B4398]",
      arrowColor: "border-t-[#0B4398]",
      roleColor: "text-[#0B4398]",
    },
    {
      name: "Rahul Sharma",
      role: "Parent of U-16 Student",
      quote:
        "Professional approach, personal attention and regular tournaments — the perfect place for any chess enthusiast.",
      rating: 5,
      image: "/avatar3.jpeg",
      borderColor: "border-b-[6px] border-[#E11D48]",
      arrowColor: "border-t-[#E11D48]",
      roleColor: "text-[#E11D48]",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white via-slate-50/50 to-white text-slate-900 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-rose-50/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
          <span className="text-[#E11D48] text-xs font-black uppercase tracking-widest px-4 py-1.5 bg-rose-50 rounded-full border border-rose-100 inline-block">
            Student & Parent Reviews
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Voices of Our <span className="bg-gradient-to-r from-[#0B4398] to-[#E11D48] bg-clip-text text-transparent italic font-serif">Chess Family</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light max-w-2xl mx-auto">
            Real stories from real students and parents who are part of our journey of growth, learning and success.
          </p>
        </div>

        {/* Section Body Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-stretch">
          
          {/* Left Column - Quote / Slogan & Chess King Image */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-8 text-center lg:text-left items-center lg:items-start border-r border-slate-100 pr-0 lg:pr-8">
            <div className="space-y-4 flex flex-col items-center lg:items-start">
              <span className="text-[#E11D48] text-7xl font-serif font-black leading-none select-none">“</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight tracking-tight max-w-xs">
                More than a game, it's a transformation <span className="text-[#0B4398]">we build together.</span>
              </h3>
              <div className="w-14 h-1.5 bg-[#E11D48] rounded-full mt-2" />
            </div>

            {/* Chess Review Side Graphic with mix-blend-multiply to blend background */}
            <div className="relative max-w-[160px] sm:max-w-[200px] select-none hover:scale-105 transition-transform duration-300 mt-auto pt-6">
              <img
                src="/chess-review-side.png"
                alt="Chess King Graphic"
                className="w-full h-auto object-contain mix-blend-multiply"
              />
            </div>
          </div>

          {/* Right Column - Horizontal Row of Testimonial Cards */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-[2rem] p-8 shadow-[0_15px_35px_rgba(11,67,152,0.03)] hover:shadow-[0_25px_50px_rgba(11,67,152,0.08)] border border-slate-100/80 hover:border-slate-200 transition-all duration-300 flex flex-col justify-between relative ${t.borderColor} group h-full min-h-[400px] md:min-h-[440px]`}
              >
                {/* Arrowhead point shape at bottom center of the card */}
                <div className={`absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] ${t.arrowColor} z-20`} />

                <div className="space-y-6">
                  {/* Card Header (Quote symbol & Stars) */}
                  <div className="flex items-center justify-between">
                    <span className="text-5xl font-serif font-black text-[#E11D48] leading-none select-none">“</span>
                    
                    {/* Stars Rating */}
                    <div className="flex items-center gap-1 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
                      <div className="flex items-center text-amber-500 text-[11px] gap-0.5">
                        {"★".repeat(t.rating)}
                      </div>
                      <span className="text-[10px] font-black text-slate-500 ml-1">5.0</span>
                    </div>
                  </div>

                  {/* Testimonial Quote - Larger, higher contrast text */}
                  <p className="text-slate-800 text-base md:text-[16px] lg:text-[17px] font-semibold leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                {/* Card Footer (Student/Parent Profile details) */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100 bg-slate-50 shadow-inner shrink-0">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className="font-extrabold text-slate-900 text-base leading-snug group-hover:text-[#0B4398] transition-colors truncate">
                      {t.name}
                    </span>
                    <span className={`text-[10px] font-black uppercase tracking-wider mt-0.5 ${t.roleColor} truncate`}>
                      {t.role}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;