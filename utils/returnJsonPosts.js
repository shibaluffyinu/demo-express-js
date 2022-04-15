const { editText } = require('./editText')

function returnJsonPosts(mediumPosts, mediumItems){
  let dataMedium = []

  const edit = editText()

  const textCuted = edit.cutText(mediumItems)

  mediumPosts.items.map((item, index) =>{
    dataMedium.push({
      title: mediumPosts.items[index].title,
      date: mediumPosts.items[index].pubDate.split(' ')[0],
      link: mediumPosts.items[index].link,
      image: mediumPosts.items[index].thumbnail,
      description: textCuted[index].replace(/\n/g, '. ').replace('. ', ''),
    })
  })

  return dataMedium
}

module.exports = { returnJsonPosts }