const {Actions} = require('../utils/actions');

class GooglePage extends Actions {
    searchInput: any;
    firstLink: any;
    googleUrl: any;
   
    constructor () {
        super()
        this.googleUrl = 'https://www.google.com';
        this.searchInput = this.Selector('[name="q"]');
        this.firstLink = this.Selector('div #rso').find('a');
    }
}
export default new GooglePage();
