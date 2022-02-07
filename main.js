let cells = document.querySelectorAll('.cell');
let status = document.querySelector('.game--status');
let restart = document.querySelector('.game--restart');
let template = new Array(9).fill('')
let checkk = true

function huWon(){
    console.log("Siz yutdiz");
    console.log(template);
    status.textContent = 'You WON'
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.pointerEvents = 'none'
    }
    template = new Array(9).fill('')
    counter = 0
    return
}

function AIWon(){
    console.log("Men yutdim");
    console.log(template);
    status.innerHTML = 'AI WON'
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.pointerEvents = 'none'
    }
    template = new Array(9).fill('')
    counter = 0
    return
}

function draw(){
    console.log("Durrang");
    console.log(template);
    status.innerHTML = 'Draw'
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.pointerEvents = 'none'
    }
    template = new Array(9).fill('')
    counter = 0
    return
}

function check(checkk) {
    if (template[0] === '1' && template[1] === '1' && template[2] === '1' || template[3] === '1' && template[4] === '1' && template[5] === '1' || template[6] === '1' && template[7] === '1' && template[8] === '1' || template[0] === '1' && template[3] === '1' && template[6] === '1' || template[1] === '1' && template[4] === '1' && template[7]  === '1' || template[2] === '1' && template[5] === '1' && template[8]  === '1' || template[0] === '1' && template[4] === '1' && template[8]  === '1' || template[2] === '1' && template[4] === '1' && template[6]  === '1' || template[0] == '1' && template[4] == '1' && template[8] == '1') {
        huWon()
        return
    }
    if (template[0] === '0' && template[1] === '0' && template[2] === '0' || template[3] === '0' && template[4] === '0' && template[5] === '0' || template[6] === '0' && template[7] === '0' && template[8] === '0' || template[0] === '0' && template[3] === '0' && template[6] === '0' || template[1] === '0' && template[4] === '0' && template[7]  === '0' || template[2] === '0' && template[5] === '0' && template[8]  === '0' || template[0] === '0' && template[4] === '0' && template[8]  === '0' || template[2] === '0' && template[4] === '0' && template[6]  === '0') {
        AIWon()
        return
    }
    if (checkk) {
        if (template[0] === '1' && template[1] === '1' && template[2] === '1' || template[3] === '1' && template[4] === '1' && template[5] === '1' || template[6] === '1' && template[7] === '1' && template[8] === '1' || template[0] === '1' && template[3] === '1' && template[6] === '1' || template[1] === '1' && template[4] === '1' && template[7]  === '1' || template[2] === '1' && template[5] === '1' && template[8]  === '1' || template[0] === '1' && template[4] === '1' && template[8]  === '1' || template[2] === '1' && template[4] === '1' && template[6]  === '1') {
            huWon()
            return
        }
        else if (template[0] === '0' && template[1] === '0' && template[2] === '0' || template[3] === '0' && template[4] === '0' && template[5] === '0' || template[6] === '0' && template[7] === '0' && template[8] === '0' || template[0] === '0' && template[3] === '0' && template[6] === '0' || template[1] === '0' && template[4] === '0' && template[7]  === '0' || template[2] === '0' && template[5] === '0' && template[8]  === '0' || template[0] === '0' && template[4] === '0' && template[8]  === '0' || template[2] === '0' && template[4] === '0' && template[6]  === '0') {
            AIWon()
            return
        }
        else{
            draw() 
            return
        }
    }
}
let counter = 0
let count = 0
for (let cell of cells) {
    cell.onclick = () =>{
        var id = cell.getAttribute('data-cell-index')
        var randomVar = Math.round(Math.random() * 8)
        function randomfunc() {
            while(template[randomVar] || id == randomVar){
                randomVar = Math.round(Math.random() * 8)
            }
            return randomVar
        }
        counter++
        
        if(!template[id]){
            if (counter < 2) {
                count++
                var getRes = randomfunc()
               
                    cell.textContent = 'X'
                    template[id] = '1'
                    cells[getRes].textContent = 'O'
                    template[getRes] = '0'
                    check()
            }else{
                count++
                console.log(count);
                if (count > 4) {
                    console.log('kirdik ichikariga');
                    template[id] = '1'
                    console.log(count);
                    console.log(cells[id]);
                    cells[id].textContent = 'X'
                    check(checkk)
                    return
                }

                let checkerr = 0
                cell.textContent = 'X'
                template[id] = '1'
                if ((template[0] == '1' && template[3] == '1') || (template[2] == '1' && template[4] == '1') || (template[7] == '1' && template[8] == '1') && !template[id]) {
                    testCells = template[6] == '' ? 'O' : checkerr = 1
                    if(checkerr == 1){
                        console.log(template);
                        template[randomfunc()] = '0'
                        cells[randomfunc()].textContent = 'O'
                        check()
                        return
                    }else{
                        console.log(template);
                        template[6] = '0'
                        cells[6].textContent = 'O'
                        check()
                        return
                    }
                }else if((template[1] == '1' && template[4] == '1') || (template[6] == '1' && template[8] == '1') && !template[id]){
                    testCells = template[7] == '' ? 'O' : checkerr = 1
                    if(checkerr == 1){
                        console.log(template);
                        template[randomfunc()] = '0'
                        cells[randomfunc()].textContent = 'O'
                        check()
                        return
                    }else{
                        console.log(template);
                        template[7] = '0'
                        cells[7].textContent = 'O'
                        check()
                        return
                    }
                }else if((template[0] == '1' && template[4] == '1') || (template[2] == '1' && template[5] == '1') || (template[2] == '1' && template[5] == '1') || (template[6] == '1' && template[7] == '1') && !template[id]){
                    testCells = template[8] == '' ? 'O' : checkerr = 1
                    if(checkerr == 1){
                        console.log(template);
                        template[randomfunc()] = '0'
                        cells[randomfunc()].textContent = 'O'
                        check()
                        return
                    }else{
                        console.log(template);
                        template[8] = '0'
                        cells[8].textContent = 'O'
                        check()
                        return
                    }
                }else if((template[0] == '1' && template[6] == '1') || (template[4] == '1' && template[5] == '1') && !template[id]){
                    testCells = template[3] == '' ? 'O' : checkerr = 1
                    if(checkerr == 1){
                        console.log(template);
                        template[randomfunc()] = '0'
                        cells[randomfunc()].textContent = 'O'
                        check()
                        return
                    }else{
                        console.log(template);
                        template[3] = '0'
                        cells[3].textContent = 'O'
                        check()
                        return
                    }
                }else if((template[0] == '1' && template[8] == '1') || (template[2] == '1' && template[6] == '1') || (template[3] == '1' && template[5] == '1') || (template[1] == '1' && template[7] == '1') && !template[id]){
                    testCells = template[4] == '' ? 'O' : checkerr = 1
                    if(checkerr == 1){
                        console.log(template);
                        template[randomfunc()] = '0'
                        cells[randomfunc()].textContent = 'O'
                        check()
                        return
                    }else{
                        console.log(template);
                        template[4] = '0'
                        cells[4].textContent = 'O'
                        check()
                        return
                    }
                }else if((template[2] == '1' && template[8] == '1') || (template[3] == '1' && template[4] == '1') && !template[id]){
                    testCells = template[5] == '' ? 'O' : checkerr = 1
                    if(checkerr == 1){
                        console.log(template);
                        template[randomfunc()] = '0'
                        cells[randomfunc()].textContent = 'O'
                        check()
                        return
                    }else{
                        console.log(template);
                        template[5] = '0'
                        cells[5].textContent = 'O'
                        check()
                        return
                    }
                }else if((template[1] == '1' && template[2] == '1') || (template[3] == '1' && template[6] == '1') || (template[4] == '1' && template[8] == '1') && !template[id]){
                    testCells = template[0] == '' ? 'O' : checkerr = 1
                    if(checkerr == 1){
                        console.log(template);
                        template[randomfunc()] = '0'
                        cells[randomfunc()].textContent = 'O'
                        check()
                        return
                    }else{
                        console.log(template);
                        template[0] = '0'
                        cells[0].textContent = 'O'
                        check()
                        return
                    }
                }else if((template[4] == '1' && template[7] == '1') || (template[0] == '1' && template[2] == '1') && !template[id]){
                    testCells = template[1] == '' ? 'O' : checkerr = 1
                    if(checkerr == 1){
                        console.log(template);
                        template[randomfunc()] = '0'
                        cells[randomfunc()].textContent = 'O'
                        check()
                        return
                    }else{
                        console.log(template);
                        template[1] = '0'
                        cells[1].textContent = 'O'
                        check()
                        return
                    }
                }else if((template[4] == '1' && template[6] == '1') || (template[0] == '1' && template[1] == '1') || (template[8] == '1' && template[5] == '1') && !template[id]){
                    testCells = template[2] == '' ? 'O' : checkerr = 1
                    if(checkerr == 1){
                        console.log(template);
                        template[randomfunc()] = '0'
                        cells[randomfunc()].textContent = 'O'
                        check()
                        return
                    }else{
                        console.log(template);
                        template[2] = '0'
                        cells[2].textContent = 'O'
                        check()
                        return
                    }
                }
                if(!template[id]){
                    cells[randomfunc()].textContent = 'O'
                    template[randomfunc()] = '0'
                    console.log(template);
                    console.log(randomfunc());
                    check()
                    return
                }

                
            }
        }else{
            alert("Siz jinnixonadan qochganmisiz diymana")
        }

        console.log(template);
    }
}

restart.onclick = () =>{
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ''
        cells[i].style.pointerEvents = 'auto'
    }
    template = new Array(9).fill('')
    status.innerHTML = ''
    counter = 0
    count = 0
}


