import styles from "./box.module.css"
export default function Page() {
    return (
    <body className="text-4xl">
        <p className={styles.one}>
            One
        </p>
        <p className={styles.two}>
            Two
        </p>
    </body>
    )
}