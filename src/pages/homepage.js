import dribbble from '../images/dribbble.png';
import Accordion from '../components/Accordion';

const HomePage = () => {
  return (
    <div className='w-full mt-14 md:ml-64'>
      <div className='px-3 py-4 sm:px-20 pt-44 w-100' 
        style={{
        backgroundImage: `url(${dribbble})`,
        backgroundSize: '50%',
      }}>
      <h1 className="text-4xl font-bold text-black w-fit sm:text-5xl px-8 pb-8 pt-6 bg-white w-auto">Generating Experiences: <br/> My Journey in React Development</h1>
      </div>
      <div className='px-6 py-8 sm:px-6'>
      <h1 className="text-2xl sm:text-4xl font-bold">My Proficiency in React: A Brief Overview</h1>
      <p className="mt-4 max-w-4xl">
      Welcome to my React-only portfolio! As a passionate React developer, I'm excited to showcase my skills and experience in this powerful JavaScript library. With my deep understanding of React's core concepts and extensive experience building complex applications, I'm confident in my ability to tackle any challenge thrown my way.
      </p>

      <p className="mt-4 max-w-4xl">
      Throughout my journey with React, I've learned to master the art of componentization, state management, and advanced rendering techniques. Whether it's building responsive user interfaces, designing efficient data models, or optimizing performance, I always strive to deliver clean, elegant, and maintainable code.
      </p>

      <p className="mt-4 max-w-4xl">
      This portfolio is a testament to my commitment to excellence in React development. is a showcase of my understanding of the fundamental concepts and how React works, as well as my experience and skills in building dynamic and interactive components that demonstrate my experience in creating responsive and user-friendly interfaces.
      So take a look around, explore my work, and get in touch if you're interested in working together!
      </p>
      
      </div>
      <a className='p-8 w-full block bg-slate-200 hover:bg-slate-300 text-right' href='#'>About me</a>
      <a className='p-8 w-full block bg-slate-300 hover:bg-slate-400 text-right' href='#'>Streamline</a>
      <Accordion title="Accordion 1" body="Body content for Accordion 1" />
      <Accordion title="Accordion 2" body="Body content for Accordion 2" />
      <Accordion title="Accordion 2" body="Body content for Accordion 2" />
    </div>
  );
};

export default HomePage;
