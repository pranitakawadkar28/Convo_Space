import React from "react";
import { MessageCircle, Video, Shield } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

const Auth = () => {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 flex flex-col items-center justify-center px-4 sm:px-10 md:px-16 lg:px-20 py-12 relative overflow-hidden">
      {/* Logo */}
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <h1 className="bg-gradient-to-r from-[#004743] to-[#009688] text-transparent text-xl sm:text-3xl font-extrabold bg-clip-text uppercase">
          Convospace
        </h1>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center relative z-10 top-5">
       <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#004743] leading-tight mb-6 
    animate-fadeInUp">
  Where Teams Work Smarter
</h1>


        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-10 animate-fadeIn delay-300">
          Connect with your team instantly through secure, real-time messaging.
          Experience seamless collaboration with powerful features designed for
          modern teams — all in one place.
        </p>

        {/* CTA Buttons */}
        <SignInButton mode="modal">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#004743] to-[#009688] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 flex items-center gap-2">
            Get Started →
          </button>
        </div>
        </SignInButton>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-6 relative z-10">
        {/* Card 1 */}
        <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#004743] to-[#009688] text-white shadow-sm">
              <MessageCircle className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Real-time Messaging</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Communicate instantly with your team and keep the workflow smooth.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#004743] to-[#009688] text-white shadow-sm">
              <Video className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">HD Video Calls</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Collaborate face-to-face with seamless video meetings & screen share.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#00695c] to-[#26a69a] text-white shadow-sm">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Enterprise Security</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                End-to-end encryption keeps your conversations private & safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
