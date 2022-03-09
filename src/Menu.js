import React from 'react'

const Menu = ({items}) => {
  return (
    <div className='menu-items'>
        {items.map((menuItem) => {
            const { id, title, img, desc, price } = menuItem;
            return <article key={id} className='menu-article'>
                <img src={img} alt={title} />
                <div className='menu-info'>
                    <header>
                        <h4 className='menu-title'>{title}</h4>
                        <h4 className='menu-price'>${price}</h4>
                    </header>
                    <p className='menu-desc'>{desc}</p>
                </div>
            </article>
        })}
    </div>
  )
}

export default Menu;