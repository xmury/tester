// processing = обработка
var coun = 0;
function processing(){
    for (var i = 0; i < 4; i++) {
        if (document.getElementById(`var${i}`).checked){
            break;
        }
    }
    if (i == 4) { alert("Error. Empty input!"); }
    else {
        var answer = test[global_index].var[i];
            document.getElementById(`qwest${global_index}`).style.background = 'red';
        if (global_index == arr_word.indexOf(answer)) {
            coun++; document.getElementById('counter').innerHTML = coun;
            document.getElementById(`qwest${global_index}`).style.background = 'green';
        }
    }
    qwest_switcher(global_index+1);
}

function complite_test(){
    alert(`Всего вопросов: ${arr_key.length}\nПравильно отвечено: ${coun}`);
}