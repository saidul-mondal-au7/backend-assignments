const fetch = require('node-fetch');

const url = 'http://jsonplaceholder.typicode.com/comments';

try{
    fetch(url).then(data => data.json()).then(data => console.log(data))
}catch(e){
    console.log(e)
}

try{
    fetch(url).then(res => res.json()).then(data => {
        let arr = data.map((element ) => {
            let obj = {
              postId : element.postId,
              body : element.body
            }
            return obj

        } )
        console.log(arr)
    })
}catch(e){
    console.log(e)
}


fetch(url).then(res => res.json()).then(data => {
    let arr = data.filter(element => element.body.length <= 100 )
    console.log(arr)
})

try{
    fetch(url).then(res => res.json()).then(data => {
        let count={}
        data.map((element)=>{
            if(element.postId in count){
                count[element.postId]+=1
            }
            else{
                count[element.postId]=1
            }
        })
     console.log(count)
    })
}catch(e){
    console.log(e)
}