import style from "./Header.module.css"

export default function Header(){
    return(
        <header className={style.cabecalho}>
            <h1 className={style.receita}>Receitas de minuto</h1>
            <div className={style.titulos}>
            <h2 className={style.titulo}>Brigadeiro</h2>
            <h2 className={style.titulo}>Pudim</h2>
            </div>
        </header>
    )
}