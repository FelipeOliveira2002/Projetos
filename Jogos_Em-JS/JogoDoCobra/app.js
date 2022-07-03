window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    snake=[];
    positionX = 10;
    positionY = 10;
    foodX = 15;
    foodY = 15;
    velX = 0;
    velY = 0;
    grid = 20;
    tam = 3;
    //chamando a funcao a cada 1 segundo
    setInterval(jogo,100);

    document.addEventListener("keydown",function(e){
        switch(e.keyCode){
            //seta direita = 39
            case 39:
                velX = 1;
                velY = 0;
                break;
            //seta esquerda = 37;
            case 37:
                velX = -1;
                velY = 0;
                break;
            //seta pra cima = 38;
            case 38:
                velX = 0;
                velY = -1;
                break;
            case 40:
                velY = 1;
                velX = 0;
                break;            
        }
    })
};

function jogo(){

    //tela
    ctx.fillStyle = "#2980B9"
    //ordem dos parametros para o fillrect (distancia da borda hori, distancia da borda verti,largura, altura)
    ctx.fillRect(0,0,canvas.width,canvas.height);

    //o deslocar da cobra
    positionX += velX;
    positionY += velY;

    //espelhamento
        if(positionX < 0){
            positionX = grid;
        }
        if(positionX > grid){
            positionX = 0
        }
        if(positionY < 0){
            positionY = grid;
        }
        if(positionY > grid){
            positionY = 0
        }
        //config a coobra
            ctx.fillStyle = "#00f102";
            for(let i = 0; i<snake.length; i++){
                ctx.fillRect(snake[i].x*grid,snake[i].y*grid, grid-1,grid-1);
                if(snake[i].x == positionX && snake[i].y == positionY){
                    tam = 3;
                }
            }
    //movimento cobra
    snake.push({x: positionX, y:positionY})

   
    

    //apagando
        while(snake.length > tam){
            snake.shift();
        }

    //comida
        ctx.fillStyle = "#F1C40F";
        ctx.fillRect(foodX*grid,foodY*grid,grid-1,grid-1);
        
        //comendo
          if(positionX == foodX && positionY == foodY){
            tam++;
            foodX = Math.floor(Math.random()*grid);
            foodY = Math.floor(Math.random()*grid);
          }

}