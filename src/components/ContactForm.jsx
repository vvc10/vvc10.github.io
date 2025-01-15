export default function ContactForm() {
    return (
      <div className="h-screen w-full bg-black text-white flex">
        {/* Left Panel - Form */}
        <div className="w-1/3 bg-[#1A1A1A] px-8 py-10 flex flex-col justify-between">
          <div>
            <h1 className="text-lg uppercase tracking-wider font-bold">
              Connect With Me
            </h1>
            <p className="text-sm text-gray-400 mt-2">
              Wanna chat? Or just share something cool?
            </p>
          </div>
          <div className="mt-10 space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="text-sm uppercase tracking-wide font-semibold"
              >
                How should I call you?
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#1F1F1F] text-white border border-[#E84A4A] mt-2 p-3 rounded focus:outline-none"
              />
            </div>
  
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="text-sm uppercase tracking-wide font-semibold"
              >
                Sending From
              </label>
              <input
                id="email"
                type="email"
                placeholder="your.name@example.com"
                className="w-full bg-[#1F1F1F] text-white border border-[#E84A4A] mt-2 p-3 rounded focus:outline-none"
              />
            </div>
  
            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="text-sm uppercase tracking-wide font-semibold"
              >
                Transmitted Data
              </label>
              <textarea
                id="message"
                placeholder="Hi, I write to you about ..."
                rows="5"
                className="w-full bg-[#1F1F1F] text-white border border-[#E84A4A] mt-2 p-3 rounded focus:outline-none"
              />
            </div>
          </div>
  
          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <button className="bg-[#E84A4A] w-1/2 py-3 rounded uppercase font-bold text-sm hover:bg-[#c73b3b]">
              Send Message [Enter]
            </button>
            <button className="border border-[#E84A4A] w-1/2 py-3 rounded uppercase font-bold text-sm hover:bg-[#1F1F1F]">
              Discard [Esc]
            </button>
          </div>
        </div>
  
        {/* Right Panel */}
        <div className="w-2/3 relative flex flex-col">
          {/* Whale Visual */}
          <div className="flex-grow bg-cover bg-center" style={{ backgroundImage: 'url(/whale-visual.png)' }}></div>
  
          {/* Sidebar */}
          <div className="absolute bottom-0 right-0 bg-black bg-opacity-80 text-[#E84A4A] p-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="uppercase text-sm">Sound Effects</span>
                <input
                  type="checkbox"
                  className="w-5 h-5 border border-[#E84A4A] bg-[#E84A4A]/20 checked:bg-[#E84A4A]"
                />
              </div>
              <div className="flex justify-between">
                <span className="uppercase text-sm">Music</span>
                <input
                  type="checkbox"
                  className="w-5 h-5 border border-[#E84A4A] bg-[#E84A4A]/20 checked:bg-[#E84A4A]"
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="uppercase text-sm">Visual Settings</span>
                <button className="text-[#E84A4A]">⚙️</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  