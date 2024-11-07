//  
import styles from "./Post.module.scss"
function Post({title , samplecontent, imgsrc}){
    let date = new Date().toISOString().split("T")[0]
    


    return(
        <>
            <div className={styles["post-container"]}>
                <header className={styles["head"]}>
                    <h1>{title}</h1>
                    <h5>{date}</h5>
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