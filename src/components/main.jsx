const {View} = require("grandjs");


const SwaggerComponent = ({file, specs}) => {
    return (
        <html lang={"en"}>
        <head>
        <meta charset="utf-8"/>
        <link rel="stylesheet" type="text/css" href="swagger-ui.css"/>
        </head>
        <body>
        <div id="swagger-ui"></div>
            <script src="swagger-ui-bundle.js"></script>
            <script src="swagger-ui-standalone-preset.js"></script>
            <script>
            {`
                window.onload = function() {
                    let ui = SwaggerUIBundle({
                        spec: ${JSON.stringify(specs)},
                        dom_id: '#swagger-ui',
                        deepLinking: true,
                        layout: 'StandaloneLayout',
                        presets: [
                          SwaggerUIBundle.presets.apis,
                          SwaggerUIStandalonePreset
                        ],
                        plugins: [
                            SwaggerUIBundle.plugins.DownloadUrl
                        ],
                      })
                    
                      window.ui = ui
                  }
            `}
            </script>
        </body>
        </html>
    )
}

module.exports = SwaggerComponent;