import React from 'react'
import goodsClass from './goods.module.css'

export default function Goods(props) {

  const { 
    addItem,
    goods,
  } = props

  return (
    <div className={goodsClass.GoodsList}>
      <div className={goodsClass.ImgWrap}>
        <img src={goods.img} alt='...' />
      </div>
      <div className={goodsClass.DescWrap}>
        <div className={goodsClass.Name}>{ goods.name }</div>
        <div className={goodsClass.Price}>{ goods.price }</div>
        <div>
          <button 
            className={goodsClass.BtnBuy}
            onClick={() => {addItem(goods)}}
          >加入购物车</button>
        </div>
      </div>
    </div>
  )
}
