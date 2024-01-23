import React, { useState } from "react";
import "./body.scss";
import Footer from "../footer/Footer";

const Body = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  // const [submit, setSubmit] = useState(false);
  const [book, setBook] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newBook = {
      title: title,
      author: author,
      year: year,
    };

    setBook([...book, newBook]);

    setTitle("");
    setAuthor("");
    setYear("");
  };

  const setTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const setAuthorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const setYearHandler = (e) => {
    setYear(e.target.value);
  };

  return (
    <>
      <div className="body">
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <div className="row">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={setTitleHandler}
              value={title}
            />
          </div>
          <div className="row">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              id="author"
              onChange={setAuthorHandler}
              value={author}
            />
          </div>
          <div className="row">
            <label htmlFor="year">Year</label>
            <input
              type="text"
              name="year"
              id="year"
              onChange={setYearHandler}
              value={year}
            />
          </div>
          <button>Add a Book</button>
        </form>
      </div>
      <hr />
      <Footer bookList={book} />
    </>
  );
};

export default Body;
