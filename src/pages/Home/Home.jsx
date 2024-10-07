import React, { useState } from 'react'
import Header from '../../components/Header/Header.jsx'
import NewPostModal from '../../components/modals/NewPostModal/NewPostModal.jsx'
import styles from './Home.module.scss'
function Home(){

    const [showModalNewPost,setShowModalNewPost] = useState(false)
    const openModal = () =>{
        setShowModalNewPost(true)
    }
    const closeModal = () =>{
        setShowModalNewPost(false)
    }


    return(<>
        <Header>

        </Header>

        <button className={styles['new-post-btn']} onClick={openModal}>
            <svg  xmlns="http://www.w3.org/2000/svg"  
                    width="24"  
                    height="24"
                    viewBox="0 0 24 24"  
                    fill="none"  
                    stroke="#FFFFFF"  
                    stroke-width="2"  
                    stroke-linecap="round"  
                    stroke-linejoin="round"  
                    class="icon icon-tabler icons-tabler-outline icon-tabler-news">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
                        <path d="M8 8l4 0" />
                        <path d="M8 12l4 0" />
                        <path d="M8 16l4 0" />
                        </svg>
            New
        </button >
        {showModalNewPost && <NewPostModal onClose={closeModal}></NewPostModal>}
    </>)
}
export default Home