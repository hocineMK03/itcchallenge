import React, { useState } from 'react';
import '../../styles/admin/createproduct.css';
import { Link,useNavigate } from 'react-router-dom';

const productsapi=require('../../services/productsAPI')

const CreateProduct = () => {
  const navigate = useNavigate();

const [dataProducts, setDataProducts] = useState({
    title: "",
    description: "",
    instructors: "",
    duration: "",
    schedule: "",
    prerequisite: "",
    fees: "",
    format: "",
    category: "",
  });

  const handleChange = (e) => {
    const {name,value} = e.target
    setDataProducts((prevdata)=>({
        ...prevdata,
        [name]:value,
    }))
    console.log(name,value)
  };

  const handleSubmit =async () => {
    try {
      const response = await productsapi.handleCreateProduct(dataProducts);
      if(response){
        console.log('registration success')
                navigate('/home');
                console.log("navigating")
      }
      else{
        console.log('registration failed')
      }

    } catch (error) {
      console.log(error);
    }

}
  

    
  return (
    <div className="create-product-container">
      <h2>Create Product</h2>
      <form>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" name="title" value={dataProducts.title} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={dataProducts.description} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label>Instructors:</label>
          <input type="text" name="instructors" value={dataProducts.instructors} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Duration:</label>
          <input type="text" name="duration" value={dataProducts.duration} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Schedule:</label>
          <input type="text" name="schedule"value={dataProducts.schedule} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Prerequisite:</label>
          <input type="text" name="prerequisite" value={dataProducts.prerequisite} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Fees:</label>
          <input type="text" name="fees" value={dataProducts.fees} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Format:</label>
          <input type="text" name="format" value={dataProducts.format} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input type="text" name="category" value={dataProducts.category} onChange={handleChange}/>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default CreateProduct;
