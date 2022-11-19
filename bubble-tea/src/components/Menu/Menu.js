import React from "react";
import "./Menu.css";
import { bubbleTeas } from "./bubbleTeas";
import ResponsiveNavBar from "../CustomOrder/NavBar";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <ResponsiveNavBar />
      <Buttons />
      <BubbleTeaList />
    </div>
  );
}
function BubbleTeaList() {
  return (
    <section
      /*setting the bubble tea list
with->90% of the viewpoint
margin ->5 unit relating the size of the root text
display ->shows the items in a grid
gap -> gap between each grip
*/
      className="bubbleTeaList"
      style={{
        width: "90vw",
        maxWidth: "1280px",
        margin: "5rem auto",
        marginTop: "200px",
        display: "grid",
        gap: "5vw",
      }}>
      {bubbleTeas.map((info) => {
        return <BubbleTea key={info.id} info={info} />;
      })}
    </section>
  );
}

const BubbleTea = ({ info }) => {
  const { name, price, image } = info;

  const navigate = useNavigate();

  //function invoked when items are clicked
  const clickHandler = (name) => {
    let path = "../custom-order";
    navigate(path);
  };

  return (
    <article className="bubbleTea" onClick={() => clickHandler(name)}>
      <div className="card"></div>
      <img src={image} alt="" width="300"></img>
      <h1>{name}</h1>
      <h4>{price}</h4>
    </article>
  );
};

function Buttons() {
  return (
    <div style={{ marginTop: "px" }}>
      <ul>
        <li>
          <a href="#">All</a>
        </li>
        <li>
          <a href="#">Black Teas</a>
        </li>
        <li>
          <a href="#">Green Teas</a>
        </li>
        <li>
          <a href="#">Fruit Teas</a>
        </li>
      </ul>
    </div>
  );
}
