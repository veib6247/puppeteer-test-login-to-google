import puppeteer from 'puppeteer'
import 'dotenv/config'

/**
 *
 */
const imARealBoi = async () => {
  // launch own chrome
  const browser = await puppeteer.launch({
    headless: 'false',
  })

  const page = await browser.newPage()
  await page.goto('https://accounts.google.com')
  await page.setViewport({ width: 1080, height: 1024 })

  try {
    /**
     * EMAIL
     */
    console.log('Locating email input...')
    const inputEmail = await page.waitForSelector('#identifierId')

    console.log('Typing in email and pressing Enter...')
    await inputEmail.type(process.env.GOOGLE_EMAIL)
    await inputEmail.press('Enter')

    await page.waitForNetworkIdle()

    /**
     * PASSWORD
     */
    console.log('Locating password input...')
    const inputPassword = await page.waitForSelector('input[type="password"]')

    console.log('Typing in password and pressing Enter...')
    await inputPassword.type(process.env.GOOGLE_PASSWORD)
    await inputPassword.press('Enter')

    await page.waitForNetworkIdle()
    console.log(page.url())
    //
  } catch (error) {
    console.error(error)

    //
  } finally {
    await page.screenshot({ path: 'screenshots/final.png' })
    await browser.close()
  }
}

// run da boi!!!
await imARealBoi()
