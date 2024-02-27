'use client'
import { useState } from "react";

function getSavedValue(key:any, initialValue:any){

}

export default function useLocalStoragea(initialValue:any){
    const [value, setValue] =  useState(initialValue)
    return [value,setValue]
}