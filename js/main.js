let btn_brigadeiro = document.querySelector('#btn_brigadeiro')
let btn_amendoin = document.querySelector('#btn_amendoin')

let tableNutricionalAmendoin = document.querySelector('#nutricional_amendoin')
let tableNutricionalBrigadeiro = document.querySelector('#nutricional_brigadeiro')

btn_brigadeiro.addEventListener('click', () => {
    tabelaNutricional('brigadeiro')
    window.scroll(0, tableNutricionalBrigadeiro.offsetTop - 90)
})

btn_amendoin.addEventListener('click', () => {
    tabelaNutricional('amendoin')
    window.scroll(0, tableNutricionalAmendoin.offsetTop - 90)
})

function tabelaNutricional(produto){
    if(produto == 'brigadeiro'){
        tableNutricionalAmendoin.style.display = 'none'
        tableNutricionalBrigadeiro.style.display = 'block'
    }else if(produto == 'amendoin'){
        tableNutricionalBrigadeiro.style.display = 'none'
        tableNutricionalAmendoin.style.display = 'block'
    }
}