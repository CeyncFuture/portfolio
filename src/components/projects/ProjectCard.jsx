import Button from "../reusable/Button";
import {Link} from "react-router-dom";

const ProjectCard = ({id, categories, title, desc, imgUrl}) => {
    return (
        <div className='flex mb-4 items-center'>
            <div className="mx-2" style={{minWidth: '450px'}}>
                <img src={imgUrl}  className="rounded-xl border-none" alt={title}/>
            </div>
            <div className="p-6">
                <div className="mb-3">
                    {categories.map((category, index) =>
                        <h1
                            key={index}
                            className="bg-indigo-500 font-bold text-white p-3 rounded-md"
                            style={{ width: "fit-content"}}
                        >
                            {category}
                        </h1>
                    )}
                </div>
                <h1 className="font-general-medium text-lg font-bold md:text-xl text-ternary-dark dark:text-ternary-light mb-2">{title}</h1>
                <p className="text-lg text-ternary-dark dark:text-ternary-light mb-3">{desc}</p>
                <Link
                    to={`/project/${id}`}
                    className="font-general-medium rounded-lg focus:ring-1 focus:ring-indigo-900 text-ternary-dark text-lg sm:text-md duration-300"
                    aria-label="Learn More"
                >
                    <Button title="Learn More..."/>
                </Link>
            </div>
        </div>
    );
}

export default ProjectCard;