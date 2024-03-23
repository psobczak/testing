import { test, expect } from "../utils/Fixtures";

test("search on dashboard", async ({ page, dashboardPage }) => {
  await dashboardPage.search("Playwright");
  await page.waitForTimeout(5000);
});
