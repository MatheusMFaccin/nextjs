import styles from './Cadastro.module.css'

export default function inputForm({cor , placeholder}: {cor: String , placeholder: string}){
    return(
        <input type="text" className={`${cor} ${styles.input}`} placeholder={placeholder} />
    )
}