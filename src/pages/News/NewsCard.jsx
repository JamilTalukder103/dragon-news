import React from 'react';
import { Card, Image } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news
    return (
        <div>
            <Card className='mb-3'>
                <Card.Header className='d-flex align-items-center'>
                    <Image roundedCircle style={{ height: "40px" }} src={author.img} />
                    <div className=' ps-3 flex-grow-1'>
                        <p className='mb-0'>{author.name}</p>
                        <p>23-12/2023</p>
                    </div>
                    <div className='d-flex'>
                        <p className='pe-2'>Bookmark</p>
                        <p>Share</p>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img src={image_url} />
                    <Card.Text>{details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read more</Link></>}</Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex'>
                    <div className='flex-grow-1 d-flex'>
                        <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={<FaRegStar />}
                            placeholderSymbol={<FaStar className='text-warning' />}
                            fullSymbol={<FaStar></FaStar>}
                        >

                        </Rating>
                        <span className='ps-2'>{rating?.number}</span>

                    </div>
                    <div>
                        <FaEye />{total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;