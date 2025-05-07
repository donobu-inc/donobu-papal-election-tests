import { test } from 'donobu';

const testTitle = 'Papal Election Smoke Test';
const testDetails = {
  annotation: {
    type: 'objective',
    description: `This is a live video feed of the Sistine Chapel chimney during the papal election.
If white smoke is visible, the test should pass - a new pope has been elected.
If the smoke is black or there is no smoke, the test should fail.`,
  },
  timeout: 60_000 // 1 minute timeout
};

test(testTitle, testDetails, async ({ page }) => {
  // Navigate to the live stream of Sistine Chapel Chimney from MSNBC
  await page.goto('https://www.youtube.com/watch?v=Qavn8bL2zOQ');

  // Check for the chimney for white smoke
  const chimneyCheck = await page.visuallyAssert({
    assertionToTestFor: `Can you clearly see a video feed of the Sistine Chapel chimney?
If you cannot see the video feed clearly, this assertion should fail.
Is there white smoke visible from the chimney?
This assertion should ONLY pass if white smoke is clearly visible.`
  });
  
  if (!chimneyCheck.isSuccessful) {
    throw new Error('Test failed: Cannot see the video feed or white smoke');
  }
  
  // Check smoke color again after a short wait
  await page.waitForTimeout(10_000);

  const smokeCheck = await page.visuallyAssert({
    assertionToTestFor: `Is there white smoke visible from the chimney?
This assertion should ONLY pass if white smoke is clearly visible.
If the smoke is black or there is no smoke, this assertion should fail.`
  });
  
  if (smokeCheck.isSuccessful) {
    console.log('WHITE SMOKE DETECTED! Habemus Papam - We have a new Pope!!');
  } else {
    throw new Error('Test failed: No white smoke detected - no pope elected yet');
  }
});
