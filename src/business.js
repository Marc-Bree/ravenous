import './business.css';

export default function Business({ data }){
  return (
    <div className="business">
      <div className="businessImg">
        <img src={data.imageUrl} alt={data.name} />
      </div>

      <h2 className="businessTitle">{data.name}</h2>

      <div className="businessRow">
        <div className="left">{data.category}</div>
      </div>

      <div className="businessRow">
        <div className="left">{data.address}</div>
        <div className="right">Rating: {data.rating}</div>
      </div>

      <div className="businessRow">
        <div className="left">{data.city}, {data.state} {data.zipCode}</div>
        <div className="right">{data.reviewCount} reviews</div>
      </div>
    </div>
  );
}