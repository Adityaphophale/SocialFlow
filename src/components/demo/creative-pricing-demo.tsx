import { CreativePricing } from "@/components/ui/creative-pricing"
import type { PricingTier } from "@/components/ui/creative-pricing"
import { Calendar, Zap, Target } from "lucide-react";

const socialFlowTiers: PricingTier[] = [
    {
        name: "Starter",
        icon: <Calendar className="w-7 h-7" />,
        price: 0,
        description: "Perfect for new creators",
        color: "gray",
        features: [
            "3 social accounts",
            "10 posts per month",
            "Basic analytics",
            "Email support",
        ],
    },
    {
        name: "Pro",
        icon: <Zap className="w-7 h-7" />,
        price: 19,
        description: "For growing creators",
        color: "purple",
        features: [
            "10 social accounts",
            "Unlimited posts",
            "Advanced analytics",
            "AI-powered scheduling",
            "Priority support",
        ],
        popular: true,
    },
    {
        name: "Agency",
        icon: <Target className="w-7 h-7" />,
        price: 49,
        description: "For teams & agencies",
        color: "blue",
        features: [
            "Unlimited accounts",
            "Team collaboration",
            "White-label reports",
            "API access",
            "Dedicated support",
        ],
    },
];

export function CreativePricingDemo() {
    return (
        <div id="pricing" className="relative scroll-mt-20 overflow-hidden">
            {/* Aurora Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-purple-50/40 to-pink-50/60"></div>
                <div className="absolute inset-0 opacity-25">
                    <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-blue-300 to-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>
            </div>
            <div className="relative">
            <CreativePricing 
            tiers={socialFlowTiers}
            tag="Simple Pricing"
            title="Simple pricing for every creator"
            description="Start free and scale as you grow. All plans include a 14-day free trial."
            />
            </div>
        </div>
    )
}