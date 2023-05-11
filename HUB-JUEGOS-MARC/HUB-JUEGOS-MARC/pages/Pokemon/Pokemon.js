import "./Pokemon.css";
import { printButtons } from "../../components/buttonPokemon/ButtonPokemon";
import { createAndPrintFigure } from "../../components/CardPokemon/CardPokemon";
import { dataPokemon, filterPokemon } from "../../utils/dataPokemon";




let dataServicePokemon;
let typeGlobal;
const template = () =>
  ` <div id="pokemon">
    <div id="containerFilter">
      <div id="filterButton"></div>
      <input type="text" id="inputPokemon" placeholder="Busca tu pokemon favorito"/>
    </div>

    <div class="galleryPokemon"></div>
  </div>`;

const dataService = async () => {
  //llamamos al servicio para traer la DATA y le metemos la info a la variable global dataServicePokemon
  const getData = await dataPokemon();
  /// sacamos por destructuring los dos elementos que nos envia la funcion
  const { type, pokemonData } = getData;
  /// se lo asignamos a las variables globales
  dataServicePokemon = pokemonData;
  typeGlobal = type;
  //Enviamos la funcion para pintar las figure
  createAndPrintFigure(dataServicePokemon);
  /// me llamo a pintar los botones
  printButtons(type);
};


const addListeners = () => {
  /// EVENTO TO INPUT
  const inputPokemon = document.getElementById("inputPokemon");
  inputPokemon.addEventListener("input", (e) => {
    /// ----> Llamo a la funcion que se encarga de filtrar los elementos
    filterPokemon(e.target.value, "name");
  });
};


export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  dataService();
  addListeners();
};
