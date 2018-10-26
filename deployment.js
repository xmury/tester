// deployment = развертывание
var text; var arr = {};

function start() {
        var reader = new FileReader();
        reader.onload = function(e) { text = e.target.result; };
        reader.readAsText(file.files[0]);
}

function parser() {
    var start_char_add = false; var no_key = false;
    var key = ""; var word = ""; 

    for (var i = 0; i < text.length; i++){
        if ( (text[i] == "," || text[i] == ":") && !start_char_add) { continue; }

        if (text[i] == "\"" && !start_char_add) { start_char_add = true; continue; }
        if (text[i] == "\"" && start_char_add) { 
            start_char_add = false; 
            if (no_key)  { arr[key] = word; }
            if (!no_key) { no_key   = true; }
            continue; 
        }
        if (start_char_add) {
            if (!no_key) { key  += text[i]; }
            else        { word += text[i]; }
        }
    }
}