import React from 'react'
import "./Global.scss"
import Header from '@/components/header/Header'
import Bio from '@/components/bio/Bio'
import CardPost from '@/components/card_post/CardPost'
import Title from '@/components/title/Title'
const Global = () => {
  return (
    <div>
      <Header />
      <div>
        <Bio />
      </div>
      <div className='list-post' style={{ display: 'flex', alignItems: "center", width: "80%", margin: '0 auto' }}>
        <CardPost type='row' />
        <CardPost type='row' />
        <CardPost type='row' />
      </div>
    </div>
  )
}

export default Global