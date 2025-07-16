"use client";
import Image from "next/image";
import { FaGlobe, FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { useEffect, useState } from "react";

const links = [
  {
    icon: <FaGlobe className="text-xl" />, // Personal Website
    label: "Work",
    href: "https://my-case-studies-omega.vercel.app/",
  },
  {
    icon: <FaXTwitter className="text-xl" />, // X / Twitter
    label: "X / Twitter",
    href: "https://x.com/aman_kkumar",
  },
  {
    icon: <FaGithub className="text-xl" />, // GitHub
    label: "GitHub",
    href: "https://github.com/amandeve12",
  },
  {
    icon: <FaLinkedin className="text-xl" />, // LinkedIn
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aman-kkumar/",
  },
];

export default function ProfileCard() {
  const [showCard, setShowCard] = useState(false);
  const [showLinks, setShowLinks] = useState([false, false, false, false]);

  useEffect(() => {
    // Show card with a slower animation
    const cardTimeout = setTimeout(() => setShowCard(true), 300);
    // Show each link with a slower, staggered delay
    let timeouts: NodeJS.Timeout[] = [];
    links.forEach((_, i) => {
      timeouts.push(
        setTimeout(() => {
          setShowLinks((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, 1300 + i * 500)
      );
    });
    return () => {
      clearTimeout(cardTimeout);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f4ff] via-[#f8fafc] to-[#e8f0fe]">
      <div
        className={`w-full max-w-md bg-white/90 border border-gray-200 rounded-2xl shadow-2xl p-8 flex flex-col items-center transition-all duration-[1600ms] ${showCard ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-10 blur-sm"}`}
        style={{ transitionProperty: "opacity, transform, filter" }}
      >
        <div className="relative mb-2">
          <div className="absolute inset-0 rounded-full ring-4 ring-sky-200/60 animate-pulse-slow" />
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full border-4 border-white shadow-lg object-cover relative z-10"
            priority
          />
        </div>
        <div className="mt-4 flex items-center gap-2">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight drop-shadow-sm">Aman Kumar</h1>
        </div>
        <p className="text-gray-600 text-center mt-2 text-base max-w-xs leading-relaxed">
          I work in React, Nextjs, Nodejs. I also have a bit of knowledge of <b>DevOps</b>, and I'm currently exploring <b>Framer</b> and <b>React Native</b>.
        </p>
        <div className="mt-8 w-full flex flex-col gap-4">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 bg-gray-100/80 hover:bg-white transition-colors rounded-xl px-6 py-4 text-gray-900 font-semibold shadow group focus:outline-none focus:ring-2 focus:ring-sky-400 text-base transition-all duration-[1200ms] ${showLinks[i] ? "opacity-100 translate-y-0 scale-100 animate-bounce-in" : "opacity-0 translate-y-6 scale-90"} hover:scale-[1.04] hover:shadow-lg hover:ring-2 hover:ring-sky-200/60`}
              style={{ transitionProperty: "opacity, transform, box-shadow, filter" }}
            >
              <span className={`flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 group-hover:bg-sky-50 transition-colors shadow-sm transition-transform duration-300 ${showLinks[i] ? "animate-icon-in" : "opacity-0"} group-hover:animate-icon-pulse`}
                style={{ transitionProperty: "background, box-shadow, transform" }}
              >
                {/* Icon with animation */}
                <span className="inline-block">{link.icon}</span>
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes bounce-in {
          0% { opacity: 0; transform: translateY(24px) scale(0.9); }
          60% { opacity: 1; transform: translateY(-8px) scale(1.05); }
          80% { transform: translateY(2px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-bounce-in {
          animation: bounce-in 1.1s cubic-bezier(.22,1.02,.36,.99);
        }
        @keyframes icon-in {
          0% { opacity: 0; transform: rotate(-45deg) scale(0.7); }
          60% { opacity: 1; transform: rotate(8deg) scale(1.15); }
          80% { transform: rotate(-2deg) scale(0.98); }
          100% { opacity: 1; transform: rotate(0deg) scale(1); }
        }
        .animate-icon-in {
          animation: icon-in 1.1s cubic-bezier(.22,1.02,.36,.99);
        }
        @keyframes icon-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.18); }
        }
        .group-hover\:animate-icon-pulse:hover {
          animation: icon-pulse 0.7s cubic-bezier(.4,0,.2,1) infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2.5s infinite;
        }
      `}</style>
    </div>
  );
} 