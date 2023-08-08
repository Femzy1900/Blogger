import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/button/Button'
import LandScape from "../../../public/Land.jpg"

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={LandScape} fill={true} alt='' className={styles.img}/>
      </div> 
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Digital Storytellers</h1>
        <h2 className={styles.imgDesc}>Handcrafting award winning didgital experiences</h2>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, praesentium accusamus est veniam magnam, quasi doloremque porro voluptates tempore repudiandae corporis dolorem assumenda? Ad nihil at suscipit enim 
            <br />\
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad natus illum nulla quis tenetur sequi esse quisquam, doloremque voluptas incidunt quia unde dicta accusamus explicabo sed, repudiandae blanditiis, quas velit!
            <br />
            minus maxime. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus, fuga excepturi facere corporis commodi tempore quasi magni aperiam necessitatibus unde in numquam corrupti ex enim magnam, nisi, nobis reprehenderit.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam fugit praesentium temporibus. Necessitatibus, eveniet. Id accusantium, aspernatur ad voluptatem provident facere doloribus, nobis ducimus voluptate quidem commodi quam ut nisi.
            <br />
            <br /> - Dynamic Websites 
            <br />
            <br /> - Fast and Handy Mobile
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div> 
    </div>
  )
}
