const ProjectContent = ({desc, categories, images, technologies}) => {
    return (
        <div>
            <div>
                <div className="mb-3">
                    {
                        categories.map(category =>
                            <span
                                style={{
                                    fontSize: "14px",
                                    background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
                                    padding: "5px 15px",
                                    borderRadius: "20px",
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                }}
                            >
                                  {category}
                            </span>
                        )
                    }
                </div>
                <p style={{fontSize: "18px", marginBottom: "15px"}}>
                    {desc}
                </p>
                <div style={{marginBottom: "20px"}}>
                    <h6 style={{fontWeight: "500", marginBottom: "10px"}}>
                        Technologies:
                    </h6>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "8px",
                        }}
                    >
                        {technologies.map((technology, index) => (
                            <span
                                key={index}
                                style={{
                                    backgroundColor: "#3498db",
                                    padding: "8px 16px",
                                    borderRadius: "20px",
                                    fontSize: "14px",
                                }}
                            >
                                    {technology}
                                  </span>
                        ))}
                    </div>
                </div>
            </div>
            <div
                style={{
                    flex: "1 1 50%",
                    overflow: "auto",
                    maxHeight: "100%"
                }}
            >
                <div>
                    {images?.map((image, index) => (
                        <div
                            key={index}
                            style={{
                                marginBottom: "15px",
                                width: "100%",
                                flex: "1",
                            }}
                        >
                            <img
                                src={image}
                                alt={`image_${index}`}
                                style={{
                                    width: "100%",
                                    borderRadius: "10px",
                                    border: "none",
                                    objectFit: "cover",
                                    height: "auto",
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectContent;