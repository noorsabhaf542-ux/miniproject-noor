// @ts-check
import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/day1/HTML/index.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/First Page/);
});

test('get started link', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/day1/HTML/index.html');

  // Click the get started link.
  const link = await page.getByRole('link', { name: 'Visit Google' })
  link.isVisible();
  await link.click();

  // Expects page to have a heading with the name of Installation.
  // await expect(page).toHaveURL("https://www.google.com");
});

test('login form', async ({ page }) => { 
  await page.goto('http://127.0.0.1:5500/day1/HTML/index.html');

  await page.fill("#uname", "admin")
  await page.fill("#pass", "admin123")
  
  page.once('dialog', async dialog => {
    console.log('Alert msg:', dialog.message())
    expect(dialog.message()).toBe("Login success")
    await dialog.accept(); // click ok
  })
  await page.getByText("Click me").click();
})