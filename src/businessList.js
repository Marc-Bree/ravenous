import Business from './business';
import './businessList.css';

export default function BusinessList({ businesses }){
    return (
        <div className="business-list">
            {businesses.map((b, i) => (
                <Business key={i} data={b} />
            ))}
        </div>
    );
}