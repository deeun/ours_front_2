import React from 'react'
import styles from './About.module.css'

const About = (props) => {
  console.log(props);
  return (
    <>
    <div className={styles.about}>
      <h1>π±λμ΄μ΄ μ΄λ¦¬κΈ° νλ‘μ νΈλπ±</h1>
      </div>

      <div className={styles.info}>
      <h3>
      μ§μ­λ³λ‘ νΉμμ μ΄λ € λ§λ  λμ΄μ΄ μ²΄νμ μ κ΅­ λμ΄μ΄μ²΄ννμ€ λ°μ΄ν°λ₯Ό μ΄μ©ν΄ μκ°νλ νλ‘μ νΈμλλ€.<br/>
      <br/>
      μ΅κ·Ό κ°λ³μ¬νμ μ νΈνλ©΄μ μ§§μ μκ° λ¨Έλ¬΄λ₯΄λ€ κ°λ μ¬νλ³΄λ€ νμ§μΈμ²λΌ μνν΄λ³΄λ©° μ¬ννλ κ²μ΄ νΈλ λμλλ€.<br/>
      λν νμ§μΈμ²λΌ μνμ νλ€κ° κ·λμ μκ° νκ³  μλ μ μ μΈλλ€λ λμ΄λκ³  μλ μΆμΈμλλ€.<br/>
      <br/>
      νμ§λ§ λμ΄μ΄ μ§μ­μμλ μ½λ‘λ19λ‘ μ§μ­κ΄κ΄κ²½κΈ°κ° μμΈ λ¬λ€μκ³ ,  μΈκ΅­μΈ λΈλμμ μΈκ΅¬ κ°μλ‘ μμ§κΉμ§ μΌμμ΄ λ§μ΄ λΆμ‘±ν μνμλλ€.<br/>
      μ΄λ¬ν λμ¦(Needs)λ€μ λμ΄μ΄ μ²΄ννλ‘κ·Έλ¨μ μκ°ν΄ μ£Όλ©° μλ‘ μΆ©μ‘±μν€κ³ , μ§μ­μ νλ ₯μ λΆμ΄λ£λ κ²μ λͺ©νλ‘ νκ³  μμ΅λλ€.<br/>
      <br/>
      μ μ μΈλμκ² μΈκΈ° μλ 'ν λ¬μ΄μ΄'λ νμ€ν μ§μ­ κ΄κ΄νλ³΄ ν¨κ³Όλ₯Ό λμ΄ μ΄μ£Ό μ μ°©μΌλ‘ μ°κ²°λλ ν¨κ³Όλ λνλκ³  μμ΅λλ€.<br/>
      μ΄ μ¬μμ ν΅ν΄μ (μ²­λ)λ§μμ΄ λ§λ€μ΄μ§λ©΄ κ³΅κ°μ΄ λ§λ€μ΄μ§κ³ , μ¬λλ€μ΄ λͺ¨μ΄κ³ , μ΄μΌκΈ°κ° μκΈ°κ³ , κ°λ₯μ±μ΄ μκΈ°λ€ λ³΄λ©΄, μ²­λλ€μ΄ κ·Έ μ§μ­μ λ§μ΄ λ¨Έλ¬Όκ² λλ©°<br/>
      μ²­λλ€μκ² κ·λμ λν μ λ³΄ λν μλ €μ£Όλ©° κ·λΒ·κ·μ΄μ λν λ¬Έμ μ λ€μ ν¨κ» ν΄κ²°ν  μ μκΈ°λ₯Ό κΈ°λν΄λ΄λλ€.
     
      </h3>    
      </div> 

      <div className={styles.Image}>
        <img className={styles.img1} src="https://m.nongmin.com/upload/bbs/201904/20190423133736328/20190423133736328.jpg" />
        <img className={styles.img2} src="https://vrthumb.imagetoday.co.kr/2020/03/06/tid283t001248.jpg" />     
      </div>
      <br/>

    <div/>
    </>
  )
}

export default About;

