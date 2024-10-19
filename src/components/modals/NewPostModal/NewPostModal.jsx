import { useState } from 'react'
import styles from './NewPostModal.module.scss'
function NewPostModal({onClose}){



    
    const handleClickOverlay = () =>{
        onClose()
    }
    const handleCancel = () =>{
        onClose()
    }
    const handleClickInsideModal = (e) =>{ //Stop event propagation to parent elements  (from modal to modal-overlay)
        e.stopPropagation()
    }
    
    const [pressed , setPressed] = useState(false)
    const handleButtonCategory = () =>{
        setPressed(prevPressed => !prevPressed)
    }
    return(
       <div className={styles['modal-overlay']} onClick={handleClickOverlay}>
            <div className={styles['modal']} onClick={handleClickInsideModal}>
                <div className={styles['title-container']}>
                    <input type="text" placeholder='title' className={styles['input-title']} maxLength={65}/>
                </div>
                <section className={styles['custom-section']}>
                    {/* <button className={`${styles['category-button']} ${styles['programming-category-button']}`}>
                        💻 Programming +
                    </button>
                    <button className={`${styles['category-button']} ${styles['art-category-button']}`}>
                        🎨 Art +    
                    </button>
                    <button className={`${styles['category-button']} ${styles['anime-category-button']}`}>
                        🍙 Anime +
                    </button>
                    <button className={`${styles['category-button']} ${styles['manga-category-button']}`}>
                        ✍️ Manga +
                    </button>

                    <button className={`${styles['category-button']} ${styles['music-category-button']}`}>
                        💗 Music +
                    </button>
                        */}

                </section>
                    {/* <div className={styles['buttons-post']}>
                        <button className={`${styles['confirm-cancel-buttons']} ${styles['confirm-button']}`} >Confirm</button>
                        <button className={`${styles['confirm-cancel-buttons']} ${styles['cancel-button']}`} onClick={handleCancel}>Cancel</button>
                    </div> */}
                
                <div className={styles['content-container']}>
                    <textarea name="" id="" className={styles['content-text-area']}>

                    </textarea>
                </div>
                <div className={styles['buttons-post']}>
                        <button className={`${styles['confirm-cancel-buttons']} ${styles['confirm-button']}`} >Confirm</button>
                        <button className={`${styles['confirm-cancel-buttons']} ${styles['cancel-button']}`} onClick={handleCancel}>Cancel</button>
                </div>
            </div>
       </div>
    )
}

export default NewPostModal