
async function request() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Request completed");
        }, 3000);
    })
}

export default async function Content() {
    console.log("start")
    await request();
    console.log("end");
    return (<h1 className="p-5">Loaded Content</h1>)
}