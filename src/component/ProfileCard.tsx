"use client";
import Image from "next/image";
import { FaGlobe, FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { useEffect, useState } from "react";

const links = [
  {
    icon: <FaGlobe className="text-lg" />,
    label: "Work",
    href: "https://my-case-studies-lake.vercel.app/",
  },
  {
    icon: <FaXTwitter className="text-lg" />,
    label: "X / Twitter",
    href: "https://x.com/aman_kkumar",
  },
  {
    icon: <FaGithub className="text-lg" />,
    label: "GitHub",
    href: "https://github.com/amandeve12",
  },
  {
    icon: <FaLinkedin className="text-lg" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aman-kkumar/",
  },
];

export default function ProfileCard() {
  const [showCard, setShowCard] = useState(false);
  const [showLinks, setShowLinks] = useState(Array(links.length).fill(false));

  useEffect(() => {
    const cardTimeout = setTimeout(() => setShowCard(true), 300);
    const timeouts: NodeJS.Timeout[] = [];

    links.forEach((_, i) => {
      timeouts.push(
        setTimeout(() => {
          setShowLinks((prev) => {
            const updated = [...prev];
            updated[i] = true;
            return updated;
          });
        }, 1300 + i * 400)
      );
    });

    return () => {
      clearTimeout(cardTimeout);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f4ff] via-[#f8fafc] to-[#e8f0fe] px-2">
      <div
        className={`w-full max-w-md bg-white/90 border border-gray-200 rounded-2xl shadow-xl p-4 flex flex-col items-center transition-all duration-[1600ms] ${
          showCard
            ? "opacity-100 translate-y-0 blur-0"
            : "opacity-0 translate-y-10 blur-sm"
        }`}
        style={{ transitionProperty: "opacity, transform, filter" }}
      >
        {/* Profile Image */}
        <div className="relative mb-3">
          <div className="absolute inset-0 rounded-full ring-4 ring-sky-200/60 animate-pulse-slow" />
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={90}
            height={90}
            className="rounded-full border-4 border-white shadow-md object-cover relative z-10"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight drop-shadow-sm mb-1">
          Aman Kumar
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-center mt-3 text-xs leading-relaxed max-w-xs">
          I work in React, Next.js, and Node.js. I'm also exploring{" "}
          <b>DevOps</b>, <b>Framer</b>..
        </p>

        {/* Links */}
        <div className="mt-6 w-full flex flex-col gap-3">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 bg-gray-100 hover:bg-white rounded-xl px-3 py-2 text-gray-900 font-medium shadow group focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-[1200ms] ${
                showLinks[i]
                  ? "opacity-100 translate-y-0 scale-100 animate-bounce-in"
                  : "opacity-0 translate-y-6 scale-90"
              } hover:scale-[1.03] hover:shadow-md`}
              style={{ transitionProperty: "opacity, transform, box-shadow" }}
            >
              <span
                className={`flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-200 group-hover:bg-sky-50 transition-colors duration-300 ${
                  showLinks[i] ? "animate-icon-in" : "opacity-0"
                } group-hover:animate-icon-pulse`}
              >
                {link.icon}
              </span>
              <span className="text-sm">{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: translateY(24px) scale(0.9);
          }
          60% {
            opacity: 1;
            transform: translateY(-8px) scale(1.05);
          }
          80% {
            transform: translateY(2px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-bounce-in {
          animation: bounce-in 1.1s cubic-bezier(0.22, 1.02, 0.36, 0.99);
        }

        @keyframes icon-in {
          0% {
            opacity: 0;
            transform: rotate(-45deg) scale(0.7);
          }
          60% {
            opacity: 1;
            transform: rotate(8deg) scale(1.15);
          }
          80% {
            transform: rotate(-2deg) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }
        .animate-icon-in {
          animation: icon-in 1s cubic-bezier(0.22, 1.02, 0.36, 0.99);
        }

        @keyframes icon-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }
        .group-hover\\:animate-icon-pulse:hover {
          animation: icon-pulse 0.6s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
