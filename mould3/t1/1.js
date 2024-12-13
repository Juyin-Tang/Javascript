"use strict";

let result = `
<ul id="target" class="my-list">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>`;

document.getElementById("target").innerHTML = result;
document.getElementById("target").classList.add("my-list");