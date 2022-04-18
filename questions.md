1. How long did you spend on the coding assignment? 
    - What would you add to your solution if you had more time?
    - If you didn't spend much time on the coding test, then use this as an opportunity to explain what you would add.
Ans. It took about 5 hours to complete this task. If I have more time, I would like to add wildcard search and autocomplete to my book search. I'd have also added lazy loading to the search feature so that data can only be loaded when redirected to a page.

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
Ans. optional chaining is the best feture I like in javascript which prevents program from failing for undifined data.

	```
	export const AssociateModal = () => {  
		const userData = useSelector((state) => state.SmartForms[SmartformType.CMS_HCP_EDIT]?.Translator?._dictionary);    
		const selectedHcpSafeId = useSelector((state) => state.Hcp?.User?.UserSafeId);    
		const show = useSelector((state) => state.Hcp?.ShowAssociateHcpModal);
		const active = useSelector((state) => state.Hcp?.Active);
		return ()
	}
	```
3. How would you track down a performance issue in production? Have you ever had to do this?
Ans. Performance issues are tracked in production via logs. You can also use third-party tools such as New Relic to avoid frontend errors. UAT testing and automated testing are other methods for testing the production side.

4. How would you improve the API that you just used?
Ans. By adding an offset to the API so that you can get a subset of the data at once, you can get the data faster and only get the amount of data you need at that point.

5. Please describe yourself using correctly formatted JSON.
Ans. {
		"first_name": "Maulika",
		"last_name": "Desai",
		"label": "Full-stack Developer at meshMD Inc.",
		"email": "maulika26@gmail.com",
		"gender": "female",
		"website": "https://maulikadesai.netlify.app/",
		"education": [
			{
				"degree": "Post Secondary Diploma",
				"course": "Computer Programmer",
				"start_date": "September 2017",
				"end_date": "August 2019"
			},
			{
				"degree": "Bachelor's Degree",
				"course": "Computer Engineer",
				"start_date": "August 2012",
				"end_date": "May 2016"
			}
		],
		"experience": [
			{
				"position": "Computer Programmer",
				"duration": "August 2020 - Present",
				"companyName": "meshMD Inc.",
				"location": "North york, ON"
			},
			{
				"position": "Software Developer",
				"duration": "September 2016 - August 2017",
				"companyName": "Kalp Corporate",
				"location": "Gujrat, India"
			}
		],
		"summary": "Experienced Software Engineer with a more than 3 years demonstrated history of working in the online media industry. Skilled in Front-end Development, HTML5, CSS, JavaScript, ReactJs, Bootstrap and GitHub. Strong engineering professional with Bachelor's in Computer Science and additional of a Post secondary diploma focused in Computer Programming.",
		"address": {
			"postalCode": "M1H2K6",
			"city": "Concord",
			"province": "ON",
			"contry": "Canada"
		},
		"profiles": [
			{
				"network": "LinkedIn",
				"username": "maulikadesai",
				"url": "https://www.linkedin.com/in/maulikadesai/"
			},
			{
				"network": "Github",
				"username": "Mauli-D",
				"url": "https://github.com/Mauli-D"
			}
		]
	}
