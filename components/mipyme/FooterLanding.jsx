import React from 'react'
import styles from '../../styles/components/landing/footerlanding.module.css'
const FooterLanding = () => {
    return (
        <div className={styles.footerlanding}>
            <div className={styles.footerlanding__logoaura}>
                <a href="/">
                    <img src='/Aura_logo.png' alt="" />
                </a>
            </div>
            <div className={styles.footer__text}>
                <h5 className={styles.footerlanding__main}>
                    Preguntas: info-aura@moyoAI.com
                </h5>
                <div className={styles.foooterlanding__privacy}>
                    <a href="/privacity" target={'_blank'}>
                        Privacy
                    </a>
                    <span>|</span> Legal
                </div>
            </div>
        </div>
    )
}

export default FooterLanding