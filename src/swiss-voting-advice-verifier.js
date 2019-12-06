import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './service-connector.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';

class SwissVotingAdviceVerifier extends PolymerElement {
  static get properties () {
    return {
      message: {
        type: String,
        value: ''
      },
      candidateMock: {
        type: Array,
        value: [{firstName: "Paulin", lastName:"Kqira", match: 51.2, id: 44400010203}, {firstName: "Nik", lastName: "Gugger", match: 49.1, id: 44400000196},
        {firstName: "Nicole", lastName:"Barandun", match: 48.9, id: 44400000194}, {firstName: "Tiana", lastName: "Moser", match: 44.9, id: 44400000348},
        {firstName: "Dario", lastName: "Miglioretto", match: 43.3, id: 44400027461}, {firstName: "Klaus", lastName: "Marte", match: 40.8, id: 44400017786},
        {firstName: "Ruedi", lastName:"Noser", match: 40.8, id: 44400000124}, {firstName: "Jan", lastName: "Linhart", match: 40.6, id: 44400000385},
        {firstName: "Daniel", lastName: "Jositsch", match: 38.4, id: 44400000123}, {firstName: "Marionna", lastName: "Schlatter-Schmid", match: 37.3, id: 44400000195},
        {firstName: "Roger", lastName: "Köppel", match: "N/A", id: 44400001296}]
      },
      candidates :{
        type: Array
      },
      answers: {
        type: Array,
        value:[
          {
            "questionId": "3387",
            "value": 83,
            "weight": "DOUBLE"
          },
          {
            "questionId": "3388",
            "value": 83,
            "weight": "SAME"
          },
          {
            "questionId": "3389",
            "value": 100,
            "weight": "SAME"
          },
          {
            "questionId": "3391",
            "value": 0,
            "weight": "DOUBLE"
          },
          {
            "questionId": "3392",
            "value": 100,
            "weight": "SAME"
          },
          {
            "questionId": "3398",
            "value": 25,
            "weight": "SAME"
          },
          {
            "questionId": "3399",
            "value": 0,
            "weight": "SAME"
          },
          {
            "questionId": "3412",
            "value": 0,
            "weight": "SAME"
          },
          {
            "questionId": "3413",
            "value": 0,
            "weight": "DOUBLE"
          },
          {
            "questionId": "3414",
            "value": 0,
            "weight": "HALF"
          },
          {
            "questionId": "3416",
            "value": 25,
            "weight": "SAME"
          },
          {
            "questionId": "3417",
            "value": 75,
            "weight": "SAME"
          },
          {
            "questionId": "3418",
            "value": 25,
            "weight": "SAME"
          },
          {
            "questionId": "3419",
            "value": 75,
            "weight": "SAME"
          },
          {
            "questionId": "3420",
            "value": 75,
            "weight": "SAME"
          },
          {
            "questionId": "3421",
            "value": 75,
            "weight": "SAME"
          },
          {
            "questionId": "3422",
            "value": 75,
            "weight": "SAME"
          },
          {
            "questionId": "3423",
            "value": 100,
            "weight": "SAME"
          },
          {
            "questionId": "3424",
            "value": 75,
            "weight": "SAME"
          },
          {
            "questionId": "3425",
            "value": 100,
            "weight": "SAME"
          },
          {
            "questionId": "3426",
            "value": 75,
            "weight": "SAME"
          },
          {
            "questionId": "3427",
            "value": 75,
            "weight": "SAME"
          },
          {
            "questionId": "3428",
            "value": 25,
            "weight": "SAME"
          },
          {
            "questionId": "3429",
            "value": 0,
            "weight": "DOUBLE"
          },
          {
            "questionId": "3430",
            "value": 75,
            "weight": "HALF"
          },
          {
            "questionId": "3431",
            "value": 25,
            "weight": "DOUBLE"
          },
          {
            "questionId": "3432",
            "value": 75,
            "weight": "SAME"
          },
          {
            "questionId": "3433",
            "value": 75,
            "weight": "SAME"
          },
          {
            "questionId": "3434",
            "value": 100,
            "weight": "SAME"
          },
          {
            "questionId": "3435",
            "value": 75,
            "weight": "SAME"
          },
          {
            "questionId": "3436",
            "value": 25,
            "weight": "SAME"
          },
          {
            "questionId": "3437",
            "value": 0,
            "weight": "SAME"
          },
          {
            "questionId": "3438",
            "value": 25,
            "weight": "SAME"
          },
          {
            "questionId": "3439",
            "value": 25,
            "weight": "DOUBLE"
          },
          {
            "questionId": "3440",
            "value": 0,
            "weight": "SAME"
          },
          {
            "questionId": "3441",
            "value": 25,
            "weight": "SAME"
          },
          {
            "questionId": "3443",
            "value": 100,
            "weight": "SAME"
          },
          {
            "questionId": "3444",
            "value": 25,
            "weight": "SAME"
          },
          {
            "questionId": "3445",
            "value": 0,
            "weight": "SAME"
          },
          {
            "questionId": "3446",
            "value": 100,
            "weight": "SAME"
          },
          {
            "questionId": "3447",
            "value": 25,
            "weight": "SAME"
          },
          {
            "questionId": "3448",
            "value": 100,
            "weight": "SAME"
          },
          {
            "questionId": "3449",
            "value": 75,
            "weight": "SAME"
          },
          {
            "questionId": "3450",
            "value": 100,
            "weight": "SAME"
          },
          {
            "questionId": "3451",
            "value": 0,
            "weight": "SAME"
          },
          {
            "questionId": "3452",
            "value": 25,
            "weight": "SAME"
          },
          {
            "questionId": "3453",
            "value": 0,
            "weight": "SAME"
          },
          {
            "questionId": "3454",
            "value": 100,
            "weight": "SAME"
          },
          {
            "questionId": "3455",
            "value": 25,
            "weight": "SAME"
          },
          {
            "questionId": "3456",
            "value": 100,
            "weight": "SAME"
          },
          {
            "questionId": "3457",
            "value": 0,
            "weight": "SAME"
          },
          {
            "questionId": "3458",
            "value": 100,
            "weight": "SAME"
          },
          {
            "questionId": "3459",
            "value": 25,
            "weight": "SAME"
          },
          {
            "questionId": "3460",
            "value": 100,
            "weight": "SAME"
          },
          {
            "questionId": "3461",
            "value": 75,
            "weight": "SAME"
          },
          {
            "questionId": "3462",
            "value": 25,
            "weight": "SAME"
          },
          {
            "questionId": "3463",
            "value": 0,
            "weight": "SAME"
          },
          {
            "questionId": "3464",
            "value": 0,
            "weight": "SAME"
          },
          {
            "questionId": "3465",
            "value": 17,
            "weight": "SAME"
          },
          {
            "questionId": "3466",
            "value": 33,
            "weight": "SAME"
          },
          {
            "questionId": "3467",
            "value": 0,
            "weight": "SAME"
          },
          {
            "questionId": "3468",
            "value": 100,
            "weight": "SAME"
          },
          {
            "questionId": "3469",
            "value": 75,
            "weight": "SAME"
          },
          {
            "questionId": "3470",
            "value": 25,
            "weight": "SAME"
          },
          {
            "questionId": "3471",
            "value": 0,
            "weight": "SAME"
          },
          {
            "questionId": "3472",
            "value": 100,
            "weight": "SAME"
          },
          {
            "questionId": "3473",
            "value": 25,
            "weight": "SAME"
          },
          {
            "questionId": "3474",
            "value": 75,
            "weight": "SAME"
          },
          {
            "questionId": "3475",
            "value": 0,
            "weight": "SAME"
          },
          {
            "questionId": "3476",
            "value": 75,
            "weight": "SAME"
          },
          {
            "questionId": "3477",
            "value": 25,
            "weight": "SAME"
          },
          {
            "questionId": "3478",
            "value": 75,
            "weight": "SAME"
          },
          {
            "questionId": "3479",
            "value": 100,
            "weight": "SAME"
          }
        ]
      }
    };
  }

  _calculateActualValue(index){
    var distance = 0;
    var maxDistance = 0;
    var matching = 0;
    for (var i = 0; i < this.answers.length; i++) {
      if (this.candidates[index].answers.length == 0) {
        this.set('candidates.' + index + '.calculatedMatch', "N/A");
        this.set('candidates.' + index + '.errorMargin', "N/A");
        return;
      }
      var candidateValue = this.candidates[index].answers.find(x => x.questionId === this.answers[i].questionId).value;
      var myValue = this.answers[i].value;
      var myWeight = this.answers[i].weight === "DOUBLE" ? 2 : this.answers[i].weight === "HALF" ? 0.5 : 1;
      distance += Math.pow(myWeight * (myValue - candidateValue), 2);
      maxDistance += Math.pow((100 * myWeight), 2);
    }
    distance = Math.sqrt(distance);
    maxDistance = Math.sqrt(maxDistance);
    matching = 100 * (1- (distance/maxDistance));
    var errorMargin = (matching - this.candidates[index].match) / matching * 100 > 0 ?  "+" + ((matching - this.candidates[index].match) / matching * 100).toFixed(2) + "%" : ((matching - this.candidates[index].match) / matching * 100).toFixed(2) + "%";
    var colorErrorMargin = Math.abs((matching - this.candidates[index].match) / matching) < 0.01 ?  "goodErrorMargin" : "badErrorMargin";
    matching = matching.toFixed(1) + "%";
    this.set('candidates.' + index + '.calculatedMatch', matching);
    this.set('candidates.' + index + '.errorMargin', errorMargin);
    this.set('candidates.' + index + '.colorError', colorErrorMargin);
  }

  _requestRequestRecommendationId(){
    var answers = JSON.parse(this.$.jsonInput.value);
    this.answersRequest = answers;
    var requester = this.$.smartVoteIdRequester;
    requester.url = this.$.connector.getSmartvoteUrl();
    requester.body = {
      "operationName": "CreateRecommendation",
      "variables": {
        "options": {
          "electionId": "223",
          "districtId": "44400000024",
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
    for (var i = 0; i < this.candidates.length; i++) {
      var candidateId = this.candidates[i].id;
      var requester = this.$.smartVoteRequesterCandidateInfo;
      requester.url = this.$.connector.getSmartvoteUrl();
      requester.body = {
        "operationName":"getCandidate",
        "variables":{
          "electionId":"223",
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
    this.set('candidatesRequest', myCandidatesMatchinginfo)
  }

  _receivedCandidate(e){
    var id = e.detail.response.data.candidate.id;
    var index = this.candidates.findIndex(x => x.id == id)
    this.candidates[index].answers = e.detail.response.data.candidate.answers;
    this._calculateActualValue(index);
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

  static get template () {
    return html`
    <style>
    .flexBoxWrapper{
      display: flex;
      flex-direction: column
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
    </style>

    <div class="flexBoxWrapper">
    <h1 class="centeredInFlexbox">Swiss voting advice verifier (only smartvote right now, zurich-ständerat hahaha)</h1>
    <p>Enter the answers you want to evaluate (F12 -> graphhql -> operationName == "CreateRecommendation" -> variables.answers (view source))</p>
    <paper-input id="jsonInput" label="Enter your json-recommendation!"></paper-input>
    <paper-button class="flexEnd" raised on-click="_requestRequestRecommendationId">Calculate match</paper-button>
    <table>
    <tr>
    <th class="leftAlignedNameSection">First name</th>
    <th class="leftAlignedNameSection">Last name</th>
    <th class="rightAlignedNumber">Match value</th>
    <th class="rightAlignedNumber">Calculated value</th>
    <th class="rightAlignedNumber">Error margin</th>
    </tr>
    <template is="dom-repeat" items={{candidates}}>
    <tr>
    <td class="leftAlignedNameSection">{{item.firstName}}</td>
    <td class="leftAlignedNameSection">{{item.lastName}}</td>
    <td class="rightAlignedNumber">{{item.match}}</td>
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
