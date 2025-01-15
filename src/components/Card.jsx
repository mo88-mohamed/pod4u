import { Children } from 'react';
import { Card } from "@chakra-ui/react"

import './card.css'

const PodcastCard = ({ title,image,author, type = 'vertical',style }) => {

    console.log('Card', children);
    return (
        <Card.Root className={'card' + ` ${type}-card`} style={style}>
            <Card.Header></Card.Header>
            <Image src={image} alt={title} />
            <Card.Body>
                <Card.Title>
                    {title?title:'Title'}
                </Card.Title>
                <Card.Description>
                    {author?author:'Author'}
                </Card.Description>

            </Card.Body>
            {/* {children} */}

        </Card.Root>
    )
};



const CardImage = ({ src, alt }) => {

    return (
        <CardI className="card-image">
            <img src={src} alt={alt} />
        </CardI>
    );
};

const CardContent = ({ item }) => {
    return (
        <div className="card-content">
            <h3 className='card-title'>{item.title}</h3>
            <p>{item.author}</p>

            <p className='card-description'>{`${item.description.substring(200)} ...`}</p>
        </div>
    );
};

const CardFooter = ({ item }) => {
    return (
        <div className="card-footer">
            <p className='card-date'>{item.date}</p>
        </div>
    );

};




export default Card;
export { CardImage, CardContent, CardFooter };