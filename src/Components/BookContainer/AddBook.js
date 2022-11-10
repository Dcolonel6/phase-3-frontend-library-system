import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

const AddBook = ({ handleShowModal, show, handleSubmit }) => {
    const [formData,setFormData] = React.useState({
      title:"",
      author:"",
      description: "",
      image:""
    })


    const handleChange = (evnt) => {
        const { target } = evnt
        setFormData(currentForm => {
            return {
                ...currentForm,
                [target.name]:target.value
            }
        })

    }
  return (
    <Modal
      size="lg"
      show={show}
      onHide={() => handleShowModal(false)}
      aria-labelledby="addNewBook"
    >
      <Modal.Header closeButton>
        <Modal.Title id="addNewBook">Add New Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="title">Book Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image Url</label>
            <input
              type="text"
              className="form-control"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>          
        </form>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={() => handleShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit(formData)}>
            Save Changes
          </Button>
        </Modal.Footer>
    </Modal>
  );
};

export default AddBook;