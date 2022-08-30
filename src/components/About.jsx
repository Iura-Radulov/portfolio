import Contact from './Contact';
import Experience from './Experience';
import Work from './Work';

export default function About() {
  return (
    <div id="about">
      <h1 className="font-bold text-[28px]">About me</h1>
      <p className="text-[20px]">
        I am a Junior Front-End developer with specialization in JavaScript and
        React. I have been interested in programming since a long time and
        wanted to make something important and useful. That’s why I decided to
        learn one of the most famous programing language – JavaScript and its
        frameworks: React, Vue, Angular. A lot of practice and work for the
        result are important for me. Also I am focused on the company
        development and on the team communication.
      </p>

      <Experience title="Experience" dark={true} id="experience" />
      <Work title="Work" dark={true} id="work" />
      <Contact title="Contact" dark={true} id="contact" />
    </div>
  );
}
