"use cleint"


const DynamicBook =async(props:any)=>{
    console.log(props)
    const url =await fetch(`http://simple-books-api.glitch.me/books/${props.params.id}`)
        const response = await url.json()
        console.log("Single Book", response)
    return(
    <main>
        <h1 className="text-7xl">Dynamic Route <br/><br/>
        {response.name}
        </h1>
        </main>
    )   
};

export default DynamicBook;