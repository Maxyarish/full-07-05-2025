import React, { useEffect } from 'react';
 import PropTypes from 'prop-types';
 import {useDispatch, useSelector} from 'react-redux'
import { fetchAllSportsAsync } from '../store/sportSlice';

 const SportList = () => {
    const dispatch = useDispatch();
    const {sports,error,isLoading}=useSelector((state)=>state.sports)
    useEffect(()=>{
        dispatch(fetchAllSportsAsync())
    },[dispatch])
    const showSport = (sport)=> <li key={sport._id}>{sports.name}</li>
    if (error) {
        return <p>{error}</p>
    }
    if (isLoading) {
        return <p>Loading...</p>
    }
    return <section>
        <h2>Sports:</h2>
        <ul>{sports.map(showSport)}</ul>
    </section>
 };
 
 SportList.propTypes = {
 
 };
 
 
 export default SportList;
 