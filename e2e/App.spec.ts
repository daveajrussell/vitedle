import { test, expect } from "@playwright/test";

test("it should display losing condition", async ({ page }) => {
  await page.goto("http://localhost:5173/?guesses=1&words=great");

  const label0 = page.getByLabel("Game tile at position 0");
  await label0.click();
  await label0.fill("A");

  const label1 = page.getByLabel("Game tile at position 1");
  await label1.fill("B");
  await label1.press("Tab");

  const label2 = page.getByLabel("Game tile at position 2");
  await label2.fill("C");
  await label2.press("Tab");

  const label3 = page.getByLabel("Game tile at position 3");
  await label3.fill("D");
  await label3.press("Tab");

  const label4 = page.getByLabel("Game tile at position 4");
  await label4.fill("E");

  await page.getByLabel("Check row").click();

  expect(
    page.getByRole("heading", { name: "great not correctly guessed!" })
  ).toBeTruthy();
});

test("it should display winning condition", async ({ page }) => {
  await page.goto("http://localhost:5173/?guesses=1&words=great");

  const label0 = page.getByLabel("Game tile at position 0");
  await label0.click();
  await label0.fill("G");

  const label1 = page.getByLabel("Game tile at position 1");
  await label1.fill("R");
  await label1.press("Tab");

  const label2 = page.getByLabel("Game tile at position 2");
  await label2.fill("E");
  await label2.press("Tab");

  const label3 = page.getByLabel("Game tile at position 3");
  await label3.fill("A");
  await label3.press("Tab");

  const label4 = page.getByLabel("Game tile at position 4");
  await label4.fill("T");

  await page.getByLabel("Check row").click();

  expect(
    page.getByRole("heading", {
      name: "great guessed correctly after 1 guesses!",
    })
  ).toBeTruthy();
});
