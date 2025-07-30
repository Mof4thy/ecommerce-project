import React from "react";

const About = () => {
  return (
    <div className="font-sans bg-white">
      {/* --- الجزء الأول: الهيدر مع الصورة --- */}
      <div className="relative h-[400px] w-full">
        {/* الصورة الخلفية */}
        <img 
          src="/your-header-image.jpg" // استبدل بمسار صورتك
          alt="Bacola Header"
          className="w-full h-full object-cover absolute inset-0"
        />
        
        {/* طبقة تظليل */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* النص المركزي */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About <span className="text-orange-400">Bacola</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white">
            WE CAN DO MORE FOR YOU
          </p>
        </div>
      </div>

      {/* --- الجزء الثاني: المحتوى --- */}
      <div className="max-w-5xl px-6 py-16 ps-6">
        {/* الفقرة الأولى */}
        <div className="mb-3">
          <p className="text-gray-700 text-lg leading-8 mb-8">
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo laculis. 
            Donec augue diam, tristique et ultricies nec.In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo laculis. 
            Donec augue diam, tristique et ultricies nec.
          </p>
          
          {/* العنوان الجانبي */}
          <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-6 pl-8 ml-5 max-w-xl">
            Quisque erat urna, congue et libero in eleifend euismod velit.
          </h2>
          
          <p className="text-gray-700 text-lg leading-8 pl-8  ml-5">
            Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. 
            Ut id interdum turpis.Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. 
            Ut id interdum turpis.Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. 
            Ut id interdum turpis.
          </p>
        </div>
      </div>
     
      {/* --- الجزء الثالث: صورة المدير والمحتوى --- */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 items-start">
          {/* Image */}
          <div className="w-full h-full">
            <img
              src="https://via.placeholder.com/500x700" // بدّل اللينك بالصورة بتاعتك
              alt="CEO"
              className="w-100 h-130 object-cover rounded-lg shadow ml-20"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-sm text-gray-500">Rachel Leonard - Bacola CEO</p>
            <h2 className="text-2xl font-bold text-gray-900 leading-snug text-left">
              Duis convallis luctus pretium. <br />
              Pellentesque habitant morbi
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <p className="text-gray-600 leading-relaxed">
              In fermentum mi ut sapien semper, a sagittis lorem vulputate. Integer gravida, dui eget aliquet tempus
              In fermentum mi ut sapien semper, a sagittis lorem vulputate. Integer gravida, dui eget aliquet tempus......
              In fermentum mi ut sapien semper, a sagittis lorem vulputate. Integer gravida, dui eget aliquet tempus
              In fermentum mi ut sapien semper, a sagittis lorem vulputate. Integer gravida, dui eget aliquet tempus......
              In fermentum mi ut sapien semper, a sagittis lorem vulputate. Integer gravida, dui eget aliquet tempus...
              In fermentum mi ut sapien semper, a sagittis lorem vulputate. Integer gravida, dui eget aliquet tempus...
            </p>
          </div>
        </div>

        {/* --- الجزء الرابع: البلوك الأبيض المتداخل --- */}
        <div className="relative z-20">
          <div className="mt-[-60px] mx-auto bg-white p-6 rounded-lg shadow-lg text-gray-600 leading-relaxed text-sm max-w-5xl">
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis...
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
