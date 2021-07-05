import Fade from 'react-reveal/Fade';

export default function Speakers(params) {
	return (
		<div className="container px-2 md:px-4 lg:px-24 mx-auto my-8 lg:my-16" id="Speakers">
			<h3 className="text-3xl leading-8 font-extrabold text-center tracking-tight dark:text-gray-100 text-gray-900 sm:text-4xl sm:leading-10">
				Notable speakers</h3>
			<EventDetailsType1 eventTitle="Speaker #1"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." />
			<EventDetailsType2 eventTitle="Speaker #2" description="Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray." />
		</div>
	)
}

function EventDetailsType1(props) {
	return (
		<section className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<Fade left mountOnEnter = {true} unmountOnExit={true}>
					<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h1 className="title-font sm:text-6xl text-4xl mb-4 font-medium dark:text-gray-100 text-gray-900">{props.eventTitle}
						</h1>
						<p className="mb-8 leading-relaxed dark:text-gray-200">{props.description}</p>
					</div>
				</Fade>
				<Fade right>
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
						<img className="object-cover object-center rounded" alt="hero" src="https://drive.google.com/uc?id=0B9o1MNFt5ld1N3k1cm9tVnZxQjg" />
					</div>
				</Fade>
			</div>
		</section>
	)
}

function EventDetailsType2(props) {
	return (
		<section className="text-gray-600 body-font">
			<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<Fade left>
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
						<img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
					</div>
				</Fade>
				<Fade left>
					<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
						<h1 className="title-font sm:text-6xl text-4xl mb-4 font-medium text-gray-900 dark:text-gray-200">{props.eventTitle}
						</h1>
						<p className="mb-8 leading-relaxed dark:text-gray-200">{props.description}</p>
					</div>
				</Fade>
			</div>
		</section>
	)
}