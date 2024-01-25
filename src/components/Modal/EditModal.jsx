

const EditModal = ({children}) => {
  return (
    <>
                {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
        <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            {children}
        </div>
        </dialog>
    </>
  )
}

export default EditModal
