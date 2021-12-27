function introduction(name) {
    return `Hi, my name is ${name}.`;
}
function introductionWithLanguage(name, language){
if (language === null){
    language = "JavaScript";
}
return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
function introductionWithLanguageOptional(name, language){
    if (language === null){
        language = "JavaScript";
    } else if (language===undefined){
        language = "JavaScript";
    }
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}