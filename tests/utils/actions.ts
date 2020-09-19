import { Selector as NativeSelector, ClientFunction } from 'gherkin-testcafe';

export class Actions {
    /**
     * This is a wrapper to generic selector method
     * @param {'string'} selector Path to a element in the DOM
     * @return {Selector} Selector functions expose methods used to traverse through the DOM tree in jQuery style.
     */
    Selector(selector, t) {
        return NativeSelector(selector).with({ boundTestRun: t });
    }

    getUrl() {
        const clientfunction = ClientFunction(() => document.location.href);
        return clientfunction();
    }
}
