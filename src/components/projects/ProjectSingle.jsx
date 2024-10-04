import { motion } from 'framer-motion';

const ProjectSingle = ({ title, category, image, link }) => {
	const handleClick = () => {
		window.location
			? window.open(link, '_blank')
			: window.location.replace
			? window.location.replace(link)
			: (window
					.location
					.href
					= link);
	}
	
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark" onClick={() => handleClick()}>
					<div>
						<img
							src={image}
							className="rounded-t-xl border-none align-middle"
							alt="Single ProjecT"
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{category}
						</span>
					</div>
				</div>
		</motion.div>
	);
};

export default ProjectSingle;
