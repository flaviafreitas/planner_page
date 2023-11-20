import { useState } from 'react';
import Modal from '../modal/modal';
import './index.scss'
import { FaPen , FaTrash, FaPlus   } from "react-icons/fa6";

export default function Table ({ data, tarefa }) {

    const [modalInfo, setModalInfo] = useState({ isOpen: false, title: '', description: '' })
    const [novaTarefa, setNovaTarefa] = useState('')

    console.log(novaTarefa)
    

    return (
        <>
            <main className="table">
                <table className='table__content'>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Status</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <p className='table__title'>{item.title}</p>
                                </td>
                                <td>
                                    <input type='checkbox' name="estado" id="estado" />
                                </td>
                                <td>
                                    <FaPen  onClick={() => setModalInfo({ isOpen: true, title: 'Deseja editar esse item?', description: item.description })} size={18} />
                                    <FaTrash onClick={() => setModalInfo({ isOpen: true, title: 'Deseja apagar esse item?', description: item.description })} size={18} />
                                </td>
                            </tr>
                        ))}
                        {
                            modalInfo.isOpen &&
                            <Modal isOpen={modalInfo.isOpen} isClose={() => setModalInfo({ ...modalInfo, isOpen: false })} titulo={modalInfo.title} descricao={modalInfo.description} />
                        }
                    </tbody>
                </table>
                <div className="table__newitem">
                    <input type="text" placeholder='Nova tarefa...' onChange={(e) => setNovaTarefa(e.target.value)}/>
                    <FaPlus  onClick={() => setModalInfo({ isOpen: true, title: 'Deseja adicionar esse novo item?', description: novaTarefa })} size={18} />
                    {
                        modalInfo.isOpen &&
                        <Modal isOpen={modalInfo.isOpen} isClose={() => setModalInfo({ ...modalInfo, isOpen: false })} titulo={modalInfo.title} descricao={modalInfo.description} />
                    }
                </div>
            </main>

        </>
    )
}