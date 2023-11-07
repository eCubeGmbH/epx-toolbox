const Toolpackage = require('chioro-toolbox/toolpackage')
const base = require('chioro-toolbox/toolbase')

// Toolbox extensions are organized as "Tool Packages".
// A ToolPackage is a collection of tool descriptions, including tests.
// Exporting a ToolPackage object makes a JS module a toolbox extension (see last line)
// base refers to the standard chioro library and can be used anywhere in the code with
// the following syntax: base.nameOfTheStandardFunction

const tools = new Toolpackage("My great toolbox extension")


function niceFunction(input1, input2) {
    return base.upperCaseText(input1) + " " + base.lowerCaseText(input2);
}
tools.add({
    id: "niceFunction",
    impl: niceFunction,
    aliases: {
        en: "niceFunction",
        de: "netteFunktion"
    },
    args: {
        en: "input1, input2",
        de: "eingabe1, eingabe2"
    },
    tags: ["test"],
    tests: () => {
        tools.expect(niceFunction("hello", "world")).toBe('HELLO world');
        tools.expect(niceFunction("Helping", "World")).toBe('HELPING world');
    }
})

function epxLocalizedTxt(input) {
    var result = {}
    attributes()
        .filter(attr => attr.startsWith(searchAttr))
        .forEach(attr => {result[attr.replace(searchAttr+" " , "")] = source(attr)})
    return result
}
tools.add({
    id: "epxLocalizedTxt",
    impl: epxLocalizedTxt,
    aliases: {
        en: "epxLocalizedTxt",
        de: "epxLocalizedTxt"
    },
    args: {
        en: "input1",
        de: "eingabe1"
    },
    tags: ["test"],
    tests: () => {
    }
})

//-------------WRITE YOUR FUNCTIONS ABOVE THIS LINE------------------
tools.exportAll(exports)
