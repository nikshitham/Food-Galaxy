import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
   return (
    <div className="header">
        <div className="logo-container">
        <a href="/">
        <img className="logo" alt="logo-image" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
        </a>
        </div>
        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Cart</li>
        </ul>
        </div>
    </div>
    
   );
}

const restaurantList = [
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "65797",
          "name": "Leon's - Burgers & Wings (Leon Grill)",
          "uuid": "2ecdca25-3954-4f2e-8d50-4e13e2faf73e",
          "city": "1",
          "area": "Koramangala",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "r4ufflqojich0r29efvc",
          "cuisines": [
            "American",
            "Snacks",
            "Turkish",
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "slaString": "24 MINS",
          "lastMileTravel": 1.399999976158142,
          "slugs": {
            "restaurant": "leon-grill-koramangala-koramangala",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "Plot No.123 K.H.B Colony, 5th Block , Koramangala , Bangalore -95",
          "locality": "Koramangala",
          "parentId": 371281,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use SPECIALS",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 on select items | Use code SPECIALS",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use SPECIALS",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 on select items | Use code SPECIALS",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 2700,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 2700,
            "message": "",
            "title": "Delivery Charge",
            "amount": "2700",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=6759357~p=4~eid=00000188-0e09-4198-4714-bd0c005a046b",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "65797",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "lastMileTravel": 1.399999976158142,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.3",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "201224",
          "name": "Asha tiffins",
          "uuid": "e32381cf-6468-4c10-9bad-47fa08e898a8",
          "city": "1",
          "area": "HSR Layout",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "n15vckntsiboiod3gpco",
          "cuisines": [
            "Indian",
            "South Indian",
            "Beverages"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "slaString": "22 MINS",
          "lastMileTravel": 3.9000000953674316,
          "slugs": {
            "restaurant": "asha-tiffins-hsr-hsr-2",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "Asha Tiffins, 5th Main Road, Sector 7, HSR Layout, Bengaluru, Karnataka, India",
          "locality": "7th Sector",
          "parentId": 236243,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "30% off",
            "shortDescriptionList": [
              {
                "meta": "30% off | Use TRYNEW-XL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "30% off upto ₹70 | Use TRYNEW-XL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "30% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW-XL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "30% off upto ₹70 | Use TRYNEW-XL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 3300,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3300,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3300",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "3.9 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "201224",
            "deliveryTime": 22,
            "minDeliveryTime": 22,
            "maxDeliveryTime": 22,
            "lastMileTravel": 3.9000000953674316,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.4",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "118278",
          "name": "Namaste",
          "uuid": "81f6e475-dc52-4954-aefa-1dbcc740227d",
          "city": "1",
          "area": "BTM Layout",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "wya5kg7wxvbh5opfpo1m",
          "cuisines": [
            "South Indian",
            "Thalis",
            "Snacks",
            "Biryani",
            "Indian",
            "Chinese",
            "Desserts",
            "Beverages"
          ],
          "tags": [
            
          ],
          "costForTwo": 10000,
          "costForTwoString": "₹100 FOR TWO",
          "deliveryTime": 29,
          "minDeliveryTime": 29,
          "maxDeliveryTime": 29,
          "slaString": "29 MINS",
          "lastMileTravel": 4.199999809265137,
          "slugs": {
            "restaurant": "namaste-btm",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "69, 7th Main Road, BTM 2nd Stage, Bangalore - 76",
          "locality": "2nd Stage",
          "parentId": 366271,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 3900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 3900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "4.1 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "118278",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "lastMileTravel": 4.199999809265137,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.2",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "34301",
          "name": "Sri Udupi Park (100ft Road)",
          "uuid": "82e5a42b-6a2d-45c7-a096-320333bd6c4e",
          "city": "1",
          "area": "Indiranagar",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "jxp8y1chnqljwqylpkov",
          "cuisines": [
            "South Indian",
            "North Indian",
            "Chaat",
            "Beverages",
            "Chinese"
          ],
          "tags": [
            
          ],
          "costForTwo": 10000,
          "costForTwoString": "₹100 FOR TWO",
          "deliveryTime": 45,
          "minDeliveryTime": 45,
          "maxDeliveryTime": 45,
          "slaString": "45 MINS",
          "lastMileTravel": 6.300000190734863,
          "slugs": {
            "restaurant": "sri-udupi-park-indiranagar-indiranagar",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "#273 100 FEET ROAD DIFFENCE COLONY 6TH MAIN INDIRANAGAR BANGALORE-38",
          "locality": "Defence Colony",
          "parentId": 194697,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 5100,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 5100,
            "message": "",
            "title": "Delivery Charge",
            "amount": "5100",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "6.3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "34301",
            "deliveryTime": 45,
            "minDeliveryTime": 45,
            "maxDeliveryTime": 45,
            "lastMileTravel": 6.300000190734863,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.4",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "283196",
          "name": "Krishna Kuteera",
          "uuid": "90147c65-a330-429e-a75f-ff4674391eb2",
          "city": "1",
          "area": "Arekere",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "jzo8vzeb29f6z4xmwwbs",
          "cuisines": [
            "South Indian",
            "Chinese",
            "North Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 40,
          "minDeliveryTime": 40,
          "maxDeliveryTime": 40,
          "slaString": "40 MINS",
          "lastMileTravel": 8.300000190734863,
          "slugs": {
            "restaurant": "krishna-kuteera-arekere-arekere",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "No 19 3C, Avanishringeri Nagar, Nyanappanahalli Village, Begur Hobli, Bangalore - 560076",
          "locality": "Avani Shringeri Nagar",
          "parentId": 120876,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 6700,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 6700,
            "message": "",
            "title": "Delivery Charge",
            "amount": "6700",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "8.3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "283196",
            "deliveryTime": 40,
            "minDeliveryTime": 40,
            "maxDeliveryTime": 40,
            "lastMileTravel": 8.300000190734863,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.3",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "660675",
          "name": "Cafe Amudham",
          "uuid": "748db01d-25af-41a8-b012-ce948960efcb",
          "city": "1",
          "area": "Koramangala",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "c4314ce3710e1cc462cef8d978a58ffc",
          "cuisines": [
            "South Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "slaString": "28 MINS",
          "lastMileTravel": 0.800000011920929,
          "slugs": {
            "restaurant": "cafe-amudham-koramangala-koramangala",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "No. 146, 5th Block, Koramangala, Bangalore, BTM Layout , B.B.M.P South, Karnataka-560095",
          "locality": "5th Block Kormangala",
          "parentId": 396620,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 2700,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 2700,
            "message": "",
            "title": "Delivery Charge",
            "amount": "2700",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=6693054~p=7~eid=00000188-0e09-4198-4714-bd0d005a0749",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "0.8 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "660675",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "lastMileTravel": 0.800000011920929,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.5",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      }

]


const RestaurantCard = ({name, cuisines, avgRating, costForTwoString, cloudinaryImageId}) => {
    return (
            <div className="card">
               <img className="res-image" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt="image" />
               <h3>{name}</h3>
               <h3>{cuisines.join(",")}</h3>
               <h3>{avgRating} stars</h3>
               <h4>{costForTwoString}</h4>
            </div>
    );

}
    
const Body = () => {
    return (
      <div className="restaurant-list">
        {
            restaurantList.map((restaurant)=>{
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            })
        }
         {/* <RestaurantCard {...restaurantList[0].data} />
         <RestaurantCard {...restaurantList[1].data}/>
         <RestaurantCard {...restaurantList[2].data}/>
         <RestaurantCard {...restaurantList[3].data} />
         <RestaurantCard {...restaurantList[4].data}/>
         <RestaurantCard {...restaurantList[5].data}/> */}
      </div>
    );
}

const FooterComponent = () => {
    return (
        <h4>Footer will be here</h4>
    );
}

const AppLayout = () => { 
    return (
        <>
        <Header/>
        <Body/>
        <FooterComponent/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);