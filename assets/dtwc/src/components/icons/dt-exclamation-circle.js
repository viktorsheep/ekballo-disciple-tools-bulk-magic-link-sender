import { css, html, LitElement } from 'lit';

export class DtExclamationCircle extends LitElement {
  static get styles() {
    return css`
      svg use {
        fill: currentcolor;
      }
    `;
  }
  render() {
    return html`
    <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

<g id="Canvas" transform="translate(1845 -2441)">
<g id="alert-circle-exc">
<g id="Group">
<g id="Vector">
<use xlink:href="#path0_fill" transform="translate(-1845 2441)" fill="#000000"/>
</g>
</g>
</g>
</g>
<defs>
<path id="path0_fill" d="M 12 0C 5.383 0 0 5.383 0 12C 0 18.617 5.383 24 12 24C 18.617 24 24 18.617 24 12C 24 5.383 18.617 0 12 0ZM 13.645 5L 13 14L 11 14L 10.392 5L 13.645 5ZM 12 20C 10.895 20 10 19.105 10 18C 10 16.895 10.895 16 12 16C 13.105 16 14 16.895 14 18C 14 19.105 13.105 20 12 20Z"/>
</defs>
</svg>
`;
  }
}

window.customElements.define('dt-exclamation-circle', DtExclamationCircle);
