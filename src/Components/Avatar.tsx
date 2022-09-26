import { ImgHTMLAttributes } from 'react'; 
import styles from './Avatar.module.css'


interface AvataProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  src:string;
  alt?:string;
}

export function Avatar({ hasBorder = true, src, alt}:AvataProps) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src} 
      alt={alt}
      />  )
}