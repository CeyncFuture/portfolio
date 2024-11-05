import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
// import ProjectsGrid from '../components/projects/ProjectsGrid';
// import { ProjectsProvider } from '../context/ProjectsContext';
import Button from '../components/reusable/Button';
import TechSlider from '../components/TechSlider';
import { techIcons } from '../data/sliders';
import {projectsData2} from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";
import About from "./AboutMe";
import Contact from "./Contact";

const Home = () => {

	return (
		<div className="container mx-auto">
			<AppBanner />
			<TechSlider techIcons={techIcons}/>

			{/*<ProjectsProvider>
				<ProjectsGrid />
			</ProjectsProvider>*/}

			<div id="projects" className="projects">
				<div className="text-center" style={{marginTop: "13vh"}}>
					<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light" style={{marginBottom: "7vh"}}>
						Projects portfolio
					</p>
				</div>
				{
					projectsData2.map((project, index) =>
						<ProjectCard
							id={project.id}
							categories={project.categories}
							title={project.title}
							desc={project.desc}
							imgUrl={project.img}
							isLeftAligned={index % 2 === 0}
						/>
					)
				}
			</div>

			<div className="mt-8 sm:mt-10 flex justify-center">
				<a
					href="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="More Projects"
				>
					<Button title="More Projects" />
				</a>
			</div>
			<div id="about" className="about">
				<div className="text-center" style={{marginTop: "13vh"}}>
					<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light" style={{marginBottom: "7vh"}}>
						Who are we...
					</p>
				</div>
			<About />
			</div>
			<div id="contact" className="contact">
				<div className="text-center" style={{marginTop: "13vh"}}>
					<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light" style={{marginBottom: "7vh"}}>
						Let's talk...
					</p>
				</div>
			<Contact />
			</div>
		</div>
	);
};

export default Home;
