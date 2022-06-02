
    const cellElements = document.querySelectorAll("[data-cell]");
    const board = document.querySelector('[data-board]');
    const winningMessageText = document.querySelector('[data-winning-message-text]');
    const winningMessage = document.querySelector('[data-win]')
    const winningMessageButton = document.querySelector('[data-win-button]')
    let isCircleTurn;

    const winCombination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    const startgame = () =>{
        let isCircleTurn = false;
         //para (criou uma const cell que recebeu o cell elements, para add event listener)
    for (const cell of cellElements ){ 
        //ao clicar chama a func handleclick que so pode ser chamada uma vez depois acontece outras alterações 
        cell.classList.remove('circle');
        cell.classList.remove('x');
        cell.removeEventListener('click' , handleClick)
        cell.addEventListener('click',handleClick, {once:true}) 
    };
    

    setBoardHoverClass();
    winningMessage.classList.remove('show-winning-message')
    };

    const endGame = (isDraw) =>{
        if (isDraw){
            winningMessageText.innerText = 'Empate!'
        } else{
            winningMessageText.innerText = isCircleTurn ? 'Circle Venceu' : 'X venceu'
        }

        winningMessage.classList.add("show-winning-message")
    };



    const checkForWin = (currentPlayer) =>{
        return winCombination.some((combinaiton) =>{
            return combinaiton.every((index) =>{
                return cellElements[index].classList.contains(currentPlayer)
            })
        })
    }
    /* check for win, quando chamada com o parametro current player que é para analisar o player que esta jogando(se e o x ou o circle) return algumas win combinations que foi marcado la em cima (como array) e vai realizar uma funcao que vai returna mais uma funcao que vai ter todas as combinações que que foi marcada e vai analisar qual foi o ultimo player que fez essa combinação fazendo o ganahr */

    const checkForDraw = () =>{
        return [...cellElements].every(cell =>{
          return cell.classList.contains('x') || cell.classList.contains('circle')
        })
    }


    const placeMark = (cell,ClassToAdd) =>{
        cell.classList.add(ClassToAdd)
        
    };

    const setBoardHoverClass = () =>{
        board.classList.remove("circle")
        board.classList.remove("x")

        if (isCircleTurn){
            board.classList.add("circle")
        } else{
            board.classList.add("x")
        }
    }

    const swapTurns = () =>{
        isCircleTurn = !isCircleTurn
        setBoardHoverClass();
    };


    const handleClick = (e)=> {
        //colocar x ou circulo
        const cell = e.target  /* o parametro (e) e o que recebe a celula que foi criada la em cima o.targer e que ele foi o alvo que sofreu e vai realizar a funcao */
        const ClassToAdd = isCircleTurn ? 'circle' : 'x'; // verificador e o turn do circle? se for circle se nao X

        placeMark(cell,ClassToAdd)
        //verificar se ganhou
        const isWin = checkForWin(ClassToAdd);
        //verificar se houve empate
        const isDraw = checkForDraw()
        if(isWin) {
            endGame(false)
        } else if(isDraw){
            endGame(true)
        }   else{
            //mudar o simbolo
        swapTurns();
        }
        
        
        

    }

    startgame()
    winningMessageButton.addEventListener('click' , startgame)
   

  