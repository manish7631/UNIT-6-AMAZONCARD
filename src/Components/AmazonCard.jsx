import React from 'react'
import styles from "./Amazon.module.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export const AmazonCard = (item) => {

  return (
    <div className={styles.Main_div}>
      {item.info.map((e) => {
        return (
          <div>
            <div className={styles.First_div}>
              <div>
                <h3>{e.date}</h3>
                <button className={styles.button}>{e.button}</button>
              </div>
              <div>
                <img style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "rgb(248, 206, 0)",
                  color: "rgb(248, 206, 0)"
                }} src={e.logo} alt="" />
              </div>
            </div>


            <div className={styles.Second_div}>

              <h1>{e.des}</h1>
              <h1>{e.tag}</h1>
            </div>


            <div className={styles.Third_div}>
              <h1>{e.option}</h1>
              <h1>    <ArrowForwardIcon /></h1>
            </div>

          </div>
        )
      })}



    </div>
  )
}
