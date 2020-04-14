import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/paper-toggle-button/paper-toggle-button.js';
import './service-connector.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';

class SwissVotingAdviceVerifier extends PolymerElement {
  static get properties () {
    return {
      answersRequest: {
        type: Array,
      },
      candidatesRequest: {
        type: Array,
      },
      idForVotingDistrict: {
        type: String
      },
      idForVotingElectionId: {
        type: String
      },
      dropdownCantons: {
        type: Array,
        value: [{idSr:"44400000000",name :"Aargau", idNr:"44200000000"},{idSr:"44400000001",name :"Appenzell Ausserrhoden", idNr:"44200000001"},
        {idSr:"44400000002",name :"Appenzell Innerrhoden", idNr:"44200000002"}, {idSr:"44400000003",name :"Basel-Landschaft", idNr:"44200000003"},{idSr:"44400000004",name :"Basel-Stadt", idNr:"44200000004"},
        {idSr:"44400000005",name :"Bern", idNr:"44200000005"}, {idSr:"44400000006",name :"Freiburg", idNr:"44200000006"},{idSr:"44400000007",name :"Genf", idNr:"44200000007"},
        {idSr:"44400000008",name :"Glarus", idNr:"44200000008"}, {idSr:"44400000009",name :"Graubünden", idNr:"44200000009"},{idSr:"44400000010",name :"Jura", idNr:"44200000010"},
        {idSr:"44400000011",name :"Luzern", idNr:"44200000011"},{idSr:"44400000012",name :"Neuenburg", idNr:"44200000012"},{idSr:"44400000013",name :"Nidwalden", idNr:"44200000013"},
        {idSr:"44400000014",name :"Obwalden", idNr:"44200000014"},{idSr:"44400000015",name :"Schaffhausen", idNr:"44200000015"},{idSr:"44400000016",name :"Schwyz", idNr:"44200000016"},
        {idSr:"44400000017",name :"Solothurn", idNr:"44200000017"},{idSr:"44400000018",name :"St.Gallen", idNr:"44200000018"},{idSr:"44400000019",name :"Tessin", idNr:"44200000019"},
        {idSr:"44400000020",name :"Thurgau", idNr:"44200000020"},{idSr:"44400000021",name :"Uri", idNr:"44200000021"},{idSr:"44400000022",name :"Waadt", idNr:"44200000022"},
        {idSr:"44400000023",name :"Wallis", idNr:"44200000023"},{idSr:"44400000025",name :"Zug", idNr:"44200000025"},{idSr:"44400000024",name :"Zürich", idNr:"44200000024"}]
      }
    };
  }

  _calculateActualValue(index){
    var distance = 0;
    var maxDistance = 0;
    var matching = 0;
    for (var i = 0; i < this.answersRequest.length; i++) {
      if (this.candidatesRequest[index].answers.length == 0) {
        this.set('candidatesRequest.' + index + '.calculatedMatch', "N/A");
        this.set('candidatesRequest.' + index + '.errorMargin', "N/A");
        this.set('candidatesRequest.' + index + '.matchSmartvotePercentage', "N/A");
        return;
      }
      var candidateValue = this.candidatesRequest[index].answers.find(x => x.questionId === this.answersRequest[i].questionId).value;
      var myValue = this.answersRequest[i].value;
      var myWeight = this.answersRequest[i].weight === "DOUBLE" ? 2 : this.answersRequest[i].weight === "HALF" ? 0.5 : 1;
      distance += Math.pow(myWeight * (myValue - candidateValue), 2);
      maxDistance += Math.pow((100 * myWeight), 2);
    }
    distance = Math.sqrt(distance);
    maxDistance = Math.sqrt(maxDistance);
    matching = this._round(100 * (1- (distance/maxDistance)), 1);
    console.log(matching);
    var errorMargin = (matching - this.candidatesRequest[index].match) / matching * 100 > 0 ?  "+" + ((matching - this.candidatesRequest[index].match) / matching * 100).toFixed(2) + "%" : ((matching - this.candidatesRequest[index].match) / matching * 100).toFixed(2) + "%";
    var colorErrorMargin = Math.abs((matching - this.candidatesRequest[index].match) / matching) < 0.01 ?  "goodErrorMargin" : "badErrorMargin";
    var percentageSmartvoteMatching = this.candidatesRequest[index].match + "%";
    matching = matching.toFixed(1) + "%";
    this.set('candidatesRequest.' + index + '.matchSmartvotePercentage', percentageSmartvoteMatching);
    this.set('candidatesRequest.' + index + '.calculatedMatch', matching);
    this.set('candidatesRequest.' + index + '.errorMargin', errorMargin);
    this.set('candidatesRequest.' + index + '.colorError', colorErrorMargin);
  }

  _round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  _requestRequestRecommendationId(){
    if (this.$.jsonInput.value == "") {
      alert('Please enter the json to validate!');
      return;
    }
    if (!this.idForVotingDistrict){
      alert('Please select a canton!');
      return;
    }

    var answers = JSON.parse(this.$.jsonInput.value);
    this.answersRequest = answers;
    var requester = this.$.smartVoteIdRequester;
    requester.url = this.$.connector.getSmartvoteUrl();
    requester.body = {
      "operationName": "CreateRecommendation",
      "variables": {
        "options": {
          "electionId": this.idForVotingElectionId,
          "districtId": this.idForVotingDistrict,
          "responderType": "Candidate",
          "voterId": "4a158b00-0187-11ea-a56b-a7b17dfd8fdc",
          "origin": "smartvote",
          "answers": answers
          ,
          "env": "production",
          "questionnaireType": "deluxe",
          "userSurvey": "{\"yearOfBirth\":\"\",\"educationId\":\"\",\"gender\":\"\",\"interest\":\"\",\"orientation\":\"\",\"party\":\"\",\"zip\":\"\"}"
        }
      },
      "query": "mutation CreateRecommendation($options: RecommendationOptionsInput!) {\n  createRecommendation(options: $options) {\n    id\n    __typename\n  }\n}\n"
    };
    requester.method = "POST";
    requester.generateRequest();
  }

  _requestCalculation(id){
    var requester = this.$.smartVoteCalculationRequester;
    requester.url = this.$.connector.getSmartvoteUrl();
    requester.body = {
      "operationName": "recommendationQuery",
      "variables":{"id":id},
      "query":"query recommendationQuery($id: String!, $offset: Int, $limit: Int) {\n  recommendation(id: $id, offset: $offset, limit: $limit) {\n    ...Recommendation\n    __typename\n  }\n}\n\nfragment Recommendation on Recommendation {\n  id\n  matchings {\n    ...Matching\n    __typename\n  }\n  options {\n    ...RecommendationOptions\n    __typename\n  }\n  voter {\n    id\n    smartspider {\n      id\n      axes {\n        id\n        cleavage {\n          id\n          name\n          __typename\n        }\n        value\n        __typename\n      }\n      options {\n        id\n        cssClass\n        fill\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment Matching on Matching {\n  id\n  responderId\n  responderType\n  responder {\n    ... on Candidate {\n      id\n      firstname\n      lastname\n      yearOfBirth\n      profileImageUrl\n      isIncumbent\n      isElected\n      gender\n      partyAbbreviation\n      partyColor\n      hasSmartvoteProfile\n      listPlaces {\n        id\n        position\n        number\n        __typename\n      }\n      __typename\n    }\n    ... on List {\n      id\n      name\n      hasSmartvoteProfile\n      nofRegisteredCandidates\n      nofConfirmedCandidates\n      colorCode\n      candidateMatchings {\n        responderId\n        matchValue\n        categoryMatchings {\n          ...CategoryMatching\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  matchValue\n  rank\n  categoryMatchings {\n    ...CategoryMatching\n    __typename\n  }\n  __typename\n}\n\nfragment RecommendationOptions on RecommendationOptions {\n  id\n  electionId\n  districtId\n  nofAnswers\n  responderType\n  __typename\n}\n\nfragment CategoryMatching on CategoryMatching {\n  id\n  categoryId\n  matchValue\n  __typename\n}\n"
    };
    requester.method = "POST";
    requester.generateRequest();
  }

  _requestCandidate(){
    for (var i = 0; i < this.candidatesRequest.length; i++) {
      var candidateId = this.candidatesRequest[i].id;
      var requester = this.$.smartVoteRequesterCandidateInfo;
      requester.url = this.$.connector.getSmartvoteUrl();
      requester.body = {
        "operationName":"getCandidate",
        "variables":{
          "electionId": this.idForVotingElectionId,
          "candidateId": candidateId
        },
        "query":"query getCandidate($electionId: ID!, $candidateId: ID!) {\n  candidate(electionId: $electionId, candidateId: $candidateId) {\n    ...PublicCandidate\n    __typename\n  }\n}\n\nfragment PublicCandidate on Candidate {\n  id\n  firstname\n  lastname\n  yearOfBirth\n  city\n  country\n  publicEmailAddress\n  gender\n  denomination {\n    id\n    name\n    __typename\n  }\n  civilState {\n    id\n    name\n    __typename\n  }\n  nofChildren\n  isIncumbent\n  isElected\n  district {\n    id\n    name\n    __typename\n  }\n  party {\n    id\n    color\n    name\n    abbreviation\n    __typename\n  }\n  list {\n    id\n    name\n    __typename\n  }\n  listPlaces {\n    id\n    position\n    number\n    __typename\n  }\n  profileImageUrl\n  slogan\n  commentedTopics {\n    id\n    name\n    comment\n    sortorder\n    __typename\n  }\n  funding {\n    id\n    amount\n    comment\n    __typename\n  }\n  politicalMandates {\n    id\n    name\n    dateStart\n    dateEnd\n    __typename\n  }\n  vestedInterests {\n    id\n    sortorder\n    name\n    board {\n      id\n      name\n      __typename\n    }\n    position {\n      id\n      name\n      __typename\n    }\n    legalForm {\n      id\n      name\n      __typename\n    }\n    __typename\n  }\n  website\n  facebook\n  twitter\n  instagram\n  video\n  additionalLink\n  education {\n    id\n    name\n    __typename\n  }\n  occupation\n  employers\n  hobbies\n  favoriteBooks\n  favoriteMovies\n  favoriteMusic\n  smartspider {\n    id\n    options {\n      id\n      cssClass\n      fill\n      __typename\n    }\n    axes {\n      id\n      cleavage {\n        id\n        name\n        __typename\n      }\n      value\n      __typename\n    }\n    __typename\n  }\n  hasSmartvoteProfile\n  answers {\n    ...Answer\n    __typename\n  }\n  __typename\n}\n\nfragment Answer on Answer {\n  id\n  questionId\n  value\n  weight\n  comment\n  __typename\n}\n"
      };
      requester.method = "POST";
      requester.generateRequest();
    }
  }

  _receivedRecommendationId(e){
    var id = e.detail.response.data.createRecommendation.id;
    this._requestCalculation(id)
  }

  _receivedCalculation(e){
    var candidatesWithMatchings = e.detail.response.data.recommendation.matchings;
    var myCandidatesMatchinginfo = [];
    for (var i = 0; i < candidatesWithMatchings.length; i++) {
      let myCandidate = {};
      myCandidate.id = candidatesWithMatchings[i].responder.id;
      myCandidate.firstName = candidatesWithMatchings[i].responder.firstname;
      myCandidate.lastName = candidatesWithMatchings[i].responder.lastname;
      myCandidate.match = candidatesWithMatchings[i].matchValue ? candidatesWithMatchings[i].matchValue: "N/A";
      myCandidatesMatchinginfo.push(myCandidate)
    }
    this.set('candidatesRequest', myCandidatesMatchinginfo);
    this._requestCandidate();
  }

  _receivedCandidate(e){
    var id = e.detail.response.data.candidate.id;
    var index = this.candidatesRequest.findIndex(x => x.id == id)
    this.candidatesRequest[index].answers = e.detail.response.data.candidate.answers;
    this._calculateActualValue(index);
  }

  _errorReceivingCantons(){
    alert("Could not get cantons");
  }

  _idErrorRequest(){
    alert("could not get id for calculation!");
  }

  _calculationErrorRequest(){
    alert("could not get calculation for id!");
  }
  _candidateFetchingRequest(){
    alert("could not fetch candidate!");
  }

  _cantonChanged(){
    this._changeVotingParameters();
  }

  _changedElectionType(){
    this._changeVotingParameters();
  }

  _changeVotingParameters(){
    if (this.$.cantonSelectorDropdown.selected || this.$.cantonSelectorDropdown.selected == 0) {
      this.idForVotingDistrict = this.$.electionTypeChanger.checked ? this.dropdownCantons[this.$.cantonSelectorDropdown.selected].idNr : this.dropdownCantons[this.$.cantonSelectorDropdown.selected].idSr;
    }
    this.idForVotingElectionId = this.$.electionTypeChanger.checked ? "222" : "223";
  }

  static get template () {
    return html`
    <style>
    .flexBox{
      display: flex;
    }
    .flexBoxWrapper{
      display: flex;
      flex-direction: column;
      padding: 2%;
    }
    .candidateRowFlexBox, .headerFlexBox{
      display: flex;
      justify-content: space-between;
    }
    .centeredInFlexbox {
      align-self: center;
    }
    .flexEnd {
      align-self: flex-end;
    }
    .flexStart{
      align-self: flex-start;
    }
    .rightAlignedNumber {
      text-align: right;
    }
    .leftAlignedNameSection {
      text-align: left;
    }
    .goodErrorMargin {
      color: green;
    }
    .badErrorMargin {
      color: red;
    }
    .marginRight {
      margin-right: 5%;
    }
    .marginTop {
      margin-top:1%;
    }

    </style>

    <div class="flexBoxWrapper">
    <h1 class="centeredInFlexbox">Swiss voting advice verifier (only smartvote)</h1>
    <div class="flexBox">
    <paper-dropdown-menu class="flexStart marginRight" label="Select your canton">
    <paper-listbox id="cantonSelectorDropdown" slot="dropdown-content" on-selected-changed="_cantonChanged">
    <template id ="dropDownForSelection" is="dom-repeat" items="{{dropdownCantons}}">
    <paper-item>{{item.name}}</paper-item>
    </template>
    </paper-listbox>
    </paper-dropdown-menu>
    <div class="flexBox marginTop">
    <span class="centeredInFlexbox marginRight">Ständerat</span>
    <paper-toggle-button id="electionTypeChanger" noink on-checked-changed="_changedElectionType"></paper-toggle-button>
    <span class="centeredInFlexbox">Nationalrat</span>
    </div>
    </div>
    <p>Enter the answers you want to evaluate (F12 -> graphhql -> operationName = "CreateRecommendation" -> variables.answers (view source))</p>
    <paper-input id="jsonInput" label="Enter your json-recommendation!"></paper-input>
    <paper-button class="flexEnd" raised on-click="_requestRequestRecommendationId">Calculate match</paper-button>
    <table>
    <tr>
    <th class="leftAlignedNameSection">First name</th>
    <th class="leftAlignedNameSection">Last name</th>
    <th class="rightAlignedNumber">smartvote value</th>
    <th class="rightAlignedNumber">Calculated value</th>
    <th class="rightAlignedNumber">Error margin</th>
    </tr>
    <template is="dom-repeat" items="{{candidatesRequest}}">
    <tr>
    <td class="leftAlignedNameSection">{{item.firstName}}</td>
    <td class="leftAlignedNameSection">{{item.lastName}}</td>
    <td class="rightAlignedNumber">{{item.matchSmartvotePercentage}}</td>
    <td class="rightAlignedNumber">{{item.calculatedMatch}}</td>
    <td  class$="[[item.colorError]] rightAlignedNumber">{{item.errorMargin}}</td>
    </tr>
    </template>
    </table>
    </div>
    <service-connector id="connector"><service-connector>
    <iron-ajax id="smartVoteIdRequester" handle-as="json" content-type="application/json" on-response=_receivedRecommendationId on-error="_idErrorRequest"></iron-ajax>
    <iron-ajax id="smartVoteCalculationRequester" handle-as="json" content-type="application/json" on-response=_receivedCalculation on-error="_calculationErrorRequest"></iron-ajax>
    <iron-ajax id="smartVoteRequesterCandidateInfo" handle-as="json" content-type="application/json" on-response=_receivedCandidate on-error="_candidateFetchingRequest"></iron-ajax>
    `;
  }
}

// Register the element with the browser.
customElements.define('swiss-voting-advice-verifier', SwissVotingAdviceVerifier);
