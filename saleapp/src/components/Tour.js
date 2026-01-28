import tours from "../data/TourData";

const Tour = () =>{
    // var [tours,setTours] = useState([]);
    // setTours = tours;
    console.log("tours:", tours);
console.log("isArray:", Array.isArray(tours));
console.log("type:", typeof tours);
    

    return (
     <>
      <div>
        {tours.map(tour => (
            <div key={tour.id}>
               <h2>{tour.name}</h2>
               <h2>{tour.location}</h2>
               <p>{tour.price.toLocaleString()} VNĐ</p>
            </div>
        ))}
        
      </div>
     </>
    );
}
export default Tour