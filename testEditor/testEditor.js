// Создание тестов
var id = 1;

function addQwest() {
    id++; var area = document.getElementById('area');
    area.innerHTML += `
    <div class="form" id=${id}>
        <p class="N" id="N${id}">${id}</p>
        <p>Вопрос:</p>
        <input type="text" name="qwestion" value="">
        <p>Правильный ответ:</p>
        <input type="text" name="ansfer" value="">
        <button class=" btn del" onclick="deliter(${id})">Удалить</button>
    </div>
    `
    console.log(`id = ${id}`);
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
        <input type="text" name="qwestion" value="">
        <p>Правильный ответ:</p>
        <input type="text" name="ansfer" value="">
        <button class=" btn del" onclick="deliter(${prewID})">Удалить</button>
        `
    }
    id--;
}