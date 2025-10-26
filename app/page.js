import styles from './page.module.css'

export default function Home() {
  const prompt = "photography of a man, coastal interior, brush up blonde (hairstyle), hyper-realistic, masterpiece, making a silly face, 80s"
  
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>80s Coastal Photography</h1>
          <div className={styles.badge}>Masterpiece</div>
        </div>
        
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageFrame}>
              <div className={styles.placeholderImage}>
                <div className={styles.iconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <p className={styles.placeholderText}>
                  Hyper-realistic photography concept
                </p>
                <div className={styles.description}>
                  <h3>Scene Description:</h3>
                  <ul>
                    <li>📸 Man with brush up blonde hairstyle</li>
                    <li>😜 Making a silly face</li>
                    <li>🌊 Coastal interior setting</li>
                    <li>✨ 80s aesthetic vibes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.details}>
          <div className={styles.detailCard}>
            <h3>Style</h3>
            <p>Hyper-realistic Photography</p>
          </div>
          <div className={styles.detailCard}>
            <h3>Era</h3>
            <p>1980s Aesthetic</p>
          </div>
          <div className={styles.detailCard}>
            <h3>Setting</h3>
            <p>Coastal Interior</p>
          </div>
          <div className={styles.detailCard}>
            <h3>Subject</h3>
            <p>Blonde Man, Silly Expression</p>
          </div>
        </div>
        
        <div className={styles.promptSection}>
          <h3 className={styles.promptTitle}>Original Prompt:</h3>
          <p className={styles.prompt}>{prompt}</p>
        </div>
      </div>
    </main>
  )
}
