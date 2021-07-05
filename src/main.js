import Fade from 'react-reveal/Fade'
import Navbar from './Nav'
import React, { useRef } from "react";
import { ThemeContext } from './themeContext';

export default function Main() {
	const { theme, setTheme } = React.useContext(ThemeContext);
	return (
		<main  >
			<Navbar/>
			<main
				className="flex flex-col lg:flex-row items-center lg:justify-around mx-auto -mt-4 mb-10 px-6 lg:px-20 lg:pb-16 max-w-6xl relative">
				<Fade top>
					<div className="text-center lg:text-left w-4/5 sm:w-2/3 lg:w-1/2 mx-auto py-4 flex justify-center flex-col">
						{theme === 'light' ? <img src="induction-dark.svg" className="sm:-ml-20 sm:-mb-20 transform scale-300"/> : <img src="induction.svg" className="sm:-ml-20 sm:-mb-20 mx-auto"/>}
						<p className="mt-6 text-base font-body dark:text-gray-200 text-gray-700 sm:text-lg md:text-xl">
							Mtech batch of 2023
						</p>
						<div className="mt-5 sm:mt-8 sm:flex justify-center lg:justify-start">
							<button onClick={() => {document.getElementById("Speakers").scrollIntoView({behavior: 'smooth'})}}
								className="px-4 py-2 border border-transparent text-xl rounded transition duration-150 ease-in-out focus:outline-none md:px-6 bg-green-600 hover:bg-green-700 font-bold text-white">
								Check our notable speakers
							</button>
						</div>
					</div>
				</Fade>
				<Fade bottom>
					<div className="mx-auto mt-6 mb-16 lg:m-0 w-full lg:w-2/3 aos-init aos-animate" data-aos="fade-up">
						<img height="500" width="1000" className="w-full h-full z-20 object-contain"
							src="main-img.svg" alt="main-img" />
					</div>
				</Fade>
			</main>
			<div className="py-8 px-4  bg-primary-hover dark:bg-gray-800">
				<div className="container mx-auto">
					<div className="text-center w-full lg:w-2/3 mx-auto">
						<h2 className="text-2xl md:text-4xl font-bold dark:text-gray-100 leading-tight">Something important</h2>
						<p className="text-lg py-2 text-gray-800 font-body dark:text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, delectus!
						</p>
					</div>
				</div>
			</div>
			<ImageLine />
		</main>
	);
}

function ImageLine() {
	return (
		<div className="flex flex-col lg:flex-row lg:justify-center items-center py-4 lg:py-16  bg-primary-hover dark:bg-gray-800">
			<ImageBox path="how-it-works-1.91567300.svg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." heading="Heading #1" />
			<ImageBox path="how-it-works-2.f490bcd4.svg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." heading="Heading #2" />
			<ImageBox path="how-it-works-3.bd7296f0.svg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." heading="Heading #3" />
		</div>
	)
}

function ImageBox(props) {
	return (
		<Fade top>
			<div className="px-4 w-full lg:w-1/3 flex flex-col justify-between items-center mt-16 lg:mt-0">
				<div className="w-full sm:w-1/2 h-64 relative">
					<img
						src={props.path} alt="how-it-works" layout='fill' />
				</div>
				<div className="mt-4 text-center">
					<h3 className="mb-2 font-bold text-xl md:text-2xl lg:text-xl dark:text-gray-300">{props.heading}</h3>
					<p className="text-gray-700 dark:text-gray-300">{props.description}</p>
				</div>
			</div>
		</Fade>
	)
}