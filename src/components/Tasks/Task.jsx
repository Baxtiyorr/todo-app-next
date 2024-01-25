'use client'

import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "../../../api";
import EditModal from "../Modal/EditModal";
import DeleteModal from "../Modal/DeleteModal";

const Task = ({ task }) => {
    const router = useRouter();
    const [taskToEdit, setTaskToEdit] = useState(task.text)

    const handleSubmitEditTodo = async (e) =>{
        e.preventDefault();
       await editTodo({
        id: task.id,
        text: taskToEdit,
       });
        
       router.refresh();
    };

    const handleDeleteTask = async (id) =>{
        await deleteTodo(id)
        document.getElementById('my_modal_4').close();
        router.refresh()
    }
  return (
    <tr key={task.id}>
    <td className="w-full">{task.text}</td>
    <td className="flex gap-5">
        <FaRegEdit onClick={()=>document.getElementById('my_modal_4').showModal()} cursor={'pointer'} size={25} color="blue"/>
        <EditModal>
        <form onSubmit={handleSubmitEditTodo} >
            <h3 className="font-bold text-lg">Edit task</h3>
            <div className="modal-action">
            <input
            type="text" 
            value={taskToEdit}
            onChange={(e) => setTaskToEdit(e.target.value)}
            placeholder="Type here" 
            className="input input-bordered w-full max-w-xs" />
            <button onClick={()=>document.getElementById('my_modal_4').close()} type="submit"  className="btn text-white">Submit</button>
            </div>
        </form>
      </EditModal>
        <FaRegTrashAlt onClick={()=>document.getElementById('my_modal_5').showModal()} cursor={'pointer'} size={25} color="red"/>
        <DeleteModal>
        <h3 className="text-lg">Are you sure, you want to delet this task?</h3>
        <div className="modal-action">
            <button  className="btn" onClick={()=> handleDeleteTask(task.id)}>
                yes
            </button>

        </div>
        </DeleteModal>
    </td>
  </tr>
  )
}

export default Task
