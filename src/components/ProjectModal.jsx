import {useEffect, useState} from "react";
import {FiX} from "react-icons/fi";

const ProjectModal = ({data, onClose}) => {
    const {title, category, desc, images, technologies} = data;
    const [isWrapped, setIsWrapped] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsWrapped(window.innerWidth < 1200);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 30,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)"
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#fff",
                    maxWidth: "80vw",
                    height: "90vh",
                    overflow: "hidden",
                    borderRadius: "10px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "20px",
                        borderBottom: "1px solid #ddd",
                    }}
                >
                    <div>
                        <h5 style={{fontSize: "24px", marginBottom: "10px"}}>{title}</h5>
                        <span
                            style={{
                                fontSize: "14px",
                                color: "#fff",
                                background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
                                padding: "5px 15px",
                                borderRadius: "20px",
                                fontWeight: "bold",
                                textTransform: "uppercase",
                            }}
                        >
                          {category}
                        </span>
                    </div>
                    <button onClick={onClose} style={{fontSize: "24px", padding: "10px"}}>
                        <FiX/>
                    </button>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexWrap: isWrapped ? "wrap" : "nowrap",
                        padding: "20px",
                        gap: "20px",
                        height: "calc(100% - 80px)",
                        overflowY: "auto"
                    }}
                >
                    <div
                        style={{
                            flex: "1 1 50%",
                            height: isWrapped ? "fit-content" : "100%",
                            padding: "20px",
                            overflow: "auto",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none"
                        }}
                    >
                        <p style={{fontSize: "18px", color: "#333", marginBottom: "15px"}}>
                            {desc}
                        </p>
                        <div style={{marginBottom: "20px"}}>
                            <h6 style={{fontWeight: "500", color: "#333", marginBottom: "10px"}}>
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
                                            color: "#fff",
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
                            overflowY: isWrapped ? "hidden" : "auto",
                            overflowX: isWrapped ? "auto" : "hidden",
                            maxHeight: "100%"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: isWrapped ? "row" : "column",
                                gap: "15px",
                                flexWrap: isWrapped ? "nowrap" : "wrap",
                                overflowX: isWrapped ? "auto" : "hidden",
                                overflowY: isWrapped ? "hidden" : "auto",
                            }}
                        >
                            {images?.map((image, index) => (
                                <div
                                    key={index}
                                    style={{
                                        marginBottom: "15px",
                                        width: isWrapped ? "auto" : "100%",
                                        flex: isWrapped ? "0 0 auto" : "1",
                                    }}
                                >
                                    <img
                                        src={image}
                                        alt={title}
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
            </div>
        </div>
    );
};

export default ProjectModal;