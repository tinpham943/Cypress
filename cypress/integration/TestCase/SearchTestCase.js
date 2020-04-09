/// <reference types="cypress" />
import SearchPage from '../../fixtures/PageObject/SearchPage'
beforeEach(function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        throw err
    })
})
describe('Testcases for Search feature', function () {
    const sp = new SearchPage()
    it('Verify first 20 items correctly sorted', function () {
        sp.visitSearchPage()
        sp.search('Immobilien')
        sp.enterPriceRange('1000', '5000')
        sp.enterLocation('Zurich', '10')
        //verify only display 20 items
        sp.sort('Plus récentes d\'abord')
        //verify list items sorted
        cy.xpath("//div[@class='sc-1aka2ao-0 bxKRrP']")
            .getListDate()
            .then(listDate => {
                let i = 0;
                var sorted = false;
                for (i = 1; i < listDate.length; i++) {
                    if (listDate[i - 1] >= listDate[i]) {
                        sorted = true;
                        expect(sorted).to.equal(true)
                        cy.log('true' + listDate[i - 1] + '>=' + listDate[i])
                    }
                   
                    if (listDate[i - 1] < listDate[i]) {
                        sorted = false;
                        cy.log('sorted = false')
                        expect(sorted).to.equal(true)
                    }
                }
            });
    })
})

