import emoji from "react-easy-emoji";

export const greetings = {
	name: "Egwutuoha Ugochukwu",
	title: "Hi all, I'm Ugochukwu, <br><br> WELCOME TO SAGE TECH SERVICES",
	description:
		"I'm a passionate web developer having an experience of web applications with React.js, Next.js, Sanity, WordPress and Blockchain development on Ethereum, Solidity, and Web3.js",
	resumeLink:
		"https://drive.google.com/file/d/1Jj4QvvMMhRZQrxngrvlhmuTLhgcisaAp/view?usp=sharing",
};

export const openSource = {
	githubUserName: "fabuloussage",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/fabuloussage/",
	instagram: "https://www.instagram.com/fabulous_sage/",
	twitter: "https://twitter.com/Fabulous_SAGE",
	github: "https://github.com/fabuloussage",
	linkedin: "https://www.linkedin.com/in/ugochukwu-egwutuoha-02a9221a6/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"SEASONED DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building Premium Responsive Websites With WorPress"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "WordPress",
					fontAwesomeClassname: "logos:wordpress",
				},
				{
					skillName: "Sanity CMS",
					fontAwesomeClassname: "logos:sanity",
				},
				{
					skillName: "NodeJs",
					fontAwesomeClassname: "logos:nodejs",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Sentry",
					fontAwesomeClassname: "logos:sentry-icon",
				},
			],
		},
		{
			title: "Blockchain",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
				),
				emoji(
					"⚡ Building Scripts for automated testing & deployment of Smart Contracts"  //using Brownie & Infura
				),
				emoji(
					"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
				),
				emoji(
					"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
				),
				emoji(
					"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
				),
			],
			softwareSkills: [
				{
					skillName: "Ethereum",
					fontAwesomeClassname: "logos:ethereum",
				},
				{
					skillName: "Solidity",
					fontAwesomeClassname: "logos:solidity",
				},
				{
					skillName: "Web3js",
					fontAwesomeClassname: "logos:web3js",
				},
				{
					skillName: "Metamask",
					fontAwesomeClassname: "logos:metamask-icon",
				},
				{
					skillName: "Ganache",
					fontAwesomeClassname: "logos:ganache-icon",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Nnamdi Azikiwe University",
		subHeader: "BSc",
		duration: "September 2013 - April 2019",
		desc: ".",
		//descBullets: [
		//	"",
		//	"",
		//],
	},
];

export const experience = [
	{
		role: "CTO",
		company: "CoshTech",
		companylogo: "https://coshtech.com/wp-content/uploads/2022/06/trans-2-444.png",
		date: "Jan 2022 – Mar 2022",
		desc: "",
		 descBullets: [
		 	"",
		 	"",
		 ],
	},
	// {
	// 	role: "Full Stack Developer",
	// 	company: "Bleed-AI",
	// 	companylogo: "/img/icons/common/bleedAI.jpg",
	// 	date: "Sept 2021 - Oct 2021",
	// 	desc: "Worked at self employed"
	// },
	{
		role: "Quality Control",
		company: "Valleumbra",
		companylogo: "https://coshtech.com/wp-content/uploads/2022/07/1633021641-18-valleumbra-flour-mills-limited.jpg",
		date: "March 2015",
		desc: "Worked as a quality control officer.",
	},
];

export const projects = [
	{
		name: "CoshTech",
		desc: "A Tech Blog" ,
		link: "https://www.coshtech.com",
	},
	{
		name: "MedicShore",
		desc: "Purchase, Purchase And Delivery Of Pharmaceuticals And Hospital Equipments",
		link: "https://www.medicshore.com",
	},
	{
		name: "GetValueToday (Ecommerce)",
		desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
		link: "https://www.getvaluetoday.com/",
	},
	// {
	// 	name: "MMFmelody (Blog)",
	// 	desc: "Here you will find amazing tips about health, beauty, and modern-day life.",
	// 	// github: "https://github.com/1hanzla100",
	// 	link: "https://mmfmelody.herokuapp.com/",
	// },
	{
		name: "Dev-Portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/fabuloussage",
		link: "https://developer-portfolio-1hanzla100.vercel.app/",
	},
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];
