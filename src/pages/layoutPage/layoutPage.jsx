import React from 'react'
import layoutClass from './layoutPage.module.css'

export default function LayoutPage(props) {
  return (
    <section className={layoutClass.Container}>
      { props.children }
    </section>
  )
}
