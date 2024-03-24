import { test as setup } from "../utils/Fixtures";

const authFile = ".auth/user.json";

setup("authenticate", async ({ page, loginPage, config }) => {
	await loginPage.login(config.login, config.password);
	await page.waitForURL("/web/index.php/dashboard/index");

	await page.context().storageState({ path: authFile });
});
