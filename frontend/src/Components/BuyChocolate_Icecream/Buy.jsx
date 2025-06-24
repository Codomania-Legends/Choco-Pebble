import React, { useEffect, useState } from 'react'
import CHOCOLATE from "./Chocolate.json"
import ICECREAM from "./Icecream.json"
import "./Buy.css"

function Buy({heading , what}) {
    const [ data , setData ] = useState([])
    useEffect( () => {
        setData(ICECREAM)
        if( what == "chocolate" ) setData(CHOCOLATE)
    } , [] )
    return (
        <>
            <main className="buySection background-gr">
                <section className="mainBuyComponent flex">
                    <div className="heading-buy flex">{heading}</div>
                    <div className="componentBuySectionDivs flex">
                        {
                            data.length != 0 
                            &&
                            data.map( (v , i) => (
                                <div className="buyBlock flex" key={`${v , i}`}>
                                    <div className="blobkbuyDiv flex">
                                        <div className="options-buy flex">
                                            <div className="recommend-buy">{v.recommend}</div>
                                            <div className="new-buy">{v.new}</div>
                                        </div>
                                        <img src={v.image} className="buyImage" />
                                        <div className="namePrice-buy">
                                            <div className="buyName">{v.name}</div>
                                            <div className="brandPriceLike-buy">
                                                <div className="brandPriceDiv">
                                                    <div className="brand-buy">{v.brand}</div>
                                                    <div className="price-buy">{v.price}</div>
                                                </div>
                                                <div className="like-buy">
                                                    <i class="fa-solid fa-heart"></i>
                                                </div>
                                            </div>
                                            <div className="gmCart">
                                                <div className="weight">{v.gm}</div>
                                                <div className="cart">
                                                    <i class="fa-brands fa-opencart"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) )
                        }
                    </div>
                </section>
            </main>
        </>
    )
}

export default Buy
