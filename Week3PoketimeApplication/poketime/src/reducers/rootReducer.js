const initState={
    posts:[
        {id:1,title:'Moon', body:'thing in the sky Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis, neque ratione repellendus, corporis nobis minus error qui optio aspernatur, ad nam! Esse animi odio tempore nam impedit dicta eos'},
        {id:2,title:'Sun', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maiores laborum iure ut ipsa inventore consequuntur aliquam nam laudantium, et neque, doloremque deserunt ex? Voluptates eum voluptatum nobis magni amet'},
        {id:3,title:'Stars', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ea praesentium at, dolor fuga mollitia commodi! Ex amet ipsa quam quis rerum! In velit, est perspiciatis rem praesentium nemo vitae.'}
    ]
}


const rootReducer =(state=initState,action)=>{
    console.log(action);
    return state;
}
export default rootReducer
