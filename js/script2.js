function search (item, array){

    let index = array.findIndex( element => element === item);
    
    if(index === null){
      return -1;
    }else{
      return index;
    }
    
    }
    console.log(search(4 ,[3,5,28,38]));