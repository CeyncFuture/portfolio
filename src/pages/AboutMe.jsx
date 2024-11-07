import AboutCounter from '../components/about/AboutCounter';
import AboutClients from '../components/about/AboutClients';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';

const description = "We are CeyncFuture—a team of passionate and skilled software engineers dedicated to creating " +
	"strategic software solutions that drive real impact. With expertise in web application development and a commitment " +
	"to understanding each client's unique needs, we provide high-quality, custom solutions that align with your goals. " +
	"Our approach combines innovation, technology, and a deep customer focus, ensuring that every project we deliver is " +
	"engineered to fuel your growth and success. At CeyncFuture, your vision is our mission"

const About = () => {
	return (
		<AboutMeProvider>
			<motion.div
				initial={{opacity: 0}}
				animate={{opacity: 1, delay: 1}}
				exit={{opacity: 0}}
				className="container mx-auto"
			>
				<div className="flex flex-center">
					<div className="font-general-regular w-full text-center">
						{description}
					</div>
				</div>
			</motion.div>

			<motion.div
				initial={{opacity: 0}}
				animate={{opacity: 1, delay: 1}}
				exit={{opacity: 0}}
				className="container mx-auto"
			>
				<AboutClients/>
			</motion.div>

			{/*<motion.div*/}
			{/*	initial={{opacity: 0}}*/}
			{/*	animate={{opacity: 1, delay: 1}}*/}
			{/*	exit={{opacity: 0}}*/}
			{/*>*/}
			{/*	<AboutCounter/>*/}
			{/*</motion.div>*/}
		</AboutMeProvider>
	);
};

export default About;