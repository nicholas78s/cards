import React, { Children } from 'react'
import '../bootstrap/css/bootstrap.min.css'

interface CardProps {
  title: string,
  text: string,
  children?: React.ReactNode
}
export const Card = ({ title, text, children }: CardProps) => {
  return (
    <div className="card" style={{width: "18rem"}}>
      {children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}
