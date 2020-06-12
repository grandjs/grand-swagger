import {View} from "grandjs";
import path, { resolve } from "path";
View.settings.set("views", path.join("/src", "/components"));
import SwaggerUiDist from "swagger-ui-dist";
const SwaggerComponent = View.importJsx("/main.jsx");


export default {SwaggerComponent}
