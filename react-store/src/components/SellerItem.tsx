type SellerItemProps = {
    imgSrc: string,
    username: string
}

const SellerItem = ({imgSrc, username}: SellerItemProps) => {
  return (
    <li className="flex items-center gap-1.5">
        <img className="h-8 w-8 rounded-full" src={imgSrc} alt={`${username} imaage`} />
        <p className="grow">{username}</p>
        <button className="py-1 px-2 bg-slate-700 text-slate-200 transition hover:bg-slate-800 hover:text-slat-100 text-sm cursor-pointer">Follow</button>
    </li>
  )
}

export default SellerItem