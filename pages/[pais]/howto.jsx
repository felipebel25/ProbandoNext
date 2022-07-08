import React,{useEffect , useState} from 'react'

// import { usePageAnalyitics } from '../helpers/hooks/usePageAnalytics';
import { useRouter } from "next/router";
import Information from '../../components/howto/Information';
import Header from '../../components/Navbar/Header';


const Appholistica = () => {
  const [country, setCountry] = useState('');
  let router = useRouter()
//   usePageAnalyitics();
  const validateRoute =
    router.query.pais === "co"
      ? "co"
      : router.query.pais === "bo"
      ? "bo"
      : "mx";


  

  useEffect(() => {
      setCountry(validateRoute)
  }, [validateRoute]);
  return (
    <>
    {/* asda */}
  
      <Header countryName={validateRoute} />
      <Information />
    </>
  )
}
export default Appholistica