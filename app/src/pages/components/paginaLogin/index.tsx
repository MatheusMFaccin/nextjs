import styles from './Login.module.css'
import axios from 'axios';
import { ChangeEvent,  FormEvent, useState } from 'react'
import Link  from 'next/link';
import { useRouter } from 'next/router';

export default function Page(){

    
    const placeholderSenha = "digite sua senha"
    const placeholderNome = "digite seu nome"
 
    

    
    const [nome, setInputNome] = useState("");
    const [senha, setInputSenha] = useState("");
    const [email, setInputEmail] = useState("");
    const router = useRouter();




    async function handleSubmit (event: FormEvent){
        event.preventDefault()
        const usuario = {
            nome,
            senha,
        }
        try {
            // Enviar a requisição POST para a API
            const usuarioJson = JSON.stringify(usuario);
            await axios.post( "http://localhost:5000/api/login", usuarioJson, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((Response)=>{
                if(Response.status===200){
                    router.push('/components/paginaInicial');

                }
            });
            
                
        
            console.log(usuarioJson)
            console.log('Dados enviados com sucesso');
          } catch (error) {
            // Erro: exibir mensagem de erro ou lidar com o erro de alguma forma
            console.error('Erro ao enviar os dados:', error);
          }
    
        
    }
    
    const handleChangeNome = (event: ChangeEvent<HTMLInputElement>) =>{
        setInputNome(event.target.value);
    }
    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) =>{
        setInputEmail(event.target.value);
    }
    const handleChangeSenha = (event: ChangeEvent<HTMLInputElement>) =>{
        setInputSenha(event.target.value);
    }

    return (
        <div className={`bg-zinc-800 ${styles.corpo}`}>
            <div className={`bg-zinc-700 text-zinc-200 ${styles.conteiner}`}>
                <form onSubmit={handleSubmit}>
                    <div className={`${styles.itens}`}>          
                        
                        <input type="text" value={nome}  onChange={handleChangeNome} className={`bg-zinc-500 ${styles.input}`} placeholder={placeholderNome} /> 
                        
                    </div>
                    <div className={`${styles.itens}`}>
                        <input type="text" value={senha} onChange={handleChangeSenha} className={`bg-zinc-500 ${styles.input}`} placeholder={placeholderSenha} />
                        
                    </div>
                    <div className={`${styles.itens}`}>
                        <div className='container'>
                            <div className='inline-block'>
                                <Link href={'/components/cadastro'} className={`${styles.botaoLogin} bg-sky-600`}>Criar Cadastro</Link>
                            </div>
                            <div className='inline-block'>
                                <button type="submit" className={`bg-green-600 ${styles.botaoCadastrar}`}>Conectar</button>            
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}