//  
import styles from "./Post.module.scss"
function Post({title , samplecontent, imgsrc}){



    return(
        <>
            <div className={styles["post-container"]}>
                <header className={styles["titulo"]}>
                    <h1>{title}</h1>
                </header>

                <p className={styles["sample-content"]}>{samplecontent}</p>
                <div>
                    <img className={styles["img-content"]} src={imgsrc} alt="" />
                </div>
                <hr />
            </div>
        </>
    )

    
}
Post.defaultProps = {
    imgsrc : ""
}

export default Post