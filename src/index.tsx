import * as React from "react";
import * as ReactDOM from "react-dom";

import * as main from "./shogi_nebula/main";

const mainCanvas = document.getElementById("mainCanvas");

if (mainCanvas instanceof HTMLCanvasElement) {
    main.initialize(mainCanvas);
} else {
    console.error("Element not found: mainCanvas");
}