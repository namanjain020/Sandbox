//server side component
import { redirect } from 'next/navigation'
// import DelayedRenderComponent from './delayedCompoent';
import { Suspense } from 'react';
import Content from './content';
import ErrorContent from './errorContent';



export default function Dashboard(){
    return (<><h1 className="p-5">
        Dashboard
    </h1>
    <Suspense fallback={<p className='p-5'>Loading feed...</p>}>
        <Content/>
      </Suspense>
    </>)
}