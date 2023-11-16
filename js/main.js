AOS.init();

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
        
        tableNutricionalBrigadeiro.style.right = '0%'
        tableNutricionalAmendoin.style.right = '-100%'
        
        tableNutricionalBrigadeiro.classList.add('bounceInRight')
        btn_brigadeiro.style.backgroundColor = 'var(--color2)'
        btn_amendoin.style.backgroundColor = 'var(--color1)'
        btn_brigadeiro.parentNode.style.border = '2px solid var(--color2)'
        btn_amendoin.parentNode.style.border = '2px solid var(--color1)'
    }else if(produto == 'amendoin'){
        
        tableNutricionalBrigadeiro.style.display = 'none'
        tableNutricionalAmendoin.style.display = 'block'
        
        tableNutricionalAmendoin.style.right = '0%'
        tableNutricionalBrigadeiro.style.right = '-100%'
        
        tableNutricionalAmendoin.classList.add('bounceInRight')
        btn_amendoin.style.backgroundColor = 'var(--color2)'
        btn_brigadeiro.style.backgroundColor = 'var(--color1)'
        btn_amendoin.parentNode.style.border = '2px solid var(--color2)'
        btn_brigadeiro.parentNode.style.border = '2px solid var(--color1)'
    }
}

tabelaNutricional('brigadeiro')