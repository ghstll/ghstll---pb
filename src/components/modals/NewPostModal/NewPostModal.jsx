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
    

    


    return(
       <div className={styles['modal-overlay']} onClick={handleClickOverlay}>
            <div className={styles['modal']} onClick={handleClickInsideModal}>
                <div className={styles['title-container']}>
                    <input type="text" placeholder='title' className={styles['input-title']} maxLength={65}/>
                </div>
                <section className={styles['add-categories-section']}>

                    <div className={`${styles['category-button']} ${styles['programming-category-button']}`}>
                        <input type="checkbox" 
                                name='programming-option' 
                                value={'programming'} id='programming-option' 
                                className={`${styles['checkbox-category']} ${styles['checkbox-category-programming']}`}
                        />
                        <label htmlFor="programming-option" className={styles['checkbox-category']}>
                            💻 Programming +
                        </label>                    
                    </div>


                    
    
                    <div className={`${styles['category-button']} ${styles['art-category-button']}`}>
                        <input type="checkbox" 
                                name='art-option' 
                                value={'art'} 
                                id='art-option' 
                                className={`${styles['checkbox-category']} ${styles['checkbox-category-art']}`}
                        />  
                        <label htmlFor="art-option" className={styles['checkbox-category']}>
                        🎨 Art +
                        </label>
                    </div>


                    <div className={`${styles['category-button']} ${styles['anime-category-button']}`}>
                        <input type="checkbox" 
                                name='anime-option' 
                                value={'anime'} 
                                id='anime-option' 
                                className={`${styles['checkbox-category']} ${styles['checkbox-category-anime']}`}
                                
                        />
                        <label htmlFor="anime-option" className={styles['checkbox-category']}>
                             🍙 Anime +
                        </label>
                    </div>
                    <div className={`${styles['category-button']} ${styles['manga-category-button']}`}>
                        <input type="checkbox" 
                                name='manga-option' 
                                value={'manga'} 
                                id='manga-option' 
                                className={`${styles['checkbox-category']} ${styles['checkbox-category-manga']}`}
                                
                        />
                        <label htmlFor="manga-option" className={styles['checkbox-category']}>
                             ✍️ Manga +
                        </label>
                    </div>
                    <div className={`${styles['category-button']} ${styles['music-category-button']}`}>
                        <input type="checkbox" 
                                name='music-option' 
                                value={'music'} id='music-option' 
                                className={`${styles['checkbox-category']} ${styles['checkbox-category-music']}`}
                                
                        />
                        <label htmlFor="music-option" className={styles['checkbox-category']}>
                             💗 Music +
                        </label>
                    </div>
                       

                </section>
                   
                
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