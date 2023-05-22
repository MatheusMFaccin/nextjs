import styles from './Cadastro.module.css'

export default function inputForm({cor , placeholder, value}: {cor: String , placeholder: string, value: string}){
    return(
        <input type="text" value={value} className={`${cor} ${styles.input}`} placeholder={placeholder} />
    )
}