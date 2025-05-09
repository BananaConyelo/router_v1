import profilePic from '../images/passport.png';
import { FaCode, FaReact, FaNodeJs, FaPython, FaHiking, FaCss3} from 'react-icons/fa'; 

function About() {
  return (
    <div className="max-w-4xl mx-auto mt-20 p-10 bg-white rounded-lg shadow-lg"
      style={{
        animation: 'windowOpen 0.8s ease forwards',
        opacity: 0,
      }}
      onAnimationEnd={e => {
        e.currentTarget.style.opacity = 1; 
      }}>
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
      <div className="flex items-center mb-8">
        <img src={profilePic} alt="Jessie Mompero" className="w-32 h-32 shadow-lg mr-6 transform transition-transform hover:scale-105" />
        <h1 className="text-4xl font-bold text-gray-900 animate-bounce">About Me</h1>
      </div>
      <p className="mb-6 text-lg text-gray-700 leading-relaxed">
        Hello! Im Jessie O. Mompero Jr, a passionate web developer with a strong foundation in both frontend and backend technologies. My journey into the world of web development began with a fascination for creating interactive and user-friendly experiences. Over time, I have honed my skills in crafting visually appealing interfaces while also mastering the server-side logic that powers them.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Background</h2>
      <div className="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
        <p className="text-lg text-gray-700 leading-relaxed">
          My expertise includes Python, HTML, CSS, React, and node.js. I thrive in collaborative environments and continuously seek to improve my skills and contribute to impactful projects.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
      <ul className="list-disc list-inside mb-6 text-lg text-gray-700 " >
        <li className="flex items-center"><FaPython size={32} className="mr-2 text-indigo-600 animate-spin" /> <b>Python</b> - My past projects like the management system is created by Python.</li>
        <li className="flex items-center" ><FaCode size={32} className="mr-2 text-indigo-600 animate-pulse" /> <b>HTML</b>  - I already created so many project using HTML like my other Project Website and Portfolio.</li>
        <li className="flex items-center"><FaCss3 size={32} className="mr-2 text-indigo-600 animate-ping" /> <b>CSS</b>  - This is what I use to design my projects but I am currently mastering Tailwind CSS.</li>
        <li className="flex items-center "><FaReact size={32} className="mr-2 text-indigo-600 animate-spin" /> <b>React</b>  - This is what I am already using for my Website because it is easier.</li>
        <li className="flex items-center"><FaNodeJs size={32} className="mr-2 text-indigo-600 animate-bounce" /> <b>Node.js</b>  - Been learning about this and trying to explore a lot of things.</li>
        
        
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Interests</h2>
      <div className="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
        <p className="flex items-center text-lg text-gray-700 leading-relaxed">
          <FaHiking size={32} className="mr-2 text-indigo-600 animate-bounce" /> Hiking, gaming, and volunteering at charity events for my KofC org..
        </p>
      </div>

      <p className="text-lg text-gray-700 leading-relaxed">
        Feel free to <a href="/contact" className="text-indigo-600 hover:underline">reach out</a> if you'd like to connect or collaborate!
      </p>
    </div>
  );
}

export default About;
