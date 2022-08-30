import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
// import Contact from './Contact';
// import Experience from './Experience';
// import Work from './Work';
import Navigation from './Navigation';

export const App = () => {
  return (
    <>
      <Navigation />
      {/* <About title="About" dark={true} id="about" />
      <Experience title="Experience" dark={true} id="experience" />
      <Work title="Work" dark={true} id="work" />
      <Contact title="Contact" dark={true} id="contact" /> */}

      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" exact element={<About dark={true} />} />

          <Route path="*" element={<About />} />
        </Routes>
      </Suspense>
    </>
  );
};
