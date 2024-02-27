'use client'
// import React from "react";
import Icon from "./Icon";
import { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from "react";
import styles from "./style.module.css"


type context = [
    boolean,
    Dispatch<SetStateAction<boolean>>
]

const FlyOutContext = createContext();


export function FlyOut(props: { children: ReactNode | ReactNode[] }) {
    const [open, toggle] = useState(false);
    console.log(props.children);
    return (
        <div className={styles.flyout}>
            <FlyOutContext.Provider value={{ open, toggle }}>
                {props.children}
            </FlyOutContext.Provider>
        </div>
    );
}

function Toggle() {
    const { open, toggle } = useContext(FlyOutContext);

    return (
        <div className={styles.flyoutBtn} onClick={() => toggle(!open)}>
            <Icon />
        </div>
    );
}

function List({ children }: { children: ReactNode | ReactNode[] }) {
    const { open } = useContext(FlyOutContext);
    return open && <ul className={styles.flyoutList}>{children}</ul>;
}

function Item({ children }: { children: ReactNode | ReactNode[] }) {
    return <li className={styles.flyoutItem} onClick={() => console.log(children)}>{children}</li>;
}

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;
