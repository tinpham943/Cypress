class SearchPage {
    txtSearch   = '[id=ctl00_phlContent_ctlHeaderSearchFilter_ctlKeywordAutocomplete_divKeyword]'
    txtMinPrice = ':nth-child(1) > .u8myhf-0 > .c3oyou-0 > .sc-1i2ze9-0 > .sbfswc-0'
    txtMaxPrice = ':nth-child(3) > .u8myhf-0 > .c3oyou-0 > .sc-1i2ze9-0 > .sbfswc-0'
    txtLocation = '.zh17s6-0 > .hgfdzw-0 > .sc-16mxwr7-0 > .dyh2vd-0'
    cboSortby   = ':nth-child(2) > .sc-1tdo89-0 > .u8myhf-0 > .sc-19dcm61-0 > .sc-171glo2-0'
    cboRadius   = '.sc-3x6hur-0 > .u8myhf-0 > .sc-19dcm61-0 > .sc-171glo2-0'
    lstItems    = '[style="display: flex; flex-direction: column; width: 100%;"] > :nth-child(1)'

    visitSearchPage() {
        cy.visit("https://stage.anibis.ch/fr/default.aspx")
    }
    urlUnsorted() {
        cy.visit("https://stage.anibis.ch/fr/advertlist.aspx?fts=immobilien&sf=pri&so=a")
    }
    search(keyword) {
        cy.get(this.txtSearch).type(keyword + '{enter}')
    }

    enterPriceRange(min, max) {
        cy.get(this.txtMinPrice).type(min)
        cy.get(this.txtMaxPrice).type(max)
    }

    enterLocation(where, radius) {
        cy.get(this.txtLocation).type(where)    
        cy.get('.sc-1fhohx-0').contains(where).click()     
        cy.get(this.cboRadius).trigger('mouseover').select(radius)
            
    }

    sort(by) {    
        cy.get(this.cboSortby).select(by)
        cy.get(this.lstItems)
            .find("article:contains('CHF')")
            .its('length').should('eq', 20)

    }


}
export default SearchPage 