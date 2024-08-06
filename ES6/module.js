// importer un seul export depuis un module 
import {hello} from "./logger.js";
hello()

// importer plusieurs exportés depuis un module 
import {TYPE_ERROR, TYPE_LOG, TYPE_WARN} from "./logger.js";
console.log(TYPE_ERROR);
console.log(TYPE_LOG);
console.log(TYPE_WARN);

//Importer un élément exporté avec un alias ( renommer un export lors de l'importation. Par exemple, ce qui suit insère nomCourt dans la portée courante.)
//import { TYPE_LOG as log } from "./logger.js";
// Renommer plusieurs exports pendant l'import
import { TYPE_LOG as log,
    TYPE_WARN as warn,
    TYPE_ERROR as error,
} from "./logger.js";
console.log(warn)
//Importer un module uniquement pour ses effets de bord
import "./logger.js"
// Importation des défauts: Il est possible d'avoir un export par défaut (que ce soit un objet, une fonction, une classe, etc.). L'instruction import peut alors être utilisée pour importer ces défauts.
import logger from "./logger.js";
logger("Thuy")