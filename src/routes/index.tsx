import { Hero } from '../components/sections/Hero';
import { WhatIDo } from '../components/sections/WhatIDo';
import { Experience } from '../components/sections/Experience';
import { Achievements } from '../components/sections/Achievements';
import { Projects } from '../components/sections/Projects';
import { Education } from '../components/sections/Education';
import { Contact } from '../components/sections/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <Experience />
      <Achievements />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}