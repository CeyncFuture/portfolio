import AboutCounter from '../components/about/AboutCounter';
import { motion } from 'framer-motion';

const description = "At CeyncFuture, we bring your ideas to life with custom-built web applications designed to make " +
    "your business thrive. Our team of skilled engineers combines the latest technology with a deep understanding of " +
    "your unique goals to create software solutions that empower you to grow. Whether you're looking to streamline " +
    "operations, enhance user experience, or expand your digital presence, we’re here to make it happen. Count on us " +
    "for reliable, innovative, and results-driven development that puts your success at the heart of everything we do."

const WhatWeDo = () => {
    return (
        <div>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1, delay: 1}}
                exit={{opacity: 0}}
                className="container mx-auto"
            >
                <div className="flex flex-center">
                    <div className="font-general-regular w-full text-center">
                            <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg" >
                                {description}
                            </p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1, delay: 1}}
                exit={{opacity: 0}}
            >
                <AboutCounter/>
            </motion.div>
        </div>
    )
};

export default WhatWeDo;
