// import Button from "../reusable/Button";
// import {Link} from "react-router-dom";

const ProjectCard = ({id, categories, title, desc, imgUrl, isLeftAligned}) => {
  const alignment = isLeftAligned ? 'flex-row' : 'flex-row-reverse';
    return (
        <div className={`flex flexWrap justify-center mb-4 items-center ${alignment}`}>
            <div className="mx-2" style={{maxWidth: '300px'}}>
                <img src={imgUrl}  className="rounded-xl border-none" alt={title}/>
            </div>
            <div className="p-6" style={{maxWidth: '750px'}}>
                <h1 className="font-general-medium text-lg font-bold md:text-xl text-ternary-dark dark:text-ternary-light mb-2">{title}</h1>
                <div className="mb-3">
                  {categories.map((category, index) =>
                    <h1
                      key={index}
                      className="bg-indigo-500 font-medium text-white p-2 rounded-md"
                      style={{ width: "fit-content", fontSize: "12px"}}
                    >
                      {category}
                    </h1>
                  )}
                </div>
                <p className="text-lg text-ternary-dark dark:text-ternary-light mb-3">{desc}</p>
                {/* <Link
                    //to={`/project/single-project`}
                    className="font-general-medium rounded-lg focus:ring-1 focus:ring-indigo-900 text-ternary-dark dark:text-ternary-light text-lg sm:text-md duration-300"
                    aria-label="Learn More"
                >
                    <Button title="Learn More..."/>
                </Link> */}
              <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" style={{marginTop: "15px"}}/>
            </div>
        </div>
    );
}

export default ProjectCard;
