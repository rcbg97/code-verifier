# Swiss Voting Advice Verifier

This is a code verifier for Swiss voting advice applications (currently only smartvote is working though, as I haven't figured out a way to test vimentis).
It has been programmed in polymer. -> https://polymer-library.polymer-project.org/3.0/docs/install-3-0 -> npm install

## How to use

**smartvote:**

fill out some questions in the questionnaire -> you can skip the additional information part as it will no be needed for the verifier -> in the section "Wählen Sie die Kriterien für Ihre Wahlempfehlung" choose anything -> go to the network look for a *post request* with *Request URL:* https://concierge.smartvote.ch/graphql and in the *body* for the *operationName* "CreateRecommendation". -> view it as source, copy then *answers* and insert it into the field.
 
## Results

Smartvote -> algorithm appears to work with Ständeräte/Nationalräte (json with answers)
