import ReadersNav from '../../components/ReadersNav'
import Recommendations from '../../components/Recommendations'
import ArticleMain from '../../components/ArticleMain'
import { useContext, useEffect, useState } from 'react'
import { MediumContext } from '../../context/MediumContext'
import { useRouter } from 'next/router'

const styles={
  content:`flex`
}
const post = () => {
  const {posts, users} = useContext(MediumContext)
  const router=useRouter()
  const [post, setPost] = useState([])
  const [author, setAuthor] = useState([])

  //console.log(posts,'@')
  useEffect(() => {
   if (!(posts.length === 0) || !(users.length===0)) {
      setPost(posts.find(post => post.id === router.query.slug))

      setAuthor(users.find(user => user.id === post?.data?.author))
    }
  }, [post])
  
   return (
     <div className={styles.content}>
        <ReadersNav/>
        <ArticleMain post={post} author={author} />
        <Recommendations/>
     </div>
     
   )
 }
export default post