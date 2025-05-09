const projects = [
  {
    id: 1,
    title: 'Record Management System',
    description: 'A guild management system which can execute the CRUD method.',
    link: 'https://drive.google.com/file/d/1F_HKFlPbMRsNJSd_uI2CvcdGOaU5G49x/view'
  },
  {
    id: 2,
    title: 'Kamalig Food House',
    description: 'A commercial website for a small busines eatery.',
    link: 'https://bananaconyelo.github.io/pelec_project/?fbclid=IwZXh0bgNhZW0CMTAAAR14zfFAlIHHXW0ag9JznUzNFNrN1Qf391WK28QILNdlxcBkSb5PFvhNt-s_aem_LnCU9HMl-xn2ZeAHFSutLA'
  },
  {
    id: 3,
    title: 'Book Finder',
    description: 'The book you`ve been searching for might be here..',
    link: 'https://serene-brioche-735f67.netlify.app/'
  },
  {
    id: 4,
    title: 'Management System Using REDUX',
    description: 'A management system that uses API with add and delete function',
    link: 'https://reduxstate.netlify.app/?authuser=0'
  },
  {
    id: 5,
    title: 'Responsive Website',
    description: 'A responsive website using Media Query.',
    link: 'https://bananaconyelo.github.io/itps205_ass1/'
  },
  {
    id: 6,
    title: 'Responsive Website with Menu Bar',
    description: 'A responsive navbar & cards about myself, hobby, and my crush using Media Query.',
    link: 'https://bananaconyelo.github.io/itps205_ass2/#nav_logo'
  },
  {
    id: 7,
    title: 'My Portfolio',
    description: 'Another portfolio of mine.',
    link: 'https://rococo-lokum-c7d07d.netlify.app/'
  },
];

function Project() {
  return (
    <div className="max-w-5xl mx-auto mt-20 p-10 bg-gray-100 rounded-lg shadow-lg" 
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
      <h1 className="text-4xl font-bold mb-8 text-gray-900 animate-bounce">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map(({ id, title, description, link }) => (
          <div
            key={id}
            className="border border-gray-300 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            tabIndex="0"
          >
            <h2 className="text-2xl font-semibold mb-3">{title}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
