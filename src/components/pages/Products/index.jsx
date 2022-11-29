import React, { useState, useEffect } from 'react'
import {supabase} from "../../connection/Connection";
import './styles.css';

const index = () => {
  const [produtos, setProdutos]= useState([])
  // console.log(produtos);

  useEffect(() => {
    buscaProdutos()
  }, [])

  async function buscaProdutos(){
    const {data} = await supabase
        .from('Products')
        .select('*');
        setProdutos(data);

  }
  return (
    <>
    <table>
        <tr>
          <th>Id</th>
          <th>Produto</th>
          <th>Preço</th>
        </tr>
      {produtos.length > 0 && produtos.map((produto) => (
        <tr key={Math.random().toString()}>
          <td>{produto?.id}</td>
          <td>{produto?.name}</td>
          <td>{produto?.price}</td>
        </tr>
        
      ))}
      </table>
    </>
  )
}

export default index