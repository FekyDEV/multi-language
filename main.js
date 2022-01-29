/**
* @name Multi-Language Support
* @description Multi-Language support made for Discord bots. (JavaScript)
* @author FekyDEV
* @authorId 603505971507101698
* @version 1.0.0
* @invite sKKEyUn
* @source https://github.com/FekyDEV/multi-language/new/main
* @license MIT
*/

// MULTI-LANGUAGE SUPPORT
function translate(what) {
    let lan = "sk"
    let translation = ""
    let data_locale = require(`./${lan}.json`)
    let en_data_locale = require(`./en.json`)

    let keyys = Object.keys(en_data_locale)
    let keyys_len = keyys.length
    let done = ""

    for (let i = 0; i < keyys_len; i++) {
        let kej = eval(`en_data_locale.${keyys[i]}.${what}`) || false

        if(kej !== false) {
            done = keyys[i]
        }
    }

    if(!done) return translation = "`error`";

    try{
        return translation = eval(`data_locale.${done}.${what}`);
    } catch {
        return translation = eval(`en_data_locale.${done}.${what}`);
    }

}
// END (MULTI-LANGUAGE SUPPORT)
