import { printTemplate as printHeader } from "../components/Header/Header";

export const initTemplate=() => {
const app=document.querySelector("#app");
const main = document.createElement("main");
const header = document.createElement("header");
const footer = document.createElement("footer");

app.append(header,main, footer);
printHeader();
};
