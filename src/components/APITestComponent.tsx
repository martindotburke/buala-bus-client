import { useEffect, useState } from "react";

function APITestComponent() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL)
          .then(response => response.json())
          .then(json => setData(json))
          .catch(error => console.error(error));
      }, []);
      
    return(
        <div>The backend API returns... {data?.welcomeMessage}</div>
    );

}

export default APITestComponent;