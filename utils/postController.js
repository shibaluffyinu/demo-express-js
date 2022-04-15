import { sanitize } from 'string-sanitizer'
import returnJsonData from './returnJsonData'
import returnJsonPosts from './returnJsonPosts'

function MediumPostsController(){
    async function index(usermedium){

        const userSanitized = sanitize(`${usermedium}`)

        try{
            const mediumPosts = (userSanitized)? await returnJsonData(userSanitized.toString()) : { message: 'Unspecified user' }
            
            const dataMedium = returnJsonPosts(mediumPosts, mediumPosts.items)

            return dataMedium
        }catch{
            
        }
    }
    return {
        index
    }
}

export default MediumPostsController