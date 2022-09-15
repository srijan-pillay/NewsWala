import React from "react";
import { useGlobal } from "./Context";

let auth = "unKnown";

const AddToNote = () => {
  const { arr, rmPost } = useGlobal();
  // console.log("arr");
   console.log(arr);

  if (arr.length === 0) {
    return (
      <>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          MY NOTES
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">MY NOTES</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <h1>NO DATA</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        MY NOTES
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">MY NOTES</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
           {arr?.map((curr, i) => {
           
            if (curr[0]?.title != undefined) {
              return (
                <>
                  <div key={i}>
                    <div className="card cardCust  Notes">
                      <div className="card-body">
                        <h6 className="card-text">{curr[0]?.title}</h6>
                        <h6>BY {curr[0]?.source['name']}</h6>
                      </div>
                      <div className="card-body">
                        <a href={curr[0]?.url} className="card-link">
                          Read More
                        </a>
                        <button
                          type="button"
                          className="card-link"
                          onClick={() => rmPost(i)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default AddToNote;
