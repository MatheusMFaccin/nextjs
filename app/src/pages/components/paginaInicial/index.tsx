import styles from "./paginaInicial.module.css"
import Bloco from "./bloco"
import InformacoesGerais from "./informacoesGerais"
export default function paginaInicial(){

    return(
        <div className={`bg-slate-300 ${styles.corpo}`} >
            <div>
                <div className={`${styles.gerais}`}>
                    <Bloco><InformacoesGerais/></Bloco>
                </div>
            </div>
        </div>
        
    )
}