import React from 'react'
import carClass from './carItem.module.css'

export default function CarItem(props) {
  const { goods, delItem } = props
  return (
    <div className={carClass.ItemWrap}>
      <div className={ carClass.Name }>{goods.name}</div>
      <div className={ carClass.Price }>{goods.price}*{goods.count}</div>
      <button 
        className={carClass.BtnDel} 
        onClick={() => delItem(goods)}
      >删除</button>
    </div>
  )
}
