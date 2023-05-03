import { Selector } from 'testcafe';

fixture `My First TestCafe Test`

test.page('http://localhost:4200/')

test('Check if Angular app is loaded', async t => {
  const appRoot = Selector('app-root');
});
