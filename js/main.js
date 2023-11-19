AOS.init();

let btn_brigadeiro = document.querySelector('#btn_brigadeiro')
let btn_manteiga_amendoin = document.querySelector('#btn_manteiga_amendoin')

let tableNutricionalManteigaAmendoin = document.querySelector('#nutricional_manteiga_amendoin')
let tableNutricionalBrigadeiro = document.querySelector('#nutricional_brigadeiro')

btn_brigadeiro.addEventListener('click', () => {
    tabelaNutricional('brigadeiro')
        
    setTimeout(() => {
        window.scroll(0, tableNutricionalBrigadeiro.offsetTop - 60)
    }, 1500);
})

btn_manteiga_amendoin.addEventListener('click', () => {
    tabelaNutricional('manteiga de amendoin')
    
    setTimeout(() => {
        window.scroll(0, tableNutricionalManteigaAmendoin.offsetTop - 60)
    }, 1500);
})

function tabelaNutricional(produto){
    if(produto == 'brigadeiro'){
        
        tableNutricionalManteigaAmendoin.style.display = 'none'
        tableNutricionalBrigadeiro.style.display = 'block'
        
        tableNutricionalBrigadeiro.style.right = '0%'
        tableNutricionalManteigaAmendoin.style.right = '-100%'
        
        tableNutricionalBrigadeiro.classList.add('bounceInRight')
        btn_brigadeiro.style.backgroundColor = 'var(--color2)'
        btn_manteiga_amendoin.style.backgroundColor = 'var(--color1)'
        btn_brigadeiro.parentNode.style.border = '2px solid var(--color2)'
        btn_manteiga_amendoin.parentNode.style.border = '2px solid var(--color1)'
    }else if(produto == 'manteiga de amendoin'){
        
        tableNutricionalBrigadeiro.style.display = 'none'
        tableNutricionalManteigaAmendoin.style.display = 'block'
        
        tableNutricionalManteigaAmendoin.style.right = '0%'
        tableNutricionalBrigadeiro.style.right = '-100%'
        
        tableNutricionalManteigaAmendoin.classList.add('bounceInRight')
        btn_manteiga_amendoin.style.backgroundColor = 'var(--color2)'
        btn_brigadeiro.style.backgroundColor = 'var(--color1)'
        btn_manteiga_amendoin.parentNode.style.border = '2px solid var(--color2)'
        btn_brigadeiro.parentNode.style.border = '2px solid var(--color1)'
    }
}

tabelaNutricional('manteiga de amendoin')