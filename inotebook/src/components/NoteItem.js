import React from "react";

const NoteItem = () => {
  return (
    <div className="col-md-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button href="/" class="card-link">
            Card link
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;