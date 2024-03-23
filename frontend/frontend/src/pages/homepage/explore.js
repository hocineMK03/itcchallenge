import React, { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/homepage/explore.css';
import productsAPI, { handleDisplayProducts } from '../../services/productsAPI';
import ExploreDeatils from './exploredetails';
import ExploreDetails from './exploredetails';
const Explore = ({products,setProducts}) => {
    
  const [particulairproduct,setParticulairproduct]=useState(null)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await productsAPI.handleDisplayProducts()
            setProducts(data);
          } catch (error) {
            console.error(error);
            // Handle error state
          }
        };
    
        fetchData();
      }, []);

      const handleFilterByCategory = async (category) => {

        const data = await productsAPI.handleDisplayProductsByCategory(category);
        if(data){
          console.log(data)
          setProducts(data)
        }
else{
  console.log("no")

}

      }
      const handleParticulairProducts=(product)=>{
        setParticulairproduct(product)
        console.log(particulairproduct,product)
          }

          const handleClose = () => {
            console.log(particulairproduct)
            setParticulairproduct(null)
          };
    return (
        <div className='page'>
            <nav className="sidebar-nav">
            <ul>
                    <li id='bigli'>List Of Categories
                        <ul className="sub-menu">
                            <li><a href="#" onClick={()=>handleFilterByCategory("Web Dev")}>Web Dev</a></li>
                            <li><a href="#"onClick={()=>handleFilterByCategory("Web Dev")}>Graphic Design</a></li>
                            <li><a href="#"onClick={()=>handleFilterByCategory("Data Science")}>Data Science</a></li>
                            <li><a href="#"onClick={()=>handleFilterByCategory("Web Dev")}>Machine Learning</a></li>
                            <li><a href="#"onClick={()=>handleFilterByCategory("Web Dev")}>Artificial Intelligence</a></li>
                        </ul>
                    </li>
                    <li id='bigli'><ul><li><a href='#'>Questions</a></li></ul></li>
                    <li id='bigli'><ul><li><a href='#'>Events</a></li></ul></li>
                </ul>
            </nav>
            <div className='cards'>
                <div className="grid-container">
                   
                    {products.map((product) => (
                        
                        <Card style={{ width: '18rem' }} className="course-card">
                        <Card.Body>
                            <Card.Title>Title :{product.title}</Card.Title>
                            <Card.Text>Description :{product.description}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Duration :{product.duration}</ListGroup.Item>
                            <ListGroup.Item>Category :{product.category}</ListGroup.Item>
                            <ListGroup.Item>Fees :{product.fees}</ListGroup.Item>
                            <ListGroup.Item>Date Created :{product.dateCreated}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body className="card-btn">
                            <Button>Enlist</Button>
                            <Button onClick={() => handleParticulairProducts(product)}>Details</Button>
                        </Card.Body>
                    </Card>
                   
                    ))}
                     {particulairproduct && (
                        <ExploreDetails particulairproduct={particulairproduct} handleClose={handleClose} />
                      )}
                </div>
            </div>
        </div>
    );
}

export default Explore;
