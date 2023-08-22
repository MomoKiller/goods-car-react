import React, { useContext, useState } from 'react'
import goodsCarClass from './GoodsCar.module.css'
import LayoutPage from '../layoutPage/layoutPage'
import CarHeader from '../carHeader/carHeader'
import Goods from '../../components/goods/goods'

export default function GoodsCar() {

  const goodsList = [
    {
      id: '0001',
      img: '',
      name: '苹果-线上视频面试（万得3C会议）线上视频面试（万得3C会议）',
      price: 10.99,
    },{
      id: '0002',
      img: '',
      name: '西瓜',
      price: 10.99,
    },{
      id: '0003',
      img: '',
      name: '葡萄',
      price: 10.99,
    },{
      id: '0004',
      img: '',
      name: '海南凤梨',
      price: 10.99,
    },{
      id: '0005',
      img: '',
      name: '北京烤鸭',
      price: 10.99,
    },{
      id: '0006',
      img: '',
      name: '香蕉',
      price: 10.99,
    }
  ]

  const [carList, setCarList] = useState([])

  // 添加购物车
  const addItem = goods => {
    if(carList.some(item => item.id == goods.id)) {
      const goodsIndex = carList.findIndex(item => item.id == goods.id)
      const newCarList = [...carList] // 解构赋值
      newCarList[goodsIndex].count += 1
      setCarList(newCarList)
    }else {
      setCarList([
        ...carList,
        {
          ...goods,
          count: 1
        }
      ])
    }
  }

  // 删除购物车
  const delItem = goods => {
    const goodsIndex = carList.findIndex(item => item.id == goods.id)
    const newCarList = [...carList]
    if(carList[goodsIndex].count <= 1) {
      window.confirm(`确定要移除${goods.name}吗？`) && newCarList.splice(goodsIndex, 1)
    }else {
      newCarList[goodsIndex].count -= 1
    }
    setCarList(newCarList)
  }

  return (
    <LayoutPage>
      <CarHeader carList={carList} delItem={(goods) => delItem(goods)}></CarHeader>
      <div className={goodsCarClass.GridLayout}>
        {
          goodsList.map(item => {
            return <Goods 
              goods={item} 
              key={item.id} 
              addItem={(goods) => {addItem(goods)}}
            ></Goods>
          })
        }
      </div>
    </LayoutPage>
  )
}
