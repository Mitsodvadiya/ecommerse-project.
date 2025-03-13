import React, { useEffect } from 'react'
import { Navbar } from '../features/navigation/components/Navbar'
import { ProductList } from '../features/products/components/ProductList'
import { resetAddressStatus, selectAddressStatus } from '../features/address/AddressSlice'
import { useDispatch, useSelector } from 'react-redux'
import {Footer} from '../features/footer/Footer'
import { selectLoggedInUser } from '../features/auth/AuthSlice'
// import Slider from '../ui/Slider'
// import FeatureGrid from '../ui/FeatureGrid'
import AboutUs from '../ui/AboutUs'

export const HomePage = () => {

  const dispatch=useDispatch()
  const addressStatus=useSelector(selectAddressStatus)
    const loggedInUser=useSelector(selectLoggedInUser)
  useEffect(()=>{
    if(addressStatus==='fulfilled'){

      dispatch(resetAddressStatus())
    }
  },[addressStatus])
  if(!loggedInUser){
      return (
        <>
        <Navbar isProductList={true}/>
        {/* <Slider /> */}
        
        <div className="flex flex-col gap-2 py-4 px-[200px] text-center">
            <h2 className="text-2xl font-bold text-gray-800">WELCOME TO WARDROBE WAVE</h2>
        </div>
        {/* <FeatureGrid /> */}
        <AboutUs />
        <ProductList isBannerVisible={false} />
        <Footer/>
        </>
      )
  }

  return (
    <>
    <Navbar isProductList={true}/>
    <ProductList/>
    <Footer/>
    </>
  )
}
