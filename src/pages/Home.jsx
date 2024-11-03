import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import Button from '../components/reusable/Button';
import TechSlider from '../components/TechSlider';
import { techIcons } from '../data/sliders';
import {projectsData2} from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

const Home = () => {

	return (
		<div className="container mx-auto">
			<AppBanner />
			<TechSlider techIcons={techIcons}/>

			<ProjectsProvider>
				<ProjectsGrid />
			</ProjectsProvider>

			<div className="projects">
				{
					projectsData2.map((project, index) =>
						<ProjectCard
							id={project.id}
							categories={project.categories}
							title={project.title}
							desc={project.desc}
							imgUrl={project.img}
						/>
					)
				}
			</div>

			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="More Projects"
				>
					<Button title="More Projects" />
				</Link>
			</div>
		</div>
	);
};

export default Home;
