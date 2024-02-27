import styles from "./style.module.css"
export default function Page() {
    return (
        <body>
            <div className={styles.parent}>Parent
                <div className={styles.one}>One</div>
                <div className={styles.two}>Two</div>
                <div className={styles.three}>Three</div>
            </div>
        </body>
    )
}