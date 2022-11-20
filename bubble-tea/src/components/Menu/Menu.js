import React from "react";
import "./Menu.css";
import { bubbleTeas } from "./bubbleTeas";
import ResponsiveNavBar from "../CustomOrder/NavBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Menu({shoppingItem}) {
  const [teaGroup, setBubbleTeas] = React.useState(bubbleTeas);
  //the css only affects this page
  useEffect(() => {
    //add class to body element
    document.body.classList.add("menuPage");
    return () => {
      document.body.classList.remove("menuPage");
    };
  }, []);
  return (
    <div>
      <ResponsiveNavBar shoppingItem={shoppingItem}/>
      <TeaTypeButtons setBubbleTeas={setBubbleTeas} />
      <BubbleTeaList teaGroup={teaGroup} />
    </div>
  );
}

function BubbleTeaList({ teaGroup }) {
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

function TeaTypeButtons({ setBubbleTeas }) {
  return (
    <div style={{ marginTop: "px" }}>
      <ul className="menuul">
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
                return newTeaGroup;
              });
            }}>
            Fruit Teas
          </a>
        </li>
      </ul>
    </div>
  );
}
