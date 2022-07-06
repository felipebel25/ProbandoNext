import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
        const router = useRouter()
        const {query:{idProduct}} = router

        return (
            <div>
                <em>{idProduct}</em> 
                <hr/>
                Product Item

            </div>
        )
    }

    export default ProductItem