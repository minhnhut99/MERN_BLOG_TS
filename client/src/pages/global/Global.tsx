import React from 'react'
import "./Global.scss"
import Header from '@/components/header/Header'
import Bio from '@/components/bio/Bio'
import CardPost from '@/components/card_post/CardPost'
const Global = () => {
  return (
    <div>
      <Header />
      <div>
        <Bio />
      </div>
      <div className='list-post' style={{ display: 'flex', alignItems: "center", width: "80%", margin: '0 auto' }}>
        <CardPost type='block' />
        <CardPost type='block' />
        <CardPost type='block' />
      </div>
      <CardPost type='row' />
    </div>
  )
}

export default Global