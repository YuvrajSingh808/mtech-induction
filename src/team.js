import { useRef } from 'react';
import Fade from 'react-reveal/Fade'
import useGoogleSheets from 'use-google-sheets';
export default function OurTeam() {
	const {
		data,
	} = useGoogleSheets({
		apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
		sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
		sheetsNames: ['Dynamic Images'],
	});
	const dat = data[0];
	var teamData;
	const students = [];
	const profs = [];
	const staff = [];
	if (dat) {
		teamData = dat.data;
		let index = 0;
		while (teamData[index].Name !== 'Professors') {
			students.push(teamData[index++]);
		}
		index++;
		while (teamData[index].Name !== 'Staff') {
			profs.push(teamData[index++]);
		}
		index++;
		while (index != teamData.length) {
			staff.push(teamData[index++])
		}
	}
	return (
		teamData ? <Fade left>
			<section className="text-gray-600 body-font" id="Team">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-20">
						<h3
							className="text-3xl leading-8 font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl sm:leading-10 dark:text-gray-200">
							Our Team</h3>
					</div>
					<h3
						className="text-xl leading-8 font-medium text-left sm:my-6 my-2 tracking-tight text-gray-900 sm:text-3xl sm:leading-10 dark:text-gray-200">
						Faculty Members
					</h3>
					<div className="flex flex-wrap -m-2">
						{profs && profs.map(member =>
							<TeamMemberTile name={member.Name} image={member.imageURL} social={member.SocialMedia} />)}
					</div>
					<h3
						className="text-xl leading-8 font-medium text-left sm:my-6 my-2 tracking-tight text-gray-900 sm:text-3xl sm:leading-10 dark:text-gray-200">
						Staff Members
					</h3>
					<div className="flex flex-wrap -m-2">
						{staff && staff.map(member =>
							<TeamMemberTile name={member.Name} image={member.imageURL} social={member.SocialMedia} />)}
					</div>
					<h3
						className="text-xl leading-8 font-medium text-left sm:my-6 my-2 tracking-tight text-gray-900 sm:text-3xl sm:leading-10 dark:text-gray-200">
						Students
					</h3>
					<div className="flex flex-wrap -m-2">
						{students && students.map(member =>
							<TeamMemberTile name={member.Name} image={member.imageURL} social={member.SocialMedia} />)}
					</div>
				</div>
			</section>
		</Fade>
			: <div className=""></div>

	)
}

function TeamMemberTile(props) {
	// console.log(props.image);
	var id;
	if (props.image && props.image.includes("drive")) {
		id = props.image.substring(props.image.indexOf('/d/') + 3);
		id = id.substring(0, id.indexOf('/'));
		id = "https://drive.google.com/uc?id=" + id;
	}
	return (
		<div className="p-2 lg:w-1/3 md:w-1/2 w-full">

			<a href={props.social} target="_blank">
				<div
					className="h-full dark:bg-gray-900 bg-secondary-hover dark:text-gray-200 text-gray-900 flex items-center p-4 rounded-lg hover:bg-secondary hover:text-gray-100 dark:hover:bg-gray-700 ">
					{
						id ?
							<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
								src={id} /> :

							<img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
								src="https://dummyimage.com/720x600" />
					}
					<div className="flex-grow">
						<h2 className="title-font font-medium">{props.name}</h2>
					</div>
				</div>
			</a>
		</div>
	);
}