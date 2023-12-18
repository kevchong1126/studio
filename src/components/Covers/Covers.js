import React from 'react'
import styles from "./Covers.module.scss"

/*Components*/
import Header from '../Header'
import ListItem from './ListItem'

/*Images*/
import img1 from "../../images/cover1.jpg"
import img2 from "../../images/cover2.jpg"
import img3 from "../../images/cover3.jpg"
import img4 from "../../images/cover4.jpg"
import img5 from "../../images/cover5.jpg"
import img6 from "../../images/cover6.jpg"
import img7 from "../../images/cover7.jpg"
import img8 from "../../images/cover8.jpg"

const Covers = () => {
    const covers  = ["Vogue", "Harper's Bazaar", "Interview", "Esquire", "Numero", "Another", "Elle", "Vanity Fair"];
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];
    
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <Header first="Stories" second="/ Covers" subheader="Timeless" />
            
            <div className={styles.wrapper}>
                <ul className={styles.covers}>
                    {
                        covers.map((el, idx) => {
                            return (
                                <ListItem key={idx} cover={el} idx={idx} image={images[idx]}/>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Covers