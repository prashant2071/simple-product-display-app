import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import CardComponent from "../components/card/CardComponent";
import { getProduct } from "../api/Productapi";
import { toast } from "react-toastify";
import Loader from "../components/loader/Loader";
import "./display.css";
import FormModal from "../components/Modal/FormModal";

const Display = () => {
  const [modalTitle, setmodalTitle] = useState("");
  const [edit, setEdit] = useState(false);

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showModal, setshowModal] = useState(false);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getProduct()
      .then((res) => {
        console.log("the data is", res);
        toast.success("data fetched succssfully");
        setTimeout(() => {
            setProducts(res);
          setLoading(true);
        }, 1000);
      })
      .catch((err) => {
        console.log("error is ", err);
        toast.warn("failed to fetched data");
      });
  }, []);

  const handleDelete = (id) => {
    if (!id) {
      toast.error("error occoured!");
      return;
    }
    setProducts((prev) => prev.filter((item) => item.id != id));
    toast.success("data deleted successfully");
  };
  const addProduct = () => {
    setProduct({});
    setEdit(false);
    setshowModal(true);
    setmodalTitle("Add product");
  };
  const addProductHandler = () => {
    let obj = {
      id: Date.now(),
      title: title,
      thumbnail: image,
      description: description,
    };
    console.log(obj);
    setProducts([obj, ...products]);
    setshowModal(false);
  };
  const editProduct = (prod) => {
    setEdit(true);
    setshowModal(true);
    setmodalTitle("Edit product");
    setProduct(prod);
  };
  const editHandler = () => {
    let updatedProducts = products.map((item) => {
      return item.id == product.id ? product : item;
    });
    setProducts(updatedProducts)
    setshowModal(false);
  };
  const cancelModelHandler = () => {
    setshowModal(false);
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const selectPageHandler = (i) => {
    console.log("hello");
    setPage(i);
  };
  return (
    <>
      {/* <div className="container d-flex justify-content-between flex-wrap">
        {loading ? (
          products.slice((page-1)*10,page*10).map((item) => {
            return <CardComponent key={item.id} item={item} onDelete ={handleDelete}/>;
          })
        ) : (<Loader/>
        )}
      </div>   */}
      <h3 className="text-center">Products</h3>
      <Button variant="outline-primary" onClick={addProduct}>
        Add products
      </Button>
      <div className="container d-flex justify-content-between flex-wrap">
        {loading ? (
          products.map((item) => {
            return (
              <CardComponent
                key={item.id}
                item={item}
                onDelete={handleDelete}
                onEdit={editProduct}
              />
            );
          })
        ) : (
          <Loader />
        )}
      </div>
      {/* {products.length>0 &&(
        <div className="pagination">
          <span>prev</span>
          {[...Array(products.length/10)].map((_,i)=>{
            return <span className={page===i+1?"paginationSelected":""} onClick={(e)=>selectPageHandler(i+1)}>{i+1}</span>
          })}
          <span>next</span>

        </div>
      )}     */}
      <FormModal
        product={product}
        edit={edit}
        onChangeHandler={onChangeHandler}
        editHandler={editHandler}
        modalTitle={modalTitle}
        showModal={showModal}
        cancelHandler={cancelModelHandler}
        addProduct={addProductHandler}
        setTitle={setTitle}
        setImage={setImage}
        setDescription={setDescription}
      />
    </>
  );
};

export default Display;
