// 

import React, { useEffect, useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Foodmenu.css";
import { MdDeleteForever } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const url = "http://localhost:5000/api/v1/food/getFood";

const FoodMenu = () => {
  const [getApi, setGetApi] = useState([]);
  const [editApi, setEditApi] = useState({ id: "", name: "", price: "", image: "" });
  const [showModal, setShowModal] = useState(false);

  const getData = async () => {
    try {
      const res = await Axios.get(url);
      setGetApi(res.data);
    } catch (error) {
      console.error(error.message);
      toast.error("Error fetching data.");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteBtn = async (id) => {
    const dltUrl = `http://localhost:5000/api/v1/food/deleteFood/${id}`;
    try {
      await Axios.delete(dltUrl);
      setGetApi((prev) => prev.filter((food) => food._id !== id));
      toast.success("Product deleted successfully");
    } catch (error) {
      console.error("Error: ", error.message);
      toast.error("Could not delete the product.");
    }
  };

  const editItem = (food) => {
    setEditApi({ id: food._id, name: food.name, price: food.price, image: food.image });
    setShowModal(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditApi((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveEditItem = async () => {
    const editUrl = `http://localhost:5000/api/v1/food/putFood/${editApi.id}`;
    try {
      const { name, price, image } = editApi;
      await Axios.put(editUrl, { name, price, image });
      setGetApi((prev) =>
        prev.map((food) =>
          food._id === editApi.id ? { ...food, name, price, image } : food
        )
      );
      setShowModal(false);
      toast.success("Item edited successfully!");
    } catch (error) {
      console.error("Error: ", error.message);
      toast.error("Could not edit the item.");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="heading">Food</h1>
      <div className="main-div">
        {getApi.map((food) => (
          <div className="food text-center border align-center" key={food._id}>
            <h2 className="name">{food.name}</h2>
            <img className="card-img" src={food.image} alt="" />
            <p className="card-price">Rs.{food.price}</p>
            <button className="addFood-btn" onClick={() => deleteBtn(food._id)}>
              <MdDeleteForever />
            </button>
            <button className="addFood-btn" onClick={() => editItem(food)}>
              <TiEdit />
            </button>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Item</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="data-entry">
                  <input
                    type="text"
                    name="name"
                    placeholder="Food's Name"
                    onChange={handleChange}
                    value={editApi.name}
                    className="form-control mb-3"
                  />
                  <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    onChange={handleChange}
                    value={editApi.image}
                    className="form-control mb-3"
                  />
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                    value={editApi.price}
                    className="form-control mb-3"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={saveEditItem}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodMenu;
