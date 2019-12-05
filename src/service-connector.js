import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class ServiceConnector extends PolymerElement {
  static get properties () {
    return {
      smartVoteUrl: {
        type: String,
        value: 'https://concierge.smartvote.ch/graphql'
      },
    };
  }

  getSmartvoteUrl(){
    return this.smartVoteUrl;
  }

}

customElements.define('service-connector', ServiceConnector);
