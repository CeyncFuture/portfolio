import Button from "../components/reusable/Button";

const ProjectCard = ({data, isLeftAligned, onSelect}) => {
    const {title, categories, desc, images} = data;

    const alignment = isLeftAligned ? 'flex-row' : 'flex-row-reverse';

    return (
        <div className={`flex flex-wrap justify-center mb-4 items-center ${alignment}`}>
            <div className="mx-2" style={{maxWidth: '400px', cursor: 'pointer'}} onClick={() => onSelect(data)}>
                <img src={images[0]} className="rounded-xl border-none" alt={title}/>
            </div>
            <div className="p-6" style={{maxWidth: '600px'}}>
                <h1 className="font-general-medium text-lg font-bold md:text-xl text-ternary-dark dark:text-ternary-light mb-2">{title}</h1>
                <div className="flex flex-wrap gap-3">
                    {categories.map((category) =>
                        <h1
                            className="bg-indigo-500 font-medium text-white p-2 rounded-md mb-3"
                            style={{width: "fit-content", fontSize: "12px"}}
                        >
                            {category}
                        </h1>
                    )}
                </div>
                <p className="text-lg text-ternary-dark dark:text-ternary-light mb-3">{desc.slice(0, 150)}...</p>
                <div
                    className="font-general-medium rounded-lg focus:ring-1 focus:ring-indigo-900 text-ternary-dark dark:text-ternary-light text-lg sm:text-md duration-300"
                    aria-label="Learn More"
                >
                    <Button
                        title="Learn More..."
                        onClick={() => onSelect(data)}
                    />
                </div>
                <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" style={{marginTop: "15px"}}/>
            </div>
        </div>
    );
}

export default ProjectCard;