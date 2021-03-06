import { Router, useRouter } from 'next/router';
import React, { useEffect } from 'react'
import styles from '../../Ours/Our/Detailslists.module.css'
import Kakaomap from './Kakaomap';

let place = {};
const Detailslists = (props) => {
    const router = useRouter();
    const detailslists = props.detailslists.map(detailslist => {
        if (props.realName === detailslist.villageName){
            place = detailslist;
        }
   
    });

    const villageName = place.villageName
    const experienceName = place.experienceName
    const address = place.address
    const managerPhone = place.managerPhone
    console.log("행복"+villageName);
    // villageName : 거북이 행복마을
    const Reservation = () => {
      console.log('Reservation')
      router.push( {pathname : `/ours/reservation/[villageName][experienceName][address][managerPhone]`, 
      query:{
        villageName: villageName,
        experienceName : experienceName,
        address : address,
        managerPhone : managerPhone
    }})
    
    
    }
    return (
        <>
        <div className={styles.main}>
            <div className={styles.area1}>  
            <h3>체험명</h3><br/>
            <h2>{place.villageName}</h2>
            <span className={styles.text}>
            {place.experienceName}<br/><br/>
            {place.address}<br/>
            {place.managerPhone}<br/><br/><br/>
            </span>
            <button className={styles.rsv_btn} onClick ={Reservation}>예약하기</button>
            </div>
            <Kakaomap latitude={place.latitude} longitude={place.longitude}/>
        </div>
        </>
        );
    };
export default Detailslists;
