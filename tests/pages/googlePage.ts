const {Actions} = require('../utils/actions');

class GooglePage extends Actions {
  constructor() {
    super();
    this.googleUrl = 'https://www.google.com';
    this.searchInput = this.Selector('[name="q"]');
    this.firstLink = this.Selector('div #rso').find('a');
  }
}
export default new GooglePage();
