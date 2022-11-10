import React from "react";
import{useNavigate} from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FactoryServerCommunication } from "../Utilities/server";

const EditBook = ({ show, updateModal, book }) => {
  const [availability, setAvailability] = React.useState(true);
  const navigate = useNavigate()

  function handleSubmit(evnt) {   
    updateModal(!show);    
    FactoryServerCommunication(`/books/${book.id}`, "PATCH", {
      available: availability
    })();
    navigate("/books")
  }

  const handleChange = (evnt) => {
    const { target } = evnt;
    setAvailability(!availability);
    console.log(availability);
  };

  return (
    <>
      <Modal show={show} onHide={() => updateModal(!show)}>
        <Modal.Header closeButton>
          <Modal.Title>{book.title}</Modal.Title>
        </Modal.Header>
        <form>
          <Modal.Body>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="email"
                className="form-control"
                id="author"
                value={book.author}
                disabled
              />
            </div>

            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="availability"
                  checked={availability}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="availability">
                  Change Availability
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                value={book.description}
                disabled
              ></textarea>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => updateModal(!show)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default EditBook;
