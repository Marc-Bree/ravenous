import webkitchen from './Webkitchen.png';
import Business from './business';

function BusinessList(){
    const businesses = [
        {
            imageSrc: webkitchen,
            name: "Name",
            address: "Address",
            city: "City",
            state: "State",
            zipCode: "ZipCode",
            category: "Category",
            rating: "Rating",
            reviewCount: "ReviewCount"
        }
    ];
    return (
        <div className="business-list">
            {businesses.map((b, i) => (
                <Business key={i} data={b} />
            ))}
        </div>
    );
}

export default BusinessList;