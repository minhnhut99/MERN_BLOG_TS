import React from 'react'
import "./CardPost.scss"

export interface ICardProps {
  type: string
}
const CardPost = ({ type = 'block' }: ICardProps) => {
  return (
    <div className='card'>
      <div className={type === "block" ? "card-container" : "card-container-row"}>
        <img src="https://mria-hugo.netlify.app/images/11.jpg" alt="img logo" />
        <div className='card-right'>
          <div className='card-category'>
            <p>Technology</p>
          </div>
          <h3 className='card-title'>In order to write about life first you must live it</h3>
          <div className='card-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam ex amet inventore sunt recusandae facilis atque eaque non, sed unde dignissimos dolore deserunt culpa in nulla quisquam vero maiores?</div>
          <div className='card-footer'>
            <img src="https://mria-hugo.netlify.app/images/02-1.jpg" alt="img" />
            <div className='card-author-date'>
              <p className='card-author'>Nolan Bergson</p>
              <p className='card-date'>29 May 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPost