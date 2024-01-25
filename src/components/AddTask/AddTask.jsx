'use client'
import { FaPlus } from "react-icons/fa";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { addTodo } from "../../../api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';


const AddTask = () => {
    const router = useRouter()
    const [newTaskValue, setNewTaskValue] = useState('')

    const handleSubmitNewTodo = async (e) =>{
        e.preventDefault()
        await addTodo({
            id: uuidv4(),
            text: newTaskValue,
        })
        setNewTaskValue('')
        router.refresh()
    }

  return (
    <div> 
      <button className='btn btn-primary w-full text-white font-bold' onClick={()=>document.getElementById('my_modal_3').showModal()}>Add new task <FaPlus className='ml-2' size={18}/></button>

      <Modal>
        <form onSubmit={handleSubmitNewTodo} method="dialog">
            <h3 className="font-bold text-lg">Add new task</h3>
            <div className="modal-action">
            <input 
            type="text" 
            value={newTaskValue}
            onChange={(e) => setNewTaskValue(e.target.value)}
            placeholder="Type here" 
            className="input input-bordered w-full max-w-xs" />
            <button onClick={()=>document.getElementById('my_modal_3').close()} type="submit"  className="btn text-white">Submit</button>
            </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddTask
