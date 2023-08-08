import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 Femadev. All rights reserved.</div>
      <div className={styles.socials}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt='Femadev'/>
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt='Femadev'/>
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt='Femadev'/>
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt='Femadev'/>
      </div>
    </div>
  )
}

export default Footer
