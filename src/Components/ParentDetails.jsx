import { useState } from "react"
import { AmazonCard } from "./AmazonCard"
import { AppleCard } from "./AppleCard"


export const ParentDetails = () => {
  const [value, setValue] = useState([

    {
      date: "28/03/2021",
      des: "Amazon Gift",
      tag: "Pay",
      button: "Case Study",
      option: "Desktop-Mobile",
      logo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
    },


  ])


  const [valueApple, setValueApple] = useState([

    {
      date: "17 Sep 2020",
      des: "Apple Gift",
      tag: "Payment",
      button: "Case Study",
      option: "MacOs-Mobile",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    },


  ])



 
  return (
    <div>
      ParentDetails

      <AmazonCard info={value} />

      <br />

      <AppleCard info={valueApple} />
    </div>
  )
}
