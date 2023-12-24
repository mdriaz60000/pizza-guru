import {   Avatar, Button, Navbar } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navber = () => {
const {user, googleSignIn, logOut} = useContext(AuthContext)
console.log(user)
 
const handleGoogleSignIn = () =>{
  googleSignIn()
  .then((result ) =>{
   console.log(result)
  })
  .catch((error) => {
    console.error(error);
    // toast("error googlelogin!");
  });
  
  }

  const handleSignOut=()=>{
    logOut()
    .then(()=>{
      // toast("sucess logout");
    })
    .catch((error)=>{
     console.error(error)
    })
      }

    return (
        <div>
             <Navbar fluid rounded>
      <Navbar.Brand href="/">
      
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Pizza-Guru</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      {user? <div >  <Avatar img={user.photoURL} alt="avatar of Jese" rounded /></div> : ""}
         {
          user ? <Button onClick={handleSignOut}>logOut</Button> :
          <Button onClick={handleGoogleSignIn}> login</Button>
         }
                
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="/addCarts">AddCarts</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
 
        </div>
    );
};

export default Navber;