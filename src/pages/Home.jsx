import AppBanner from '../components/shared/AppBanner';
import TechSlider from '../components/TechSlider';
import { techIcons } from '../data/sliders';
import ProjectCard from "./ProjectCard";
import About from "./AboutMe";
import Contact from "./Contact";
import {projects} from "../data/project";
import kk from "../images/divider.svg";
import WhatWeDo from "./WhatWeDo";

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner/>

			<TechSlider techIcons={techIcons}/>

			<div className='w-full'>
				<img src={kk} alt='dsdsd' className='w-full'/>
			</div>

			<div id="projects" className="projects">
				<div className="text-center">
					<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light"
					   style={{marginBottom: "7vh"}}>
						Projects portfolio
					</p>
				</div>
				{
					projects.map((project, index) =>
						<ProjectCard key={index} data={project} isLeftAligned={index % 2 === 0}/>
					)
				}
			</div>

			<div className='w-full'>
				<img src={kk} alt='dsdsd' className='w-full'/>
			</div>

			<div id="about" className="about">
				<div className="text-center">
					<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light"
					   style={{marginBottom: "7vh"}}>
						What we do...
					</p>
				</div>
				<WhatWeDo/>
			</div>

			<div className='w-full'>
				<img src={kk} alt='dsdsd' className='w-full'/>
			</div>

			<div id="about" className="about">
				<div className="text-center">
					<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light"
					   style={{marginBottom: "7vh"}}>
						Who are we...
					</p>
				</div>
				<About/>
			</div>

			<div className='w-full'>
				<img src={kk} alt='dsdsd' className='w-full'/>
			</div>

			<div id="contact" className="contact">
				<div className="text-center">
					<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light"
					   style={{marginBottom: "7vh"}}>
						Let's talk...
					</p>
				</div>
				<Contact/>
			</div>
		</div>
	);
};

export default Home;