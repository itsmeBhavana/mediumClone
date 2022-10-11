import Image from 'next/image'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdMarkEmailUnread} from 'react-icons/md'
import Qazi from '../static/qazi.jpg'


const styles={
  wrapper:`h-screen min-w-[10rem] max-w-[30rem] flex-[1.2rem] p-[2rem]`,
  accentedButton:`flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full`,
  searchBar:`flex items-center gap-[.6rem] h-[2.6rem] px-[1rem] border rounded-full`,
  searchinput:`outline-none border-none bg-none w-full`,
  authorContainer:`my-[2rem]`,
  authorProfileImageContainer:`h-[5rem] w-[5rem] rounded-full overflow-hidden `,
  authorName:`font-semibold mb-[.2rem] mt-[1rem]`,
  authorFollowing:`text-[#787878]`,
  authorActions: `flex gap-[0.6rem] my-[1rem]`,
  actionButton: `bg-[#1a8917] rounded-full text-white px-[.6rem] py-[.4rem] text-sm`,
  recommendationContainer:``,
  recommendationAuthorProfileImageContainer: `overflow-hidden h-[1.4rem] w-[1.4rem] rounded-full`,
  recommendationAuthorContainer:`flex items-center gap-[.6rem] `,
  recommendationAuthorName:`text-sm`,
  recommendedTitle:`font-bold`,
  recommendationThumbnailContainer: `flex flex-1 items-center justify-center h-[4rem] w-[4rem]`,
  recomemndationThumbnail: `object-cover`,
  articleContentWrapper: `flex items-center justify-between cursor-pointer my-[1rem]`,
  articleContent: `flex-[4]`,
  title: ``,
  articlesContainer:``
}
const Recommendations = () => {
  return(
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>Get Unlimited Access</div>
      <div className={styles.searchBar}>
        <AiOutlineSearch/>
        <input 
          className={styles.searchinput}
          placeholder='Search'
          type='text '/>
      </div>

      <div className={styles.authorContainer}>
        <div className={styles.authorProfileImageContainer}>
          <Image 
            src={Qazi}
            width={100}
            height={100}
          />
        </div>
        <div className={styles.authorName}>Bhavana</div>
        <div className={styles.authorFollowing}>1M Followers </div>
        <div className={styles.authorActions}>
          <button className={styles.actionButton}>Follow</button>
          <button className={styles.actionButton}><MdMarkEmailUnread/></button>
        </div>
      </div>

      <div className={styles.recommendationContainer}>
        <div className={styles.title}>More from Medium</div>
          <div className={styles.articlesContainer}>

          {recommendedPosts.map(post => (
                 <div className={styles.articleContentWrapper}>
              <div className={styles.articleContent}>
            
              <div className={styles.recommendationAuthorContainer}>
                <div className={styles.recommendationAuthorProfileImageContainer}>
                  <Image 
                  src={post.author.image}
                  height={100}
                  width={100}
                  />
                </div>
              <div className={styles.recommendationAuthorName}>{post.author.name}</div>
                </div>
              <div className={styles.recommendedTitle}>{post.title}</div>
              
          </div>
            <div className={styles.recommendationsThumbnailContainer}>
              <Image
                className={styles.recommendationThumbnail}
                src={post.image}
                width={100}
                height={100}
              />
            </div>
          </div>
          ))}
       
        </div>
      </div>
      </div>
  )
}

export default Recommendations

const recommendedPosts = [
  {
    title: 'What can you do with Replit?',
    image: Qazi,
    author: {
      name: 'Clever Programmer',
      image: Qazi
    }
  },
  {
    title: 'Ultimate JS Course for beginners',
    image: Qazi,
    author: {
      name: 'Bhavana Reddy',
      image: Qazi
    }
  },
  {
    title: 'How to become a developer in 2022?',
    image: Qazi,
    author: {
      name: 'Clever Programmer',
      image: Qazi
    }
  }
  
]