import React from 'react'




const rating = ({stars, reviews}) => {
    return (
        <div className='rating'>
            <span><i
                style={{ color: '#F8e825' }} className={
                    stars >= 1 ? 'fas fa-star'
                        :
                        stars >= 0.5 ? 'fas fa-star-half-alt'
                            :
                            'far fa-star'}></i></span>
            <span><i style={{ color: '#F8e825' }} className={
                stars >= 2 ? 'fas fa-star'
                    :
                    stars >= 1.5 ? 'fas fa-star-half-alt'
                        :
                        'far fa-star'}></i></span>
            <span><i style={{ color: '#F8e825' }} className={
                stars >= 3 ? 'fas fa-star'
                    :
                    stars >= 2.5 ? 'fas fa-star-half-alt'
                        :
                        'far fa-star'}></i></span>
            <span><i style={{ color: '#F8e825' }} className={
                stars >= 4 ? 'fas fa-star'
                :
                stars >= 3.5 ? 'fas fa-star-half-alt'
                    :
                    'far fa-star'}></i></span>
            <span><i style={{ color: '#F8e825' }} className={
                stars >= 5 ? 'fas fa-star'
                :
                stars >= 4.5 ? 'fas fa-star-half-alt'
                    :
                    'far fa-star'}></i></span>
                    <span>
                        {reviews && reviews} Reviews
                    </span>
        </div>
    )
}

export default rating

//rafce