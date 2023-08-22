import React from 'react'
import headerClass from './carHeader.module.css'

import CarItem from '../../components/carItem/carItem'

export default function CarHeader(props) {

  const { carList, delItem } = props
  return (
    <div className={headerClass.NavWrap}>
      <h2>购物车</h2>
      <section className={headerClass.CarWrap}>
        <button className={headerClass.BtnCar}>我的购物车</button>
        <div className={ headerClass.GoodsList }>
          { 
            carList.map(item => {
              return <CarItem goods={item} key={item.id} delItem={(goods) => delItem(goods)}/>
            })
          }
          {
            carList.length > 0 && <button className={headerClass.BtnBuy}>点击购买</button>
          }
          {
            carList.length <= 0 && <div className={headerClass.NoData}>暂无数据</div>
          }
        </div>
      </section>
    </div>
  )
}
