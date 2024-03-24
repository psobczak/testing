import { test, expect } from "../utils/Fixtures";

test("search on dashboard", async ({ page, dashboardPage }) => {
  await dashboardPage.clickTabButton("Claim");
  await page.waitForTimeout(5000);
});
