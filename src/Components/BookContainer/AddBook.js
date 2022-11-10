import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

const AddBook = ({ handleShowModal, show, handleSubmit }) => {
  return (
    <Modal
      size="lg"
      show={true}
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Author</label>
            <input
              type="text"
              className="form-control"
              id="image"
              name="image"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>          
        </form>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={() => handleShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
    </Modal>
  );
};

export default AddBook;
