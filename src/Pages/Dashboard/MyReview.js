import React from 'react';
import { useForm } from 'react-hook-form';
const MyReview = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = "https://limitless-inlet-88208.herokuapp.com/review";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };


    return (
        <div className='addItem w-50 mx-auto mt-20'>
            <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
                <input className='input input-bordered w-full max-w-xs my-2' required placeholder="Give us Ratings (1-5).." type="number" {...register("rating")} />
                <textarea className='input input-bordered w-full max-w-xs my-2' required placeholder="Share your valuable feedback.." {...register("description")} />
                <input className="btn w-full max-w-xs bg-slate-400 text-white font-bold mt-3" type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default MyReview;