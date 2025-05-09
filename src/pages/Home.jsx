import { useState, useEffect } from 'react';
import profilePic from '../images/profile.jpg';

function Home() {
  const skills = ['Python', 'HTML', 'CSS', 'React', 'Nodejs', 'Tailwind CSS', 'CSS', 'REST APIs'];


  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto mt-20 p-8 bg-white rounded-lg shadow-lg items-center md:items-start space-y-10 md:space-y-0 md:space-x-16"
    style={{
        animation: 'windowOpen 0.8s ease forwards',
        opacity: 0,
      }}
      onAnimationEnd={e => {
        e.currentTarget.style.opacity = 1; 
      }}
    >
    <style>
        {`
        @keyframes windowOpen {
            0% {
            opacity: 0;
            transform: scale(0.8);
            }
            100% {
            opacity: 1;
            transform: scale(1);
            }
        }
        `}
    </style>
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg flex-shrink-0 animate-bounce" style={{ animationDuration: '2.5s' }}>
        <img
          src={profilePic}
          alt="Jessie Mompero Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-gray-900">
        <h1 className="text-5xl font-extrabold mb-4">Hi, I'm Jessie Mompero</h1>
        <p className="text-lg leading-relaxed mb-6 text-justify" >
        A passionate college student who will be a full-stack developer specializing in building fantastic web applications with modern technologies. I love turning ideas into reality on the web.
        </p>
        <div className="text-xl font-semibold mb-4">
          Current focus: <span className="text-indigo-600 animate-pulse">{skills[currentSkill]}</span>
        </div>
        <p className="text-gray-700 max-w-lg mb-6">
          When I’m not coding, you can find experimenting a lot of animation like this jumping image of mine.
        </p>


        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Featured Projects</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><a href="https://drive.google.com/file/d/1F_HKFlPbMRsNJSd_uI2CvcdGOaU5G49x/view" target='blank' className="text-indigo-600 hover:underline">Record Management System</a> - A guild management system which can execute the CRUD method</li>
            <li><a href="https://bananaconyelo.github.io/pelec_project/?fbclid=IwZXh0bgNhZW0CMTAAAR14zfFAlIHHXW0ag9JznUzNFNrN1Qf391WK28QILNdlxcBkSb5PFvhNt-s_aem_LnCU9HMl-xn2ZeAHFSutLA" target='blank' className="text-indigo-600 hover:underline">Kamalig Food House</a> - A commercial website for a small busines eatery</li>
            <li><a href="https://serene-brioche-735f67.netlify.app/" target='blank' className="text-indigo-600 hover:underline">Book Finder</a> - The book you've been searching for might be here.</li>
          </ul>
        </div>

        <div className="mt-4">
          <a href="/contact" 
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700  shadow-md hover:shadow-xl hover:scale-105 transform transition-transform duration-300 p-4">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

 
  

  
  