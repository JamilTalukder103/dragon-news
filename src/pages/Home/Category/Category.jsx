import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../../News/NewsCard';

const Category = () => {
    // const { id } = useParams()?
    const categoryNews = useLoaderData()
    return (
        <div>
            <h1>this is a category page{categoryNews.length}</h1>
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;