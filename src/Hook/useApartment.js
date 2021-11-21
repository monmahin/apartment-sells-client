import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const useApartment = () => {
    const { apartmentId } = useParams();
    const [apartment, setApartment] = useState({})
    
    useEffect(() => {
        const url = `https://desolate-lowlands-20122.herokuapp.com/apartments/${apartmentId}`;
        fetch(url)
        .then(res => res.json())
        .then(data=>setApartment(data));
    }, [apartmentId])
    // const { houseName, houseImg, houseInfo, price, place,_id} = apartment
    return {apartment}
};

export default useApartment;