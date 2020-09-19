import {Given, When, Then, Before, After} from 'cucumber';
import googlePage from '../pages/googlePage';

Before('@googleHook', async (t) => {
  console.log('Running Google e2e test.');
});

Given('I open Google\'s search page', async (t) => {
  await t
    .navigateTo(googlePage.googleUrl)
    .maximizeWindow();
  await t.expect(googlePage.getUrl()).contains('www.google.com');
});

When('I am typing my search request {string} on Google', async (t, [searchRequest]) => {
  await t.typeText(googlePage.searchInput, searchRequest);
});

When('I am pressing {string} key on Google', async (t, [key]) => {
  await t
    .pressKey(key);
});

Then('I should see that the first Google\'s result is {string}', async (t, [expectedSearchResult]) => {
  const firstLink = googlePage.firstLink.innerText;
  await t.expect(firstLink).contains(expectedSearchResult);
});

/*
This is a intencional wait, because testcafe send a error from temp files when it running test very fast
testcafe:utils:temp-directory:lockfile Failed to init lockfile /var/folders/rs/8p6vkmz57kddmqgg_qgm0yr40000gp/T/testcafe/chrome-profile-15438duZiZXoHc6wz/.testcafe-lockfile +2ms
testcafe:utils:temp-directory:lockfile Error: EEXIST: file already exists, open '/var/folders/rs/8p6vkmz57kddmqgg_qgm0yr40000gp/T/testcafe/chrome-profile-15438duZiZXoHc6wz/.testcafe-lockfile'
*/
After('@googleHook', async (t) => {
  await t.wait(2000);
});
