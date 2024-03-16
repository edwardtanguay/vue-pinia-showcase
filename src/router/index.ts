import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "../views/WelcomeView.vue";
import SkillsView from "../views/SkillsView.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "welcome",
			component: WelcomeView,
		},
		{
			path: "/skills",
			name: "skills",
			component: SkillsView,
		},
		{
			path: "/about",
			name: "about",
			component: AboutView
		},
	],
});

export default router;
