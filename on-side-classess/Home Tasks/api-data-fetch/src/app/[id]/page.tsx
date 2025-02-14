


const DynamicUser =async(props:any)=>{
    console.log(props)
    const url =await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}`)
        const response = await url.json()
        console.log("Single User",response)
    return(
        <div className="my-40 flex items-center justify-center">
        <div className="container w-[1020px] border rounded-2xl border-gray-200 bg-[#b9babb] ">
        <div className="text-5xl text-black text-center pt-20"><u>Dynamic User Route</u> 
        <div className="text-3xl m-8">
            <div className="flex">id:<h1 className="text-green-600 ml-[150px]">{response.id}</h1></div>
        <div className="flex">Name     :<h1 className="text-green-600 ml-20">{response.name}</h1></div>
        <div className="flex">User Name:<h1 className="text-green-600 ml-4">{response.username}</h1></div>
        <div className="flex">E-Mail   :<h1 className="text-green-600 ml-[75px]">{response.email}</h1></div>
        <div className="text-left">Address:<h1 className="text-green-600 ml-12"><br/> {response.address=[
            <div className="flex"><h1 className="text-black">Street: </h1><h1 className="text-green-600 ml-[45px]">{response.address.street}</h1></div>,
            <div className="flex"><h1 className="text-black">Suit:   </h1><h1 className="text-green-600 ml-[75px]">{response.address.suite}</h1></div>,
            <div className="flex"><h1 className="text-black">City:   </h1><h1 className="text-green-600 ml-[70px]">{response.address.city}</h1></div>,
            <div className="flex"><h1 className="text-black">ZipCode:</h1><h1 className="text-green-600 ml-2">{response.address.zipcode}</h1></div>,
            <div className="flex"><h1 className="text-black">Geo: </h1><h1 className="text-green-600">   <br/>{response.address.geo=[
                <div className="flex"><h1 className="text-black">Lat : </h1><h1 className="text-green-600 ml-2 ">{response.address.geo.lat}</h1></div>,
                <div className="flex"><h1 className="text-black">Lng: </h1><h1 className="text-green-600 ml-2">{response.address.geo.lng}</h1></div>]}
                </h1></div>         
        ]}</h1></div><br/>
        <div className="flex">Phone   :<h1 className="text-green-600 ml-[75px]">{response.phone}</h1></div>
        <div className="flex">WebSite   :<h1 className="text-green-600 ml-[50px]">{response.website}</h1></div>
        <div className="text-left">Company:<h1 className="text-green-600 ml-12"><br/>{response.Company=[
            <div className="flex"><h1 className="text-black">Name: </h1><h1 className="text-green-600 ml-4">{response.company.name}</h1></div>,
            <div className="flex"><h1 className="text-black">Catch Phrase: </h1><h1 className="text-green-600 ml-4">{response.company.catchPhrase}</h1></div>,
            <div className="flex"><h1 className="text-black">Bs: </h1><h1 className="text-green-600 ml-4">{response.company.bs}</h1></div>,
        ]}</h1></div>
        </div>
        </div>
        </div>
        </div>
        
    
    )   
};

export default DynamicUser;