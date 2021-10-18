import React, {useState, useEffect} from 'react';

function Posts(){
    const [resourceType, setResourseType] = useState('posts')
    const [items, setItems] = useState([])
    const [search, setSearch] = useState("")


    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    
        setSearch("")
        // console.log(items)
        // console.log(JSON.stringify(items))
    },[resourceType])

    const results = filterResult()

    function filterResult(){
        // let results;
       
        // console.log(search,resourceType)
        if(search && (resourceType === "posts" || resourceType === "comments")){
            return items.filter((item)=> item.body && item.body.toLowerCase().includes(search.toLowerCase()))
        }

        if(search && (resourceType === "users")){
            return items.filter((item)=> item.name && item.name.toLowerCase().includes(search.toLowerCase()))
        }

        return items
    
    }

    function handleSearch(e){
        // console.log(e.target.value)
        const words = e.target.value
        // if(words === ""){
        //     return 
        // }
        setSearch(words)
        // console.log(words)
    }

    return(
        <>
            <div>
                <button onClick={()=>setResourseType("posts")}>Posts</button>
                <button onClick={()=>setResourseType("users")}>Users</button>
                <button onClick={()=>setResourseType("comments")}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
            <div>

                <input className="searchBar" type="text" onChange={handleSearch} value={search} placeholder={resourceType === "users" ? "Search Name..." : "Search Content..."}/>
                <button onClick={()=>setSearch("")}>Clear</button>
                {results.map(item =>{
                    return <pre key={item.id}>{JSON.stringify(item)}</pre>
                })}
            </div>

        </>
    )
}
export default Posts