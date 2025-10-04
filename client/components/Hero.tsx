"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section
			className="relative w-full h-screen pt-16 sm:pt-[4.5rem] md:pt-20 flex items-center justify-center overflow-hidden"
			id="hero"
			style={{ marginTop: 0 }}
		>
			{/* Background Video */}
			<video
				className="absolute inset-0 w-full h-full object-cover"
				autoPlay
				loop
				muted
				playsInline
				aria-hidden="true"
				preload="auto"
			>
				<source
					src="https://res.cloudinary.com/djetoiflq/video/upload/v1758960981/British_High_Commission_-_Nov_2024_ze5iou.mp4"
					type="video/mp4"
				/>
				Your browser does not support the video tag.
			</video>

			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-black/60" />

			{/* Content */}
			<div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				{/* Heading */}
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
				>
					We craft{" "}
					<span className="text-[hsl(var(--accent))]">unforgettable</span> moments
				</motion.h1>

				{/* Subheading */}
				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="mt-5 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
				>
					Premium events, theatrical entertainment and high-impact marketing — all under one roof.
				</motion.p>

				{/* Locations */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="mt-7 flex flex-col items-center gap-2 text-center"
				>
					<span className="uppercase tracking-[0.25em] text-gray-300 text-xs sm:text-sm font-semibold">
						Now offering services in
					</span>
					<div className="text-base sm:text-lg md:text-xl font-semibold text-white/95">
						USA <span className="mx-3 text-gray-400">—</span> Saudi Arabia <span className="mx-3 text-gray-400">—</span> Dubai
					</div>
				</motion.div>

				{/* CTAs */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					className="mt-10 mb-20 flex flex-col sm:flex-row gap-4 justify-center items-center"
				>
					<a
						href="#services"
						className="w-full sm:w-auto bg-[hsl(var(--accent))] text-white px-7 py-3.5 rounded-xl font-semibold text-base shadow-lg hover:bg-[hsl(var(--accent))]/90 hover:scale-105 transition-all duration-300"
					>
						Explore Services
					</a>
					<a
						href="#works"
						className="w-full sm:w-auto bg-[hsl(var(--muted-gray))] text-white px-7 py-3.5 rounded-xl font-semibold text-base shadow-lg hover:bg-[hsl(var(--muted-gray))]/85 transition-all duration-300"
					>
						Our Works
					</a>
				</motion.div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 1.2 }}
				className="absolute bottom-12 sm:bottom-8 md:bottom-6 left-1/2 transform -translate-x-1/2 z-10"
			>
				<div className="flex flex-col items-center gap-2">
					<span className="text-white/70 text-xs uppercase tracking-wider font-medium">
						Scroll to explore
					</span>
					<motion.div
						animate={{ y: [0, 8, 0] }}
						transition={{ duration: 1.5, repeat: Infinity }}
						className="w-5 h-9 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5"
					>
						<div className="w-1.5 h-1.5 bg-white/70 rounded-full" />
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
