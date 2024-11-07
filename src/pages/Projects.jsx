import {projects} from "../data/project";
import ProjectCard from "./ProjectCard";
import {useState} from "react";
import ProjectModal from "../components/ProjectModal";

const Projects = () => {
	const [selected, setSelected] = useState(null);

	return (
		<>
			<div id="projects" className="projects">
				<div className="text-center">
					<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light"
					   style={{marginBottom: "7vh"}}>
						Projects portfolio
					</p>
				</div>
				{
					projects.map((project, index) =>
						<ProjectCard key={index} data={project} isLeftAligned={index % 2 === 0} onSelect={setSelected}/>
					)
				}
			</div>
			{selected &&
				<ProjectModal
					data={selected}
					onClose={() => setSelected(null)}
				/>
			}
		</>
	);
};

export default Projects;