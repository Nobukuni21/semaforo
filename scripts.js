document.addEventListener('DOMContentLoaded', ()=>{

    const vermelho = document.getElementById('vermelho')
    const amarelo = document.getElementById('amarelo')
    const verde = document.getElementById('verde')

    let estadoAtual = 'vermelho'

    function alternarLuzes(){
    if(estadoAtual === 'amarelo'){
        vermelho.style.backgroundColor = '#555555'
        amarelo.style.backgroundColor = '#555555'
        verde.style.backgroundColor = '#00ff00'
        estadoAtual = 'vermelho';
    }else if(estadoAtual === 'vermelho'){
        vermelho.style.backgroundColor = '#555555';
        amarelo.style.backgroundColor = '#fbff00';
        verde.style.backgroundColor = '#555555';
        estadoAtual = 'verde';
    }else if(estadoAtual === 'verde'){
        vermelho.style.backgroundColor = '#ff0000';
        amarelo.style.backgroundColor = '#555555';
        verde.style.backgroundColor = '#555555';
        estadoAtual = 'amarelo';
     }


    }
    setInterval(alternarLuzes, 2000);
});