"use client";

import { motion } from "framer-motion";
import React from "react";
import { Check, Calendar, Zap, BarChart3, Clock, Users, Shield } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered optimal posting times based on your audience's activity patterns. Schedule weeks of content in minutes.",
      color: "purple",
      benefits: [
        "AI-optimized posting times",
        "Bulk upload & scheduling",
        "Content calendar view",
        "Time zone optimization"
      ]
    },
    {
      icon: Zap,
      title: "Multi-Platform Posting",
      description: "Create once, post everywhere. Automatically adapt your content for each platform's unique format and audience.",
      color: "pink",
      benefits: [
        "Auto-format for each platform",
        "Cross-platform campaigns",
        "Unified content library",
        "Brand consistency tools"
      ]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track what matters with detailed insights into engagement, reach, and growth. Make data-driven decisions.",
      color: "blue",
      benefits: [
        "Real-time performance metrics",
        "Competitor analysis",
        "Growth tracking & reports",
        "ROI measurement"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Clock,
      title: "Save 10+ Hours Weekly",
      description: "Automate your entire social media workflow and focus on creating great content."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work seamlessly with your team using approval workflows and role-based permissions."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance and advanced data protection."
    }
  ];

  return (
    <section id="features" className="relative py-24 scroll-mt-20 overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-blue-50/50"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 text-sm font-medium text-purple-800 mb-8"
          >
            <Zap className="h-4 w-4 mr-2" />
            Everything you need to succeed
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Dominate social media with{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              powerful tools
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From content creation to analytics, SocialFlow provides all the tools content creators 
            need to grow their audience and engagement.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = {
              purple: {
                bg: "bg-purple-50",
                iconBg: "bg-purple-600",
                checkColor: "text-purple-600"
              },
              pink: {
                bg: "bg-pink-50",
                iconBg: "bg-pink-600",
                checkColor: "text-pink-600"
              },
              blue: {
                bg: "bg-blue-50",
                iconBg: "bg-blue-600",
                checkColor: "text-blue-600"
              }
            }[feature.color];

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                className={`${colorClasses.bg} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100`}
              >
                <div className={`${colorClasses.iconBg} rounded-2xl p-4 w-16 h-16 mb-6 flex items-center justify-center shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {feature.description}
                </p>
                <ul className="space-y-4">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-700">
                      <Check className={`h-5 w-5 ${colorClasses.checkColor} mr-3 flex-shrink-0`} />
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}