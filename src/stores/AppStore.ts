import { defineStore } from "pinia";

export const useSkillStore = defineStore("skillStore", {
	state: () => ({
		skills: [
			{
				idCode: "angular",
				name: "Angular",
				url: "https://onespace.pages.dev/techItems?id=36",
				description:
					"together with React and Vue.js one of the three most popular JavaScript frameworks",
			},
			{
				idCode: "cicd",
				name: "CI/CD",
				url: "https://about.gitlab.com/topics/ci-cd",
				description:
					"the combined practices of continuous integration (CI) and continuous deployment (CD)",
			},
			{
				idCode: "react",
				name: "React",
				url: "https://onespace.pages.dev/techItems?id=2",
				description:
					"currently the most popular front-end JavaScript framework along with Vue and Angular",
			},
			{
				idCode: "swagger",
				name: "Swagger",
				url: "https://en.wikipedia.org/wiki/Swagger_(software)",
				description:
					"a suite of tools for API developers created in 2011",
			},
			{
				idCode: "rest",
				name: "REST",
				url: "https://en.wikipedia.org/wiki/Representational_state_transfer",
				description:
					"a way to make services on a web available to software and other websites",
			},
		],
	}),
});
