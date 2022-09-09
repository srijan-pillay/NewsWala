import { useGlobal } from './Context'


const Stories = () => {
    const {hits,isLoading,removePost,addPost} = useGlobal();
    
    if(isLoading){
    return(
        <>
        <h1>LOADING ...</h1>
        </>
    );
 }
   let auth = "unKnown";
   let ima = "";
  
  


 return (
     <>
       
    {hits?.map((curr, i) => {
        {if(curr.author){auth = curr.author}if(curr.urlToImage){ima=curr.urlToImage}}


        return (
        <>
        
        <div key={i} style={{display:'inline'}}>
        
       
       
        <div className="card cardCust">
            <img src={ima} alt='no-image' className="card-img-top cardI"/>
        <div className="card-body">

            <h2 className="card-text">{curr.title}</h2>
            <h6>BY {auth}</h6>
        </div>
        <div className="card-body">
            <a href={curr.url} className="card-link">Read More</a>
            <button  type="button" className="card-link" onClick={()=> removePost(i)}>Remove</button>
            <button  type="button" className="card-link" onClick={()=>addPost(i)}>Add To Notes</button>
        </div>
        </div>
        </div>
        </>  
        );  

    })}
</>
 );
    
  
}

export default Stories;




