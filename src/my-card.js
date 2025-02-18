
/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "The Big Apple";
    this.image = "https://www.aroundtheworldl.com/wp-content/uploads/2015/04/DSC02105-1.jpg";
    this.content = "This is an image of New York City";
    this.fancy = false;

    
  }

  static get styles() {
    return css`
      :host {
        display: block;
        background-color: white;
        color: teal;
        font-size: 24px;
        padding: 24px;
        margin: 8px;
        width:400px;
        text-align:center;
        display: block;
        display: inline-block;
      }
      :host([fancy]) {
      display: block;
      background-color: pink;
      .card-header {
        font-size: 24px;
        font-weight: bold;
        color: #1ac1e6;
      }
      div{
        width:20px;

      }
      .card-image{
        width:300px;
        height:300px;
      }
      details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
  }

  details[open] summary {
    font-weight: bold;
  }
  
  details div {
    border: 2px solid black;
    text-align: left;
    padding: 8px;
    height: 70px;
    overflow: auto;
  }

    `;
    
  }
  
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
    
  }
  

  render() {
    return html`
    <div>
      <div class ="card-header">${this.title}</div>

      <img class="card-image" src="${this.image}" alt="${this.title}" />
        <div class="card-description">${this.content}</div>
      </div>
      `;   
  }

  static get properties() {
    return {
      title: { type: String, reflect: true },
      image: {type: String, reflect: true},
      content: {type: String, reflect: true},
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
