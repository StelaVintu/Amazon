class CaptchaPage{
    get captchaIframe(){ return cy.get('[id="cvf-aamation-challenge-iframe"]')};
    get captchaHeader(){return '#aacb-captcha-header'}
    get captchaIframeLogin(){return cy.get('[id="cvf-page-content"]')}
    get captchaHeaderLogin(){return 'span.a-size-large'}

}

export default new CaptchaPage