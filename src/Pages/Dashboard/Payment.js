import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L20brEYN1PQtsDgmqgUzgf7ieLpNAA76EfLMvb437jRE2IK59Zbdo70Skmb6SwkUFYlWj8q2OiuBKVHs281bVz000JAcg9aVz');

const Payment = () => {
    const { id } = useParams();
    const url = `https://limitless-inlet-88208.herokuapp.com/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    // loading portion

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-blue-500">Hello, {appointment.patientName} </p>
                    <h2 class="card-title"> <span className='font-bold'>Please pay for : </span> <span className='text-success'>{appointment.treatment}</span> </h2>
                    <p> <span className='font-bold'>Your appointment :</span> <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
                    <p> <span className='font-bold'>Please pay :</span> <span className='text-blue-500'>${appointment.price}</span></p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;