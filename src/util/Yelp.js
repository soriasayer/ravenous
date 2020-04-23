const apiKey = 'XqnErkRysvBFWcdVi0yFBl8LNrB30vgKLWoidkylJwtmGyvDMjcJiAA0Io3mlt5VE9NzLV3-faiiBYT2ODENdq9UvxuwaBvr9q3ihBycZsutQtcFkLPOIsxmQuPDXXYx';

const yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business);
                    return  {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        country: business.location.country,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        url: business.url
                        
                    }

                });
            }
        })
      }

};

export default yelp;