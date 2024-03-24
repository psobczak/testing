import { DashboardPage, SIDE_PANEL_TABS } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { PlaywrightTestOptions, test as base } from "@playwright/test";

type Fixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
};

type TestOptions = {
  sidePanelTabs: typeof SIDE_PANEL_TABS;
};

export const test = base.extend<Fixtures & PlaywrightTestOptions & TestOptions>(
  {
    baseURL: process.env.BASE_URL!,
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

    sidePanelTabs: SIDE_PANEL_TABS,
  }
);

export { expect } from "@playwright/test";
