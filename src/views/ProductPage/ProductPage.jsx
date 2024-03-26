import { useParams } from "react-router-dom";

export default function ProductPage(){
  const params = useParams();
  console.log(params);

  return (
    <div>product page {params.id}</div>
  );
}
