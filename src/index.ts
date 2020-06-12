import {View, Server} from "grandjs";
import path, { resolve } from "path";
// `${__dirname}/components`
View.settings.set("views",path.join("/node_modules", "/grand-swagger/lib/components"));
import SwaggerUiDist from "swagger-ui-dist";
const SwaggerComponent = View.importJsx("/main.jsx");

Server.static({
    url: "/swagger-assets",
    path: SwaggerUiDist.getAbsoluteFSPath()
})

export {SwaggerComponent}
