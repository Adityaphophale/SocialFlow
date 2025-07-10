"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { Play, Check, Zap, Instagram, Twitter, Facebook, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { Component as InteractiveButton } from "@/components/ui/button-8";

export function HeroSection() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-8 items-center justify-center px-4 text-center max-w-6xl mx-auto min-h-screen pt-20"
      >
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-sm font-medium text-purple-800 border border-white/30 shadow-lg mt-8"
        >
          <Zap className="h-4 w-4 mr-2" />
          Trusted by 100,000+ content creators worldwide
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold dark:text-white text-gray-900 leading-tight">
            Schedule & Auto-Post to{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              All Platforms
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Save 10+ hours per week with our AI-powered social media scheduler. Create once, 
            post everywhere, and watch your audience grow across all platforms.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8"
        >
          <InteractiveButton />
          <Button variant="outline" className="px-10 py-4 text-lg font-semibold rounded-xl border-2 border-gray-300/50 hover:border-purple-600 hover:text-purple-600 transition-all duration-200 flex items-center gap-2 backdrop-blur-sm bg-white/50">
            <Play className="h-5 w-5" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 text-sm text-gray-600 dark:text-gray-400"
        >
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span className="font-medium">Free 14-day trial</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span className="font-medium">No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span className="font-medium">Cancel anytime</span>
          </div>
        </motion.div>

        {/* Social Platform Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex items-center justify-center gap-6 mt-16"
        >
          <div className="p-4 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <Instagram className="h-7 w-7 text-pink-600" />
          </div>
          <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <Twitter className="h-7 w-7 text-blue-600" />
          </div>
          <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <Facebook className="h-7 w-7 text-blue-700" />
          </div>
          <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <Linkedin className="h-7 w-7 text-blue-800" />
          </div>
          <div className="p-4 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <Youtube className="h-7 w-7 text-red-600" />
          </div>
        </motion.div>
      </motion.div>
    </AuroraBackground>
  );
}