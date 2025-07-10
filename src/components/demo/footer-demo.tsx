import { Footer7 } from "@/components/ui/footer-7";

export function FooterDemo() {
  return (
    <div id="support" className="relative overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/95 to-gray-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-blue-500 to-indigo-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>
      <div className="relative">
      <Footer7 />
      </div>
    </div>
  );
}