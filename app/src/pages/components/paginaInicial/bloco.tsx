import { Component } from "react";
import styles from "./paginaInicial.module.css"
export default function bloco({children,
}: {
  children: React.ReactNode
}){

    return <div className={`bg-slate-50 inline-block max-w-2xl ${styles.bloco}` }>{children}</div>
}