import { useState } from 'react'
import Card from './Card.js'

function Cards () {
    const [items, setItems] = useState([
        {id: 1, img: '/img/bulbasaur.png', stat: "" },
        {id: 1, img: '/img/bulbasaur.png', stat: "" },
        {id: 2, img: '/img/charmander.png', stat: "" },
        {id: 2, img: '/img/charmander.png', stat: "" },
        {id: 3, img: '/img/chikorita.png', stat: "" },
        {id: 3, img: '/img/chikorita.png', stat: "" },
        {id: 4, img: '/img/cyndaquil.png', stat: "" },
        {id: 4, img: '/img/cyndaquil.png', stat: "" },
        {id: 5, img: '/img/mewtwo.png', stat: "" },
        {id: 5, img: '/img/mewtwo.png', stat: "" },
        {id: 6, img: '/img/pika.png', stat: "" },
        {id: 6, img: '/img/pika.png', stat: "" },
        {id: 7, img: '/img/squirtle.png', stat: "" },
        {id: 7, img: '/img/squirtle.png', stat: "" },
        {id: 8, img: '/img/totodile.png', stat: "" },
        {id: 8, img: '/img/totodile.png', stat: "" }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current) {
        if (items[current].id === items[prev].id) {
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setPrev(-1)
        } else {
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 800)
        }
    }

    function handleClick(id) {
        if (prev === -1) {
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        } else {
            check(id)
        }
    }

    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick}/>
            
            ))}
        </div> 
    )


}

export default Cards;