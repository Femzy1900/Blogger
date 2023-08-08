import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

const Blogpost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          </h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique sunt perspiciatis sed tenetur illum rem nulla saepe cum? Corrupti illum reprehenderit odit doloribus dolorum enim, accusantium dolore minus. Distinctio, architecto?
          </p>
          <div className={styles.author}>
            <Image
              src=""
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Femadev</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image 
            src=""
            alt=''
            fill = {true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum soluta ad ipsum deleniti quam officia hic corporis illo et doloribus alias, impedit sequi repellat sit nihil! Sed ad reprehenderit ducimus?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, debitis fugiat praesentium molestiae repellat minus fuga non corrupti aperiam et magnam porro quia assumenda unde libero rerum, qui fugit nostrum?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestias ea est magni alias, perspiciatis consequatur veritatis quisquam earum ratione similique odio mollitia repellat harum veniam facilis eum, voluptatum corrupti.
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nobis autem similique totam, officiis nam, quo perferendis molestias quam iste aspernatur adipisci ratione omnis. Eveniet et consectetur explicabo. Magnam, dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia perferendis saepe culpa deleniti amet asperiores id perspiciatis aliquam at. Tempore aliquam vel porro magnam. Sapiente esse sequi quaerat hic dolor!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolores quia deleniti! Laborum iste qui facere obcaecati corrupti culpa modi vero sequi, ipsum nobis, maxime saepe hic! Quod, cum aut.
        </p>
      </div>
    </div>
  )
}

export default Blogpost
