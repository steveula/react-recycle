import React, { Component } from "react";
import { tipsAndFactsSource } from "../../lib/tipsAndFacts";

class Trivia extends Component {
  render() {
    const tipsAndFacts = { ...tipsAndFactsSource };
    delete tipsAndFacts["source"];

    const allFacts = [];
    for (let material in tipsAndFacts) {
      const materialFacts = tipsAndFacts[material].facts;
      Array.prototype.push.apply(allFacts, materialFacts);
    }
    // pick a random fact
    let randomFact = allFacts[Math.floor(Math.random() * allFacts.length)];

    return (
      <React.Fragment>
        <div className="alert alert-info alert-dismissible fade show">
          <h5 className="alert-heading">Did You Know?</h5>
          <p>{randomFact}</p>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Trivia;
