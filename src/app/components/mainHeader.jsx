import React from "react";
import { ToastContainer } from "react-toastify";
import { InputGroup, Input, Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createQuery, getBooks } from "../../redux/actions";

const MainHeader = ({}) => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query.query);
  return (
    <div className="main-image d-flex justify-content-center align-items-center flex-column">
      <div className="side-bar"></div>
      <div className="filter"></div>
      <h1
        className="display-2 text-center text-white mb-3"
        style={{ zIndex: 2 }}
      >
        Google Books
      </h1>
      <div style={{ width: "60%", zIndex: 2 }}>
        <InputGroup size="lg" className="mb-3">
          <Input
            placeholder="Book Search"
            value={query}
            onChange={(e) => dispatch(createQuery(e.target.value))}
          />
          <Button
            className="button"
            color="secondary"
            onClick={() => dispatch(getBooks())}
          >
            <i className="fas fa-search"></i>
          </Button>
        </InputGroup>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MainHeader;
