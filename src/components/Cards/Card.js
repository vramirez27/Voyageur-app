
import { React } from 'react';
import { CardItem } from './CardItem';
import 'components/Cards/Card.css'

function Card(){
    return (
        <div className = 'cards'>
            <h1>Our Unique Destinations</h1>
            <div className = 'cards__container'>
                <div className = 'cards__wrapper'>
                     <ul className = 'cards__items'>
                       <CardItem
                       src = 'images/img-3.jpg'
                       text= 'You deserve a break from work. Explore our amazing beaches on the Coast'
                       label = "Adventure"
                       path= './services'/>
                        <CardItem
                       src = 'images/img-2.jpg'
                       text= 'You deserve a break from work. Explore our amazing beaches on the Coast'
                       label = "Adventure"
                       path= './services'
                       />
                        <CardItem
                       src = 'images/img-1.jpg'
                       text= 'You deserve a break from work. Explore our amazing beaches on the Coast'
                       label = "Adventure"
                       path= './services'
                       />
                       
                     </ul>
                </div>
               
            </div>

        </div>
    )
}


export default Card;