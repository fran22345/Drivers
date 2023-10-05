import Cards from "../../components/Cards";
import SearchBar from "../../components/SearchBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllDriver } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const drivers = useSelector((state) => state.allDrivers);

  
  useEffect(() => {
    dispatch(findAllDriver());
    
  }, []);


  return (
    <div>
      <SearchBar />
      <Cards drivers={drivers} />
    </div>
  );
};

export default Home;
