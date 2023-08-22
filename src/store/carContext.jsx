import React from 'react'

const GoodsContext = React.createContext({
  id: '',
  name: '',
  price: 0,
  img: ''
})

export default GoodsContext;