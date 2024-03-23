export default function ProductCard( {image , title , type , price} ){
  return(
    <div>
      <img src={image} alt="" />
      <div>
        <div>{title}</div>
        <div>{type}</div>
        <div>{price}</div>
      </div>
    </div>
  )
}