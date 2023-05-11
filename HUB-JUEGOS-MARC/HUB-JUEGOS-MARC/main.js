import './style.css'
//el template con el que mostraremos el header,main y footer
import {initTemplate} from "./utils/initTemplate";

// funcion con un switch para controlar pagina que renderizaremos
import { initControler } from './utils/route';

initTemplate();
initControler();


