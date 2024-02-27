export default function ErrorContent(){
    const value = new Error("something");
    return (<h1>{value.message}</h1>);
}