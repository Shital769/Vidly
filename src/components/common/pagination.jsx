import React from "react";
import _ from "lodash";
const Pagination = (props) => {
  const { itemsCount, pageSize } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  //[1 ...pagesCount].map()
  //to generate an array with these numbers in this mapping we will use lodash javascript library. just type npm i lodash@4.17.10 version and import in the top of page.
  return (
    <nav>
      <ul className="pagination">
        {/* mapping items in this array to list items */}
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
