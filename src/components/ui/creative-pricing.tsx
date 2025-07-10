import { Button } from "@/components/ui/button";
import { Check, Calendar, Zap, Target, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PricingTier {
    name: string;
    icon: React.ReactNode;
    price: number;
    description: string;
    features: string[];
    popular?: boolean;
    color: string;
}

function CreativePricing({
    tag = "Simple Pricing",
    title = "Simple pricing for every creator",
    description = "Start free and scale as you grow. All plans include a 14-day free trial.",
    tiers,
}: {
    tag?: string;
    title?: string;
    description?: string;
    tiers: PricingTier[];
}) {
    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <div className="text-center space-y-6 mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2 text-sm font-medium text-purple-800 mb-8">
                    <Sparkles className="h-4 w-4 mr-2" />
                    {tag}
                </div>
                <div className="relative">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        {title}
                    </h2>
                </div>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {tiers.map((tier, index) => (
                    <motion.div
                        key={tier.name}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.6, type: "spring" }}
                        className={cn(
                            "relative group",
                            "transition-all duration-300",
                            tier.popular && "border-2 border-yellow-400 bg-yellow-50 shadow-xl"
                        )}
                        whileHover={{ scale: 1.04, y: -8, boxShadow: "0 8px 32px rgba(80, 0, 120, 0.10)" }}
                    >
                        <div
                            className={cn(
                                "bg-white border rounded-2xl p-8 hover:shadow-2xl transition-shadow",
                                tier.popular 
                                    ? "border-purple-200 shadow-lg" 
                                    : "border-gray-200"
                            )}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold shadow">
                                        Most Popular
                                    </div>
                                </div>
                            )}
                            <div className="mb-8">
                                <div
                                    className={cn(
                                        "w-14 h-14 rounded-xl mb-6 flex items-center justify-center",
                                        tier.popular 
                                            ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white"
                                            : "bg-gray-100 text-gray-600"
                                    )}
                                >
                                    {tier.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {tier.name}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {tier.description}
                                </p>
                                <div className="mb-6">
                                    {tier.price === 0 ? (
                                        <div className="text-3xl font-bold text-gray-900">Free</div>
                                    ) : (
                                        <>
                                            <span className="text-3xl font-bold text-gray-900">
                                                ${tier.price}
                                            </span>
                                            <span className="text-lg text-gray-600 font-normal">
                                                /month
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center"
                                    >
                                        <Check className="h-5 w-5 text-green-500 mr-3" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Button
                                    className={cn(
                                        "w-full py-3 rounded-lg font-semibold text-lg transition-colors",
                                        tier.popular
                                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                                            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                    )}
                                >
                                    {tier.price === 0 ? "Get Started Free" : "Start Free Trial"}
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export { CreativePricing, type PricingTier }