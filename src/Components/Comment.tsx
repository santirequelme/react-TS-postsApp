import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
  content:string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false}
        src="https://img.freepik.com/premium-photo/funny-cat-sunglasses-cat-with-glasses-light-blue-clean-sunny-background_90380-2753.jpg"
        alt="Avatar"
        />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Dieguito</strong>
              <time title="11 de Maio As: 08:12" dateTime="2022-11-05 08:12:30"> Ha uma hora</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Apaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}