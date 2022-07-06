import Image from 'next/image'
import styles from '../../styles/components/landing/FirstSection.module.css'
const FirstSection = ({title , text , textButton, imageUrl, openModal}) => {
    return (
        <div className={styles.landing__onecontainer}>
        <section className={styles.landing__onesection}>
            <div className={styles.landing__onetext}>
                <div className={styles.landing__oneflag}>
                    <h5>En Bolivia</h5>
                    <Image layout='raw' src='/assets/images/Bandera_de_Bolivia_(Estado) (1) 1.svg' alt="" />
                </div>
                <h1>{title}</h1>
                <p>{text}</p>
                <div className={styles.landing__onebutton}>
             
                        
                <button className={styles.landing__button} onClick={()=>{openModal(true)}}>{textButton}</button>
                 
                    <span>- ¡ Es gratis !</span>
                </div>
            </div>
            <div className={styles.landing__mobileimage}>
                <Image layout='raw' src={imageUrl} alt="" />
            </div>

        </section>
        </div>
    )
}

export default FirstSection