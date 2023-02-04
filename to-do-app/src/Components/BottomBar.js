import React, { useState } from "react";

export default function (props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <form class="d-flex" role="Text">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Text"
            aria-label="Search"
          ></input>
          <span class="material-symbols-outlined">add</span>
        </form>
      </div>
    </nav>
  );
}
