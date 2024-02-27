import styles from "./style.module.css"
export default function Page() {
    return (
    <body>
        <div className={styles.container}>
        <div className={`${styles.item} ${styles.item1}`}></div>
        <div className={`${styles.item} ${styles.item2}`}></div>
        <div className={`${styles.item} ${styles.item3}`}></div>
        </div>
    </body>
    )
}