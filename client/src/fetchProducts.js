// Client-side JavaScript code to fetch products from the backend server

const fetchProducts = () => {
    return fetch('http://localhost:5001/api/products') // Assuming the endpoint on the backend server is '/api/products'
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Handle the data received from the server
        return data; // Return the products data
      })
      .catch(error => {
        // Handle any errors that occur during the fetch operation
        console.error('There was a problem with the fetch operation:', error);
        return null; // Return null or handle the error as needed
      });
  }
  
  export default fetchProducts;
  