'use client'


//client side coponent
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Home(){
    const router = useRouter()
    console.log("re render");
    return (<><h1 className="p-5">        
        Home Page
    </h1>
    <Link href="/next/dashboard" className="text-blue-500 underline p-5">Dashboard Link</Link>
    <button type="button" className="text-blue-500 underline p-5" onClick={() => router.push('/next/dashboard')}>
      Dashboard
    </button>
    </>)
}