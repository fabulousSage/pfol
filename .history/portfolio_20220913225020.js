import emoji from "react-easy-emoji";

export const greetings = {
	name: "IT and Digital Solutions Provider | Software Development | Concy",
	title: "IT and Digital Solutions Provider",
	description:
		"Custom Software Development And IT Services That Meets Your Business Goals. We are Internet of Things Provider and Excellence is our Partner.",
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
	title: "Our Services",
	subTitle:
		"~Web App & Web Development, ~Decentralized Applications And Smart Contracts, ~System Networking, Database Design  & Management",
	data: [
		{
			title: "Web App & Web Development",
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
					fontAwesomeClassname: "logos:WordPress",
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
					"⚡ Building of Smart Contract using Solidity"
				),
				emoji(
					"⚡ Building Dapps with React.js, Web3.js, and Solidity"  //using Brownie & Infura
				),
				emoji(
					"⚡ Building $ Deployment Of Smart Contracts Using Openzeppelin Libraries & Chainlink Oracles"
				),
				emoji(
					"⚡ Developing NFT Smart Contracts using ERC-721 and ThirdWeb SDKs"
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


export const experience = [
	{
		role: "",
		company: "BitsAfrika",
		companylogo: "/img/icons/common/bitsafrika.jpeg",
		Description: "Bitcoin, Ethereum, Polkadot and the future of DeFi",
	},
	{
		role: "Full Stack Developer",
		company: "SafeOdds",
		companylogo: "/img/icons/common/safeodds.jpeg",
		Description: "A football prediction web application",
	},
	{
		role: "",
		company: "Concy Technologies",
		companylogo: "/img/icons/common/concy",
		Description: "IT and Digital Solutions Provider",
	},
];

