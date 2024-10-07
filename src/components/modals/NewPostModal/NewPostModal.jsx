import React, { useState } from 'react'
import styles from './NewPostModal.module.scss'
function NewPostModal({onClose}){

    const [title,setTitle] = useState("")


    const handleChanges = (e) =>{
        setTitle(e.target.value)
    }
    const handleClickOverlay = () =>{
        onClose()
    }

    const handleClickInsideModal = (e) =>{ //Stop event propagation to parent elements  (from modal to modal-overlay)
        e.stopPropagation()
    }
    return(
       <div className={styles['modal-overlay']} onClick={handleClickOverlay}>
            <div className={styles['modal']} onClick={handleClickInsideModal}>
                <form action="">
                    <input type="text"  placeholder="Title" className={styles['input-title']} onChange={handleChanges}/>
                    <h1 className={styles['title']}>{title}</h1>
                </form>
            </div>
       </div>
    )
}

export default NewPostModal