function translatePigLatin(str) {
    return "aeiou".includes(str[0])
        ? str + "way"
        : str.replace(/(^[^\Waeiou]+)(.*)/, "$2$1ay");
}

translatePigLatin("schwartz");
