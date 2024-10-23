
import style from "./Cards.module.css"
import comida1 from "../image/brigadeiro-.jpg"
import comida2 from "../image/pudim.jpg"
import Image from "next/image"


export default function Cards(){
    return(
        <div className={style.cards}>
            <div className={style.cardB}>
                <Image src= {comida1}/>
                <div className={style.textos} >
                <h1 className={style.titulo}>Brigadeiro</h1>
                <p>Ninguém resiste a essa receita de brigadeiro: ele é o rei das festas de aniversário e é impossível comer um só. Seja pra comemorar ou afogar as, mágoas no com uma panela de brigadeiro assistindo um filme triste, essa receita faz parte do dia a dia do brasileiro há décadas. Muito tradicional em nosso país, o brigadeiro é muito fácil de preparar: leva apenas leite condensado, margarina, achocolatado em pó e chocolate granulado. Além de comer as bolinhas nas festas de aniversário, ele é um doce versátil que você pode consumir de diversas maneiras: como cobertura de bolo, recheio, com colher, em copinhos ou até mesmo misturando com biscoitos e fazendo palhas italianas. Veja agora mesmo como fazer brigadeiro de forma simples e prática! Você quer outras receitas de doces para festa de aniversário? 
                    Saiba como fazer beijinho, cajuzinho, olho-de-sogra, casadinho e muito mais aqui no TudoGostoso! Confira! </p>
                </div>
            </div>
            <div className={style.cardP}>
            <Image src= {comida2}/>
            <div className={style.textos}>
            <h1 className={style.tituloP}>Pudim</h1>
            <p>Veja como fazer essa receita de pudim de leite condensado lisinho e com uma calda perfeita de caramelo. Ele é delicioso, barato e bem rápido de preparar! Com sua textura macia e sabor inconfundível, esse doce é uma verdadeira tentação para os amantes de sobremesas tradicionais. Fácil de preparar e com ingredientes simples, o pudim é uma opção perfeita para adoçar qualquer ocasião especial. Com um modo de preparo bem simples, envolvendo poucos ingredientes como leite condensado, leite, ovos e açúcar para a calda, você irá criar uma sobremesa que certamente vai encantar a todos os paladares. Surpreenda sua família e amigos com esse clássico da culinária, que além de delicioso, possui uma apresentação encantadora. 
                Siga o passo a passo desta receita e mergulhe nessa experiência de sabores que certamente vai conquistar a todos.</p>
            </div>
            </div>
        </div>
    )
}