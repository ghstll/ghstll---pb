import styles from './NewPostModal.module.scss'
function NewPostModal({onClose}){



    
    const handleClickOverlay = () =>{
        onClose()
    }

    const handleClickInsideModal = (e) =>{ //Stop event propagation to parent elements  (from modal to modal-overlay)
        e.stopPropagation()
    }
    return(
       <div className={styles['modal-overlay']} onClick={handleClickOverlay}>
            <div className={styles['modal']} onClick={handleClickInsideModal}>
                <div className={styles['title-container']}>
                    <input type="text" placeholder='title' />
                </div>
                <div className={styles['categories-container']}></div>
                <div className={styles['content-container']}>
                    <textarea name="" id="" className={styles['content-text-area']}>

                    </textarea>
                </div>
            </div>
       </div>
    )
}

export default NewPostModal