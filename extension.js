const Toolpackage = require('chioro-toolbox/toolpackage')
const base = require('chioro-toolbox/toolbase')

// Toolbox extensions are organized as "Tool Packages".
// A ToolPackage is a collection of tool descriptions, including tests.
// Exporting a ToolPackage object makes a JS module a toolbox extension (see last line)
// base refers to the standard chioro library and can be used anywhere in the code with
// the following syntax: base.nameOfTheStandardFunction

const tools = new Toolpackage("My great toolbox extension")

function epxLocalizedTxt(input) {
    var result = {}
    attributes()
        .filter(attr => attr.startsWith(input))
        .forEach(attr => {result[attr.replace(input+" " , "")] = source(attr)})
    return result
}
tools.add({
    id: "epxLocalizedTxt",
    impl: epxLocalizedTxt,
    aliases: {
        en: "epxLocalizedTxt",
        de: "epxLocalizedTxt"
    },
    argsOld: {
        en: "input",
        de: "input"
    },
    args: {
        en : [
            {
                "key" : "input",
                "label": "Value",
                "type": "text",
                "desc": "The attribute starts with this text (text to search)"
            }
        ],
        de : [
            {
                "key" : "input",
                "label": "Wert",
                "type": "text",
                "desc": "Mit diesem Text startet das Attribut (Suchtext)"
            }
        ]
    },
    tags: ["epx"],
    tests: () => {
    }
})

//-------------WRITE YOUR FUNCTIONS ABOVE THIS LINE------------------
tools.exportAll(exports)
