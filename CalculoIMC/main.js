/*const h1 = document.querySelector('.container h1');
const data = new Date();

function GetWeekDays(diaSemana){
    let diaSemanaTexto;

    switch(diaSemana){
        case 0: 
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terca-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;
    }
}

function getMonths(mes){
    let mesTexto; 

    switch(mes){
        case 0:
            mesTexto = 'Janeiro';
            return mesTexto;
        case 1:
            mesTexto = 'Fevereiro';
            return mesTexto;
        case 2:
            mesTexto = 'Março';
            return mesTexto;
        case 3:
            mesTexto = 'Abril';
            return mesTexto;
        case 4:
            mesTexto = 'Maio';
            return mesTexto;
        case 5:
            mesTexto = 'Junho';
            return mesTexto;
        case 6:
            mesTexto = 'Julho';
            return mesTexto;
        case 7:
            mesTexto = 'Agosto';
            return mesTexto;
        case 8:
            mesTexto = 'Setembro';
            return mesTexto;
        case 9:
            mesTexto = 'Outubro';
            return mesTexto;
        case 10:
            mesTexto = 'Novembro';
            return mesTexto;
        case 11:
            mesTexto = 'Dezembro';
            return mesTexto;
    }
}

function criateDate(data){
    const DiaSemana = data.getDay();
    const mes  = data.getMonth();
 
    const mesTexto = getMonths(mes);
    const diaSemanaTexto = GetWeekDays(DiaSemana);

    return `${diaSemanaTexto}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
}

h1.innerHTML = criateDate(data);
*/

/*const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short' });
*/

const h1 = document.querySelector('.container h1');
const data = new Date();

function GetWeekDays(diaSemana){
    const diaSemanaTexto = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    return diaSemanaTexto[diaSemana];    
}

function getMonths(mes){
     const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
     return meses[mes];
}

function criateDate(data){
    const DiaSemana = data.getDay();
    const mes  = data.getMonth();
 
    const mesTexto = getMonths(mes);
    const diaSemanaTexto = GetWeekDays(DiaSemana);

    return `${diaSemanaTexto}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
}

h1.innerHTML = criateDate(data);