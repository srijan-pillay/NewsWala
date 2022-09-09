// what does context api do
// we can pass the props to that componenet(child) where that prop is needed rather then passing to every descending child of parent

// steps to follow

//  create context
//  provider
//  consumer or we can use useContext


import React,{useContext, useReducer,useEffect} from "react";
import reducer from "./reducer";

 
let api = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=efb7f7a6e2104f90881267e89052e57f' ;



 
const initialState = {
    isLoading : true,
    query :'html',
    nbpages : 0,
    page : 0,
    hits : [],
    arr:[],
    a:[],

};

// create context
const AppContext = React.createContext();


// create provider function 
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialState);

    
   
    const fetchApiData = async(url) =>{
    
        dispatch({type : 'loading'});
        try{
            const res = await fetch(url);
            const data = await res.json();
           // console.log(data);
            dispatch({type : 'get_news',
                    payload :{
                    Narticles : data.articles,
                        //NnbPages : data.nbPages,
                    },
                 });
        }
        catch{
            console.log('error');
        }
    };

    const removePost = (post_id) => {
        dispatch({type:'remove_Post',payload : post_id})
    }

    const addPost = (post_id) => {
        dispatch({type:'add_Post',payload : post_id});
        
    }

    const rmPost = (post_id) => {
        dispatch({type:'rm_Post',payload : post_id});
        
    }
   

   
    useEffect(()=>{
        //  fetchApiData(`${api}query=${state.query}&page=${state.page}` );
        fetchApiData(api);
        
    },[]);

    return (
        <AppContext.Provider value = {{...state,removePost,addPost,rmPost}} >
            {children}
        </AppContext.Provider>
    );
}


// custom hook 
// when we return a hook in our function then that function is known as custom hook
const useGlobal = () =>{
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobal};