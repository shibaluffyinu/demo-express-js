function editText(){
    function cutText(text){
      let textCuted = []
  
      const tagsRegex = /<p>(.*?)<\/p>/g
  
      const textRegex = /<\/?[A-Za-z]>/g
  
      text.map((item, index) =>{
        textCuted.push(text[index].description.match(tagsRegex)[0].replace(textRegex,''))
      })
  
      return textCuted
    }
  
    return {
      cutText
    }
  }
  
module.exports = { editText }