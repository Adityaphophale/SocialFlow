"use client";

import { motion } from "framer-motion";
import React from "react";
import { Star, Zap } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9c5e8e1?w=64&h=64&fit=crop&crop=center&auto=format",
      content: "SocialFlow has completely transformed how I manage my social media. I used to spend hours every day posting across platforms. Now I schedule everything in 30 minutes and my engagement has increased by 300%!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Digital Marketing Agency",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=center&auto=format",
      content: "The analytics dashboard is incredible! I can see exactly which posts perform best and when my audience is most active. My client results have improved dramatically since switching to SocialFlow.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Influencer & Brand Partner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=center&auto=format",
      content: "As someone managing multiple brand partnerships, SocialFlow's bulk scheduling feature is a lifesaver. I can plan entire campaigns weeks in advance and never miss a deadline.",
      rating: 5
    }
  ];

  const stats = [
    { value: "100K+", label: "Active Users", color: "text-purple-600" },
    { value: "50M+", label: "Posts Scheduled", color: "text-pink-600" },
    { value: "99.9%", label: "Uptime", color: "text-blue-600" },
    { value: "4.9/5", label: "User Rating", color: "text-green-600" }
  ];

  return (
    <section id="reviews" className="relative py-24 scroll-mt-20 overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-purple-50/30 to-pink-50/40"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-l from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-0 left-1/2 w-[300px] h-[300px] bg-gradient-to-b from-pink-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
            Loved by creators worldwide
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Join thousands of{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              successful creators
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how content creators, agencies, and influencers are transforming their social media strategy with SocialFlow
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full mr-4 border-2 border-gray-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
                className="space-y-3"
              >
                <div className={`text-4xl md:text-5xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}