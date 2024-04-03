import Image from "next/image";
import styles from "./ImageTest.module.css"

export default function ImageTest(){
    return(
        <div>
            <Image
                src="/vercel.svg"
                width={200}
                height={200}
                alt="Picture of the author"
                className={styles.mobile}
            />
    
          <Image
                src="/vercel.svg"
                width={500}
                height={500}
                alt="Picture of the author"
                className={styles.tablet}
            />
    
          <Image
                src="/vercel.svg"
                width={800}
                height={800}
                alt="Picture of the author"
                className={styles.desktop}
            />

        </div>
    )
}