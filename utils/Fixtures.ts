import { DashboardPage, SIDE_PANEL_TABS } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { type PlaywrightTestOptions, test as base } from "@playwright/test";
import { Config } from "./Config";

type Fixtures = {
	loginPage: LoginPage;
	dashboardPage: DashboardPage;
	config: Config;
};

type TestOptions = {
	sidePanelTabs: typeof SIDE_PANEL_TABS;
};

const config = new Config();

export const test = base.extend<Fixtures & PlaywrightTestOptions & TestOptions>(
	{
		loginPage: async ({ page }, use) => {
			const loginPage = new LoginPage(page);
			await loginPage.goto();

			await use(loginPage);
		},

		dashboardPage: async ({ page }, use) => {
			const dashboardPage = new DashboardPage(page);
			await dashboardPage.goto();

			await use(dashboardPage);
		},

		// biome-ignore lint/correctness/noEmptyPattern: This requires object destructuring
		config: async ({}, use) => {
			await use(config);
		},

		sidePanelTabs: SIDE_PANEL_TABS,
		baseURL: config.baseUrl,
	},
);

export { expect } from "@playwright/test";
