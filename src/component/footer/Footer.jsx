import React from "react";
import "./footer.scss";

const Footer = ({ bookList }) => {
  return (
    <div className="footer">
      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
        </tr>
        {bookList.map((book, index) => (
          <>
            <tr>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
};

export default Footer;
