import React, { useState, useEffect }from 'react'
import {supabase} from "../../connection/Connection";
import './styles.css';
import { AiOutlineEdit, AiOutlineDelete} from "react-icons/ai";
import { Button } from 'antd';
import Modal from "react-modal";
import Form from './textForm';

Modal.setAppElement("#root");

function index() {
  const [modalIsOpem, setIsOpem] = useState(false);

  function opemModal(){
      setIsOpem(true);
  }

  function closeModal(){
      setIsOpem(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: '60%',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px'
    }
  }

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
    <table className='tabela'>
      <tbody>
      <Button type='primary' className='btnNew' onClick={opemModal}>
        Novo Produto
      </Button>
      <Modal
        isOpen={modalIsOpem}
        onRequestClose={closeModal}
        style={customStyles}
        >
        <div className='divForm'>
          <h2>Cadastro de Produto</h2>
          <Form label="Nome do Produto" placeholder="Digite o nome do produto"/>
          <Form label="Preço" />
          <Form label="Estoque Inicial"/>
          <Button type='primary' danger  onClick={closeModal}>Cancelar</Button>
          
        </div>
      </Modal>
          <tr>
            <th className='fun'></th>
            <th>Id</th>
            <th>Produto</th>
            <th>Preço</th>
            <th>Estoque</th>

          </tr>
        {produtos.length > 0 && produtos.map((produto) => (
          <tr key={Math.random().toString()}>
            <td className='edit'>
            <button className='btnEdit'>{<AiOutlineEdit/>}</button> 
            <button className='btnDelete'>{<AiOutlineDelete/>}</button>
            </td>
            
            <td>{produto?.id}</td>
            <td>{produto?.name}</td>
            <td>{produto?.price}</td>
            <td>{produto?.stock}</td>
          </tr>
          
        ))}
      </tbody>
    </table>
    </>
  )
}

export default index