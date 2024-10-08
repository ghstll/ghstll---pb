import styles from './Header.module.scss'
function HeaderPage(){
    return(
     <header className={styles['header-app']}>
        <div className={styles['site-brand']}>
          <h1 id='brand'>Ghstll</h1>
        </div>
        <nav className={styles['main-nav']}>
          <ul className={styles['nav-sections']}>
            <li>
              <a href='/'>/Home/</a>
            </li>
            <li>
              <a href='/'>/Categories/</a>
            </li>
            <li>
              <a href='/'>/About/</a>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default HeaderPage