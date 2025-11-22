import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 flex flex-col">
      <div className="max-w-5xl mx-auto text-center flex-grow">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About WhizRobo</h1>

        <p className="text-gray-600 text-lg mb-6">
          <span className="font-semibold text-gray-800">WHIZROBO Private Limited</span>, 
          established in 2016, is dedicated to introducing <span className="text-indigo-600 font-semibold">STEM education through robotics</span>, 
          empowering students across the globe to explore the world of technology.
        </p>

        <p className="text-gray-600 text-lg mb-6">
          Guided by the vision of its founder, <span className="font-semibold">Mrs. Dimple Verma</span>, 
          the organization strongly believes in the philosophy of <span className="italic">“Learning by Doing.”</span>
        </p>

        <p className="text-gray-600 text-lg mb-6">
          WHIZROBO offers a wide range of programs and resources, including top courses like 
          <span className="font-semibold"> Linux, WhizAdventurer, WhizExplorer, Minecraft, Pixlr, and Electronics</span>, 
          along with specialized Robotics and AI kits such as the <span className="font-semibold">STEM Kit, WhizAdventurer Kit, WhizGenie Kit</span>, 
          and other electronics modules.
        </p>

        <p className="text-gray-600 text-lg mb-6">
          Their services extend to labs, structured curriculum development, robotic kits, teacher training, 
          <span className="font-semibold"> WhizFlix (LMS), competitions, and workshops</span>.
        </p>

        <p className="text-gray-600 text-lg mb-6">
          WHIZROBO provides support through contact numbers <span className="font-semibold">+91-896-871-4000</span> and <span className="font-semibold">+91-946-421-4000</span>, 
          as well as emails <span className="font-semibold">info@whizrobo.com</span> and <span className="font-semibold">support@whizrobo.com</span>.
        </p>

        <p className="text-gray-600 text-lg mb-12">
          The company follows clear policies including <span className="underline">Privacy Policy</span> and <span className="underline">Terms & Conditions</span>, 
          and continues to inspire innovation while maintaining a strong digital presence.
        </p>

        {/* Highlights / Stats Section */}
        <div className="bg-white rounded-xl shadow-md py-12 px-6 mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-indigo-600 text-4xl font-extrabold mb-2">5000+</p>
              <p className="text-gray-600 font-semibold">Students Trained</p>
            </div>
            <div>
              <p className="text-indigo-600 text-4xl font-extrabold mb-2">50+</p>
              <p className="text-gray-600 font-semibold">Schools Partnered</p>
            </div>
            <div>
              <p className="text-indigo-600 text-4xl font-extrabold mb-2">200+</p>
              <p className="text-gray-600 font-semibold">Robotics Projects Completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500">
        Powered by <span className="font-semibold text-gray-700">WHIZROBO</span>
      </footer>
    </div>
  );
};

export default AboutUs;
