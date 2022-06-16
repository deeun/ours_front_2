import React,{useEffect} from 'react'
import { useRouter } from 'next/router'
import styles from '../Our/Details.module.css'
import KakaoMap from "../Our/Kakaomap";
import Detailslists from './Detailslists';

// 체험 상세정보
const  Details = (props) => {

  const router = useRouter();
  const Reservation = () => {
    console.log('Reservation');
    router.push('/ours/reservation')                       
  }

  return (
    <>
    <div className={styles.flexbox}>
      <div className={styles.flexboxleft}>
      <KakaoMap />
      </div>
    </div>   
    </>
  )
}

export default Details