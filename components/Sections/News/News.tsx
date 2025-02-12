import { Card } from "@/components/ui/card";
import React from "react";

function News() {
  return (
    <div className="w-full max-w-screen xl:max-w-[2000px] grid md:grid-cols-2 gap-4 py-20 mb-40 min-h-[800px] mt-20 px-8">
      {/* Testimonial Card */}
      <Card className="relative overflow-hidden border-zinc-800 p-8 flex flex-col justify-between backdrop-blur-sm h-full group cursor-pointer">
        <div className="absolute inset-0 bg-[url('/images/Frame64.png')] bg-cover bg-center bg-no-repeat transition-transform duration-500 scale-100 group-hover:scale-110"></div>
        <div className="relative z-10 space-y-2">
          <span className="text-white">Feb 5, 2025</span>
          <p className="text-white/90 text-2xl md:text-3xl font-medium leading-relaxed">
            Beyond the Numbers: Prototyping AI for Smarter Business Intelligence
          </p>
        </div>
        <div className="relative z-10 flex items-center gap-3 mt-8">
          <span className="text-white text-xl">Exciting Title</span>
        </div>
      </Card>

      {/* Social Proof Cards */}
      <div className="w-full grid md:grid-rows-2 gap-4 h-full">
        <Card className="relative overflow-hidden border-zinc-800 backdrop-blur-sm w-full h-full p-8 group cursor-pointer">
          <div className="absolute inset-0 bg-[url('https://images.ctfassets.net/kftzwdyauwt9/3gDBc446Nxn0ByyZMZdFVD/1e993b5470a4fc82279d2099ddef8321/Catcus_Heatmap_2.png?w=3840&q=90&fm=webp')] bg-cover bg-center bg-no-repeat transition-transform duration-500 scale-100 group-hover:scale-110"></div>
          <div className="relative z-10 space-y-2">
            <span className="text-white">Jan 31, 2025</span>
            <p className="text-white/90 text-2xl md:text-3xl font-medium leading-relaxed">
              Framer is on a super interesting run to create a singular web
              design workflow.
            </p>
          </div>
          <div className="relative z-10 flex items-center gap-3 mt-8">
            <span className="text-white text-xl">Exciting Title</span>
          </div>
        </Card>

        <Card className="relative overflow-hidden border-zinc-800 backdrop-blur-sm w-full h-full p-8 group cursor-pointer">
          <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/hand-draw-watercolor-stroke-texture_1035-19513.jpg?t=st=1738753985~exp=1738757585~hmac=53e798c0e1689df24e8cfc7bcb6aee7793d409880156601f64ba8373b232e127&w=1800')] bg-cover bg-center bg-no-repeat transition-transform duration-500 scale-100 group-hover:scale-110"></div>
          <div className="relative z-10 space-y-2">
            <span className="text-white">Jan 31, 2025</span>
            <p className="text-white/90 text-2xl md:text-3xl font-medium leading-relaxed">
              Framer is on a super interesting run to create a singular web
              design workflow.
            </p>
          </div>
          <div className="relative z-10 flex items-center gap-3 mt-8">
            <span className="text-white text-xl">Exciting Title</span>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default News;
