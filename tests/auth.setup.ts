import { test as setup } from "../utils/Fixtures";

const authFile = ".auth/user.json";

setup("authenticate", async ({ page, loginPage }) => {
  const username = process.env.LOGIN;
  const password = process.env.PASSWORD;

  if (!username || !password) {
    throw new Error("Missing USERNAME or PASSWORD environment variables");
  }

  await loginPage.login(username, password);
  await page.waitForURL("/web/index.php/dashboard/index");

  await page.context().storageState({ path: authFile });
});
