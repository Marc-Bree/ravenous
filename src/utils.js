const apiKey = [YOUR_API_KEY];
const url = 'https://api.yelp.com/v3';
const endpoint = '/businesses/search';

export const getTerm = async (term, location, sortBy) => {
    const urlToFetch = `${url}${endpoint}?term=${term}&location=${location}&sort_by=${sortBy}`;

    try {
        const response = await fetch(urlToFetch, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                accept: 'application/json'
            }
        });
        if (response.ok) {
            const jsonResponse = await response.json();

            return jsonResponse.businesses.map(business => ({
                id: business.id,
                name: business.name,
                imageUrl: business.image_url,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                rating: business.rating,
                reviewCount: business.review_count
            })); 
        }
        throw new Error('400, Request failed!');
    } catch(error) {
        console.log(error);
    } 
};
