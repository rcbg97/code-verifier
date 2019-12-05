import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/paper-button/paper-button.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';

class SwissVotingAdviceVerifier extends PolymerElement {
  static get properties () {
    return {
      message: {
        type: String,
        value: ''
      },
      candidates: {
        type: Array,
        value: [{firstName: "Nicole", lastName:"Barandun", match: 48.9, answers: [
          {
            "id": "44400007640",
            "questionId": "3412",
            "value": 25,
            "weight": "SAME",
            "comment": "In einem ersten Schritt ist das Rentenalter der Frauen zu erhöhen, wobei soziale Abfederungen vorzusehen sind.",
            "__typename": "Answer"
          },
          {
            "id": "44400007642",
            "questionId": "3413",
            "value": 100,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007643",
            "questionId": "3414",
            "value": 75,
            "weight": "SAME",
            "comment": "Ich befürworte einen Vaterschaftsurlaub, halte aber eine Dauer von zwei Wochen für eher Mehrheitsfähig und auch für kleinere Unternehmen für praktikabler.",
            "__typename": "Answer"
          },
          {
            "id": "44400007644",
            "questionId": "3415",
            "value": 100,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007645",
            "questionId": "3416",
            "value": 0,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007646",
            "questionId": "3417",
            "value": 25,
            "weight": "SAME",
            "comment": "Ich erachte das primär als eine Gemeinde, in zweiter Linie als Kantonsaufgabe",
            "__typename": "Answer"
          },
          {
            "id": "44400007649",
            "questionId": "3418",
            "value": 25,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007650",
            "questionId": "3419",
            "value": 100,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007653",
            "questionId": "3420",
            "value": 75,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007654",
            "questionId": "3421",
            "value": 0,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007655",
            "questionId": "3422",
            "value": 100,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007656",
            "questionId": "3423",
            "value": 75,
            "weight": "SAME",
            "comment": "Grundsätzlich ist es Aufgabe der Volksschule, alle Kinder zu unterstützen. In einzelnen Fällen kann individuelle Förderung aber angezeigt sein.",
            "__typename": "Answer"
          },
          {
            "id": "44400007657",
            "questionId": "3424",
            "value": 0,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007658",
            "questionId": "3425",
            "value": 75,
            "weight": "SAME",
            "comment": "Dies muss man prüfen. Lebenslanges Lernen ist essentiel für die Arbeitsplatzsicherung. In erster Linie stehen Unternehmen und der Arbeitnehmer in der Pflicht.",
            "__typename": "Answer"
          },
          {
            "id": "44400007659",
            "questionId": "3426",
            "value": 75,
            "weight": "SAME",
            "comment": "Ich befürworte die integrative Schule, wobei durchaus Grenzen möglich sind, wenn ein geregelter Unterricht nicht mehr gewährleistet werden kann.",
            "__typename": "Answer"
          },
          {
            "id": "44400007660",
            "questionId": "3427",
            "value": 25,
            "weight": "SAME",
            "comment": "ch bin eher skeptisch und würde, wenn schon, die Ausübung des Stimm- und Wahlrechts nicht nur an die Dauer des Aufenthaltes knüpfen, sondern auch Integrationsbemühungen (Sprache, Interesse) erwarten. Da wäre allenfalls die Niederlassungsbewilligung das geeignete Qualifikationsmittel. Schliesslich müsste die Frage der Abgeltung des Militärdienstes geklärt werden.",
            "__typename": "Answer"
          },
          {
            "id": "44400007661",
            "questionId": "3428",
            "value": 0,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007662",
            "questionId": "3429",
            "value": 25,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007663",
            "questionId": "3430",
            "value": 0,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007664",
            "questionId": "3431",
            "value": 0,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007665",
            "questionId": "3391",
            "value": 75,
            "weight": "SAME",
            "comment": "z.B. sprachliche Integration",
            "__typename": "Answer"
          },
          {
            "id": "44400007666",
            "questionId": "3392",
            "value": 75,
            "weight": "SAME",
            "comment": "Ich kann mir ein Verkauf an Erwachsene z.B. in Apotheken vorstellen.",
            "__typename": "Answer"
          },
          {
            "id": "44400007667",
            "questionId": "3432",
            "value": 100,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007668",
            "questionId": "3433",
            "value": 0,
            "weight": "SAME",
            "comment": "Insbesondere das Verbot der Leihmutterschaft - welche oft eine Form der Ausbeutung darstellt oder zumindest ein erhöhtes gesundheitliches Risiko für die Leihmutter mit sich bringt - ist aufrecht zu erhalten.",
            "__typename": "Answer"
          },
          {
            "id": "44400007669",
            "questionId": "3434",
            "value": 75,
            "weight": "SAME",
            "comment": "Wobei sicherzustellen ist, dass Kleinunternehmen ausgenommen sind - erst ab einer gewissen Unternehmensgrösse können gute Vergleichsergebnisse erzielt werden.",
            "__typename": "Answer"
          },
          {
            "id": "44400007670",
            "questionId": "3435",
            "value": 0,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007671",
            "questionId": "3436",
            "value": 25,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007672",
            "questionId": "3437",
            "value": 75,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007673",
            "questionId": "3438",
            "value": 25,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007674",
            "questionId": "3439",
            "value": 25,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007675",
            "questionId": "3440",
            "value": 75,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007676",
            "questionId": "3441",
            "value": 0,
            "weight": "SAME",
            "comment": "Dies ist Aufgabe der Sozialpartner",
            "__typename": "Answer"
          },
          {
            "id": "44400007677",
            "questionId": "3442",
            "value": 75,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007678",
            "questionId": "3443",
            "value": 25,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007679",
            "questionId": "3444",
            "value": 25,
            "weight": "SAME",
            "comment": "Wobei im Rahmen der bestehenden Massnahmen im Arbeitsrecht (Abfindung) durchaus eine Verschärfung denkbar ist.",
            "__typename": "Answer"
          },
          {
            "id": "44400007680",
            "questionId": "3445",
            "value": 75,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007681",
            "questionId": "3446",
            "value": 100,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007682",
            "questionId": "3447",
            "value": 75,
            "weight": "SAME",
            "comment": "Das gilt in meinen Augen weniger für Uber aber schon für Airbnb-Unterkünfte, wo in urbanen Gebieten Wohnungen dem lokalen Markt entzogen werden.",
            "__typename": "Answer"
          },
          {
            "id": "44400007683",
            "questionId": "3448",
            "value": 75,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007684",
            "questionId": "3449",
            "value": 75,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007685",
            "questionId": "3450",
            "value": 100,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007686",
            "questionId": "3451",
            "value": 0,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007687",
            "questionId": "3452",
            "value": 25,
            "weight": "SAME",
            "comment": "Wenn, dann müsste man vielmehr die Einführung von Mobility-Pricing prüfen",
            "__typename": "Answer"
          },
          {
            "id": "44400007688",
            "questionId": "3453",
            "value": 0,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007689",
            "questionId": "3454",
            "value": 100,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007690",
            "questionId": "3455",
            "value": 100,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007691",
            "questionId": "3456",
            "value": 100,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007692",
            "questionId": "3457",
            "value": 100,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007693",
            "questionId": "3458",
            "value": 75,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007694",
            "questionId": "3459",
            "value": 25,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007695",
            "questionId": "3398",
            "value": 0,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007696",
            "questionId": "3461",
            "value": 100,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007697",
            "questionId": "3462",
            "value": 75,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007698",
            "questionId": "3463",
            "value": 100,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007699",
            "questionId": "3468",
            "value": 0,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007700",
            "questionId": "3469",
            "value": 75,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007701",
            "questionId": "3470",
            "value": 75,
            "weight": "SAME",
            "comment": "Ich würde den Gegenvorschlag unterstützen",
            "__typename": "Answer"
          },
          {
            "id": "44400007704",
            "questionId": "3471",
            "value": 25,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007706",
            "questionId": "3387",
            "value": 33,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007707",
            "questionId": "3465",
            "value": 83,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007708",
            "questionId": "3399",
            "value": 33,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007709",
            "questionId": "3389",
            "value": 0,
            "weight": "SAME",
            "comment": "Das kann die beste Lösung sein, muss aber nicht.",
            "__typename": "Answer"
          },
          {
            "id": "44400007710",
            "questionId": "3466",
            "value": 67,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007712",
            "questionId": "3388",
            "value": 33,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007713",
            "questionId": "3467",
            "value": 67,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007722",
            "questionId": "3464",
            "value": 75,
            "weight": "SAME",
            "comment": "Die gesetzlichen Grundlagen müssen allerdings klar und auf einzelne Delikte begrenzt sein",
            "__typename": "Answer"
          },
          {
            "id": "44400007724",
            "questionId": "3472",
            "value": 50,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007725",
            "questionId": "3473",
            "value": 50,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007726",
            "questionId": "3474",
            "value": 50,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007727",
            "questionId": "3475",
            "value": 50,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007728",
            "questionId": "3476",
            "value": 50,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007729",
            "questionId": "3477",
            "value": 50,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007730",
            "questionId": "3478",
            "value": 50,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007731",
            "questionId": "3479",
            "value": 50,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          },
          {
            "id": "44400007732",
            "questionId": "3460",
            "value": 0,
            "weight": "SAME",
            "comment": null,
            "__typename": "Answer"
          }
        ]}]
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

  _calculateActualValue(){
    var distance = 0;
    var maxDistance = 0;
    var matching = 0;
    var j = 0;
    for (var i = 0; i < this.answers.length; i++) {
      var candidateValue = this.candidates[0].answers.find(x => x.questionId === this.answers[i].questionId).value;
      var myValue = this.answers[i].value;
      var myWeight = this.answers[i].weight === "DOUBLE" ? 2 : this.answers[i].weight === "HALF" ? 0.5 : 1;
      distance += Math.pow(myWeight * (myValue - candidateValue), 2);
      maxDistance += Math.pow((100 * myWeight), 2);
    }
    distance = Math.sqrt(distance);
    maxDistance = Math.sqrt(maxDistance);
    matching = 100 * (1- (distance/maxDistance));
    this.set('candidates.' + j + '.calculatedMatch', matching);
  }

  static get template () {
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
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
    td {
      text-align: center;
    }
    </style>

    <div class="flexBoxWrapper">
    <h1>Swiss voting advice verifier</h1>
    <paper-button raised on-click="_calculateActualValue">Calculate match</paper-button>
    <table>
    <tr>
    <th>First name</th>
    <th>Last name</th>
    <th>Match value</th>
    <th>Calculated value</th>
    </tr>
    <template is="dom-repeat" items={{candidates}}>
    <tr>
    <td>{{item.firstName}}</td>
    <td>{{item.lastName}}</td>
    <td>{{item.match}}</td>
    <td>{{item.calculatedMatch}}</td>
    </tr>
    </template>
    </table>
    </div>
    `;
  }
}

// Register the element with the browser.
customElements.define('swiss-voting-advice-verifier', SwissVotingAdviceVerifier);
