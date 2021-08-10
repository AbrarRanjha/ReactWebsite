

 const reducer = (state,action) => {
     if(action.type==='REMOVE_ITEM'){
         return{
             ...state,
             item:state.item.filter((curlElem)=>{
                 return curlElem.id!==action.payload;
            
             })
         }
     }
     if(action.type==="CLEAR-CART"){
         return{ ...state,item:[] };
     }
     if(action.type==="INCREMENT"){
        const updatedCart=state.item.map((curlElem)=>{
            if(curlElem.id===action.payload){
                return { ...curlElem, quantity:curlElem.quantity+1 };
            }
            return curlElem;
        });
        return { ...state, item:updatedCart};
    }
    if(action.type==="DECREMENT"){
        const updatedCart=state.item.map((curlElem)=>{
            if(curlElem.id===action.payload){
                return { ...curlElem, quantity:curlElem.quantity-1 };
            }
            return curlElem;
        })
         .filter((curlElem)=>curlElem.quantity!==0);

         return { ...state, item:updatedCart};
    }
    if(action.type==="GET-TOTAL"){
        let{totalItem,totalAmount}=state.item.reduce((accum,curVal)=>{
            let{quantity,price}=curVal;
            let updatedT=price*quantity;
            accum.totalAmount+=updatedT;
            accum.totalItem +=quantity;
            return accum;
        },{ 
            totalItem:0,
            totalAmount:0,
        });
        return{...state,totalItem, totalAmount};
    }
    return state;
};

export default reducer
