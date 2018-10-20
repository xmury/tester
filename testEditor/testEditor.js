// Создание тестов
var id = 1; 
    
function addQwest() {
    id++; var area = document.getElementById('area');
    area.innerHTML += `
    <div class="form" id=${id}>
        <p class="N" id="N${id}">${id}</p>
        <p>Вопрос:</p>
        <input type="text" name="qwestion" id="Q${id}" value="">
        <p>Правильный ответ:</p>
        <input type="text" name="ansfer" id="A${id}" value="">
        <button class=" btn del" onclick="deliter(${id})">Удалить</button>
    </div>
    `
}

function deliter(objId){
    var obj = document.getElementById(objId);
    obj.parentNode.removeChild(obj);
    for(var i = objId+1; i <= id; i++) {
        if (objId == 1 && objId == i) { i++; }

        var prewID = i-1;
        var form = document.getElementById(`${i}`);
        form.id = prewID;
        
        form.innerHTML = `
        <p class="N" id="N${prewID}">${prewID}</p>
        <p>Вопрос:</p>
        <input type="text" name="qwestion" id="Q${prewID}" value="">
        <p>Правильный ответ:</p>
        <input type="text" name="ansfer" id="A${prewID}" value="">
        <button class=" btn del" onclick="deliter(${prewID})">Удалить</button>
        `
    }
    id--;
}

function companator(){
    /* задача: Из всех полей собрать информацию, добавить её в строку оформленную как js структура 
    и дать это скачать пользователю, или сразу вшить это в файл*/

    var str = "";
    for (var i = 1; i <= id; i++){                          // Пройти по всем формам. 
        qwest = document.getElementById(`Q${i}`).value;     // Получить их объект и данные из форм
        ansfr = document.getElementById(`A${i}`).value;
        str += `"${qwest}":"${ansfr}", `                    // Записать их в строку структуры
    }

    if (document.getElementById('file_name').value != "") {
        file_name = document.getElementById('file_name').value + ".js";
    }
    else { file_name = "test.js"; }
    var type = 'data:application/octet-stream;base64, ';
    var base = window.btoa(unescape(encodeURIComponent(str)));
    var res = type + base;
    
    var obj = document.getElementById('download');
    obj.innerHTML = `<a download="${file_name}.js" href="${res}">${file_name}</a>`
}