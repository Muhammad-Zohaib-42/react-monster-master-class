import user1 from "../assets/user1.jpg"
import user2 from "../assets/user2.jpg"
import user3 from "../assets/user3.jpg"
import user4 from "../assets/user4.jpg"
import user5 from "../assets/user5.jpg"
import SellerItem from "./SellerItem"

type Seller = {
    id: number,
    name: string,
    imgSrc: string
}

const SellersSection = () => {
  const sellers: Seller[] = [
    {
        id: 1,
        name: "Lucas Price",
        imgSrc: user1
    },
    {
        id: 2,
        name: "Lydia Nguyen",
        imgSrc: user2
    },
    {
        id: 3,
        name: "Abitha Dhamdhame",
        imgSrc: user3
    },
    {
        id: 4,
        name: "Fabien Rey",
        imgSrc: user4
    },
    {
        id: 5,
        name: "Janet Collins",
        imgSrc: user5
    }
  ]

  return (
    <div className="border border-slate-300 py-2 px-3">
        <h2 className="section-title mb-2">Top Sellers</h2>
        <ul className="flex flex-col gap-2">
            {
                sellers.map(sellerData => <SellerItem key={sellerData.id} imgSrc={sellerData.imgSrc} username={sellerData.name} />)
            }
        </ul>
    </div>
  )
}

export default SellersSection