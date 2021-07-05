function EventCalender (props) {
	return(
	<div id="Events">
		<h3 className="text-3xl leading-8 font-extrabold text-center tracking-tight dark:text-gray-200 text-gray-900 sm:text-4xl sm:leading-10">
			All Events</h3>
		<div className="mx-auto container py-20 px-16">
			<div className="w-full flex items-cente justify-between">
				<div>
					<h4 className="text-xs xl:text-base text-gray-900 dark:text-gray-100">July 2021</h4>
				</div>
			</div>
			<div className="w-full xl:overflow-x-hidden mt-4">
				<div className="relative overflow-hidden w-full py-80">
					<iframe className="absolute top-0 right-0 left-0 bottom-0 w-full h-full" src="https://docs.google.com/spreadsheets/d/e/	2PACX-1vSWrLR80Nd0zAWYddKxxySbseMPNl5iFfR3Et9QzQGzCIwtp5Tpa_hAytA_opkDldlOn6jdKfcV5IyT/pubhtml?gid=318054788&amp;single=true&amp;widget=true&amp;headers=false">
					</iframe>
				</div>
			</div>
		</div>

		<style>
			{`
			@media screen and (min-width: 375px) {
					.custom-width {
							width: 40rem;
					}
			}

			@media screen and (min-width: 1300px) {
					.custom-width {
							width: 50%;
					}
			}`}
		</style>
	</div>
	)
}
export default EventCalender;

function TableRow(props) {
	var rowspans = [];
	var colspans = [];
	var tempIndex = -1;
	for (let index = 0; index < props.row.length; index++) {
		colspans[index] = 1;
		if (props.row[index] === "") {
			colspans[tempIndex]++;
		}
		else{
			tempIndex++;
		}
	}
	// console.log(colspans);
	return <tr className="border-b border-gray-300 dark:border-gray-700">
		{props.row && props.row.map((data, index) => <TableRowCell data={data} key={index} colspan={colspans[index]} />)}
	</tr>;

	function TableRowCell(props) {
		return (
			<td className="border-r relative border-gray-300 dark:border-gray-700">
				<p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16"></p>
				<div className="flex items-center -mt-16 absolute ml-4">
					<div className="w-3 h-3 rounded-full bg-indigo-700 rounded" />
					<div className="ml-2">
						{/* <p className="text-xs dark:text-gray-100 text-gray-900">13:00 - 14:40</p> */}
						<p className="text-xs text-gray-800 dark:text-gray-100 mt-1">{props.data}</p>
					</div>
				</div>
			</td>
		);
	}
}

function TableHead(props) {
	// console.log(props.headings);
	return (
	<thead className="items-center">
		<tr className="h-20">
			{props.headings && props.headings.map((heading, index) => {<TableHeadCell key={index} heading={heading} />})}
		</tr>
	</thead>
	);
}

function TableHeadCell(props) {
	console.log(props.heading);
	return <th className="px-10">
		<p className="text-xs text-left text-gray-900 dark:text-gray-100 uppercase cursor-pointer">{props.heading}</p>
	</th>;
}

