import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/css/styles.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import DevProjects from './components/DevProjects';
import DesignProjects from './components/DesignProjects';
import vidbg from './components/img/bgvid01.mp4';
import { Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

function App() {
  useEffect(() => {
    const repositoryName = "portfolio";
    const repositoryOwner = "vvc10";

    fetch(`https://api.github.com/repos/${repositoryOwner}/${repositoryName}/commits`)
      .then((response) => response.json())
      .then((data) => {
        const lastCommitDate = new Date(data[0].commit.committer.date);
        const element = document.getElementById("lastCommitDate");
        if (element) {
          element.innerHTML = `Last push on ${lastCommitDate.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}`;
        }
      })
      .catch((error) => console.error("Error fetching commit data:", error));
  }, []);

  return (
    <Router>
      <div className="absolute top-0 w-full h-full">
        {/* Background Video */}
        <div className="fixed top-0 left-0 w-full h-[100vh] -z-10 overflow-hidden">
          <video autoPlay muted loop className="w-full h-full object-cover opacity-[15%]">
            <source src={vidbg} type="video/mp4" />
          </video>
        </div>

        {/* Canvas for Stars effect */}
        <div className="fixed top-0 left-0 w-full h-[100vh] z-0 opacity-[60%]">
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
            <RevolvingStars />
          </Canvas>
        </div>

        {/* Main content with dark grey background */}
        <div className='bg-transparent h-[100vh] z-[10000000] relative'>
          <div className='w-[100%] bg-transparent text-center py-[5px] text-[gray] text-[10px] italic' id='lastCommitDate'></div>

          <div className="md:flex flex-col md:flex-row w-full h-full bg-transparent pl-[0%] md:pl-[5%]">
            <Sidebar />
            <main className="w-[100%] h-[100%]  pb-[90px] md:pb-[50px] z-[9999] relative">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<DevProjects />} />
                <Route path="/designprojects" element={<DesignProjects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>

    
  );
}

// Component for revolving stars
const RevolvingStars = () => {
  const groupRef = useRef();

  // Rotating the stars around the center for a moving effect
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;  // Controls speed of rotation
    }
  });

  return (
    <group ref={groupRef}>
      <Stars
        radius={100}  // You can adjust the radius for how far the stars are
        depth={50}     // Depth of the stars (how far in the scene)
        count={5000}   // Number of stars
        factor={4}     // Density of stars
        saturation={0} // Color saturation (use 0 for white)
        fade           // Make the stars fade as they move away from the center
      />
    </group>
  );
};
 

 

export default App;
