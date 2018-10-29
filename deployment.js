// deployment = развертывание
var text; var arr_key = []; var arr_word = [];
var status = []; var test = [];
global_index = 1;

function start() {
    var reader = new FileReader();
    reader.onload = function(e) { text = e.target.result; };
    reader.readAsText(file.files[0]);
}

function parser() {
    var start_char_add = false; 
    var word = ""; var arr = [];
    
    for (var i = 0; i < text.length; i++){
        if ( (text[i] == "," || text[i] == ":") && !start_char_add) { continue; }

        if (!start_char_add && text[i] == '"') { // Если скобка открывающая
            start_char_add = true; continue;
        } 
        if (start_char_add  && text[i] == '"') { // Если скобка закрывающая
            arr.push(word); word = "";             
            start_char_add = false; continue;
        }
        if (start_char_add) { word += text[i]; }
    }

    var key = ""; var n = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) { arr_key[n]  = arr[i]; }
        else            { arr_word[n] = arr[i]; n++; }
    }    

    generation_test();
}

function generation_test(){
    // Заполнение списка вопросов
    test = document.getElementById('list');
    for (var i = 0; i < arr_key.length; i++) {
        test[i] = {}; test[i].qwest = arr_key[i]; test[i].var = [];
        // Выбираем ячейку для правильного ответа 
        var arr = [];
        rand = getRandom(); test[i].var[rand] = arr_word[i]; arr.push(i);
        // Заполняем прочие ячейки
        var w = 0; while (w <= 3) {
            if (test[i].var[w]) { w++; }
            else { 
                rand = getRandom(); if (arr.indexOf(rand) == -1) {
                    arr.push(rand); test[i].var[w] = arr_word[rand]; w++;
                }
            }
    }
        test.innerHTML += `
        <button class=" btn" id="qwest${i}" onclick="qwest_switcher(${i})">Вопрос ${i+1}</button></p>` 
    }
}

function getRandom() {
    var min = 0; var max = 3;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function qwest_switcher(index){
    global_index = index;
    document.getElementById('qwestion').innerHTML = `<p>Вопрос ${index+1}: ${test[index].qwest}</p>`;
    document.getElementById('testA').innerHTML = test[index].var[0];
    document.getElementById('testB').innerHTML = test[index].var[1];
    document.getElementById('testC').innerHTML = test[index].var[2];
    document.getElementById('testD').innerHTML = test[index].var[3];
}