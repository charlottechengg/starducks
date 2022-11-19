import React from "react";
import "./Menu.css";
import { bubbleTeas } from "./bubbleTeas";
import ResponsiveNavBar from "../CustomOrder/NavBar";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <ResponsiveNavBar />
      <BubbleTeaList />
    </div>
  );
}

function BubbleTeaList() {
  const [teaGroup, setBubbleTeas] = React.useState(bubbleTeas);
  console.log(teaGroup);
  return (
    <>
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
        {teaGroup.map((info) => {
          return <BubbleTea key={info.id} info={info} />;
        })}
      </section>
      <div style={{ marginTop: "px" }}>
        <ul>
          <li>
            <a
              onClick={() => {
                setBubbleTeas(() => {
                  return bubbleTeas;
                });
              }}>
              All
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setBubbleTeas(() => {
                  const newTeaGroup = bubbleTeas.filter(
                    (tea) => tea.gradient == "black tea"
                  );
                  console.log(newTeaGroup);
                  return newTeaGroup;
                });
              }}>
              Black Teas
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setBubbleTeas(() => {
                  const newTeaGroup = bubbleTeas.filter(
                    (tea) => tea.gradient == "green tea"
                  );
                  console.log(newTeaGroup);
                  return newTeaGroup;
                });
              }}>
              Green Teas
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setBubbleTeas(() => {
                  const newTeaGroup = bubbleTeas.filter(
                    (tea) => tea.gradient == "fruit tea"
                  );
                  console.log(newTeaGroup);
                  return newTeaGroup;
                });
              }}>
              Fruit Teas
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

const BubbleTea = ({ info }) => {
  const { name, price, image } = info;

  const navigate = useNavigate();

  //function invoked when items are clicked
  const clickItem = (name) => {
    let path = "../custom-order";
    navigate(path);
  };

  return (
    <article className="bubbleTea" onClick={() => clickItem(name)}>
      <div className="card"></div>
      <img src={image} alt="" width="300"></img>
      <h1>{name}</h1>
      <h4>{price}</h4>
    </article>
  );
};
