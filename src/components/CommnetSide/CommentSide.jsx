import styles from './CommentSide.module.scss'



const CommentSide = () => {
  return (
    <>
    <div style={{maxWidth:'1110px',margin:'auto'}}>
        <input className={styles.commnetInput} type="text" placeholder='Rəy yaz...' />
        
    </div>

    </>
  )
}

export default CommentSide
