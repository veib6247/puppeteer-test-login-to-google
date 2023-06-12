import puppeteer from 'puppeteer'

/**
 *
 */
const imARealBoi = async () => {
  // launch own chrome
  const browser = await puppeteer.launch({
    headless: 'new',
  })

  const page = await browser.newPage()

  await page.goto('https://kobeni-nuxt.vercel.app/login')

  // Query for an element handle.
  const loginButton = await page.waitForSelector('.btn')

  console.log(await loginButton.click())
}

// run da boi!!!
imARealBoi()
