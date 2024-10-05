function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light lg:flex md:flex sm:flex-col items-center">
				&copy; {new Date().getFullYear()}
				<p	
					target="__blank"
					className="ml-1 duration-500"
				>
					React & Tailwind CSS Portfolio.
				</p>
				<p
					
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase ml-1 duration-500"
				>
					Akshay
				</p>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
