import NewNote from "./NewNote";

const Home = (props) => {
 const {showAlert}=props
  return (
   <>
 <NewNote showAlert={showAlert} />
   </>

  );
}

export default Home;
