const ProjectContent = ({desc, categories, images, technologies}) => {
    return (
        <div>
            <div className="flex flex-wrap gap-2 mb-3">
                {categories.map((category, index) =>
                    <span
                        key={index}
                        className="text-sm px-4 py-1.5 text-white rounded-full font-bold uppercase bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]"
                        style={{background: "linear-gradient(135deg, #ff7e5f, #feb47b)"}}
                    >
                                  {category}
                            </span>
                )}
            </div>
            <p className="text-base mb-4">
                {desc}
            </p>
            <div className="mb-4">
                <h6 className="font-medium mb-2"> Technologies: </h6>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((technology, index) =>
                        <span
                            key={index}
                            className="px-4 py-2 text-white rounded-full text-sm"
                            style={{backgroundColor: "#3498db"}}
                        >
                            {technology}
                          </span>
                    )}
                </div>
            </div>
            <div className="flex-1 basis-1/2 overflow-auto max-h-full">
                <div>
                    {images?.map((image, index) => (
                        <div key={index} className="mb-4 w-full flex-1">
                            <img
                                className="w-full rounded-lg border-0 object-cover h-auto"
                                src={image}
                                alt={`image_${index}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectContent;