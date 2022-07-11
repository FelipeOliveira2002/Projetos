const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li')
    return li
}

function criaBtn(){
    const btn = document.createElement('button')
    return btn
}

function botaoApagar(li){
    li.innerText += '  ';
    const btnApagar = criaBtn()
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class','apagar')
    li.appendChild(btnApagar)
}


function criaTarefa(text){
    const li = criaLi()
    li.innerText = text
    tarefas.appendChild(li)
    limpaInput()
    botaoApagar(li)
    salvarTarefas()
}

inputTarefa.addEventListener('keypress',function(e){
    if(e.keyCode === 13){
        if(!inputTarefa) return;
        criaTarefa(inputTarefa.value)
    }
})

const limpaInput= ()=>{
    inputTarefa.value = ''
    inputTarefa.focus()
}


btnTarefa.addEventListener('click',function(){
    if(!inputTarefa) return;
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click',function(e){
    const el = e.target
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefas()
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    console.log(liTarefas)
    for (let tarefa of liTarefas) {
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
      listaDeTarefas.push(tarefaTexto);
    }
  
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
  }
  
  function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
  
    for(let tarefa of listaDeTarefas) {
      criaTarefa(tarefa);
    }
  }
  adicionaTarefasSalvas();