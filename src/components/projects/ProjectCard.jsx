import Button from "../reusable/Button";
import {Link} from "react-router-dom";

const ProjectCard = ({id, categories, title, desc, imgUrl, isSwitched}) => {
    return (
        <div className={`project-card ${isSwitched && 'switched'}`}>
            <img className="image" src={imgUrl} alt={title} />
            <div className="content">
                <div className="chip-container">
                    {categories.map((category, index) => <h1 key={index} className="chip">{category}</h1>)}
                </div>
                <h1 className="title">{title}</h1>
                <p className="desc">{desc}</p>
                <Link
                    to={`/project/${id}`}
                    className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
                    aria-label="Learn More"
                >
                    <Button title="Learn More" />
                </Link>
            </div>
        </div>
    );
}

export default ProjectCard;