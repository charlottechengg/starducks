import React from "react";
import "./Menu.css";
import { bubbleTeas } from "./bubbleTeas";
import ResponsiveNavBar from "../CustomOrder/NavBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Menu({shoppingItem}) {
  const [teaGroup, setBubbleTeas] = React.useState(bubbleTeas);

  const [W, setW] = React.useState(window.innerWidth);
  const [H, setH] = React.useState(window.innerHeight);

  const checkWSize = () => {
    setW(window.innerWidth);
  };
  const checkHSize = () => {
    setH(window.innerHeight);
  };

  //the css only affects this page
  useEffect(() => {
    window.addEventListener("resize", checkWSize);
    window.addEventListener("resize", checkHSize);
    // console.log("width" + W);
    // console.log("height" + H);
    // console.log(document.body.classList);
    //add class to body element
    if (W / H > 1800 / 1000) {
      document.body.classList.remove("menuPage1");
      document.body.classList.add("menuPage");
    } else {
      document.body.classList.remove("menuPage");
      document.body.classList.add("menuPage1");
    }
    return () => {
      document.body.classList.remove("menuPage1");
      document.body.classList.remove("menuPage");
    };
  });
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
  const { id, name, price, image } = info;

  const navigate = useNavigate();

  //function invoked when items are clicked
  const clickItem = (id) => {
    if (id == "1") {
      let path = "../custom-order";
      navigate(path);
    }
  };

  return (
    <article className="bubbleTea" onClick={() => clickItem(id)}>
      <div className="card"></div>
      <img src={image} alt="" width="300"></img>
      <h1>{name}</h1>
      <h4>{price}</h4>
    </article>
  );
};

function TeaTypeButtons({ setBubbleTeas }) {
  const [markAll, setMarkAll] = React.useState(markActive);
  const [markBlack, setMarkBlack] = React.useState({});
  const [markGreen, setMarkGreen] = React.useState({});
  const [markFruit, setMarkFruit] = React.useState({});

  return (
    <div style={{ marginTop: "px" }}>
      <ul className="menuul">
        <li>
          <a
            style={markAll}
            onClick={() => {
              setMarkAll(markActive);
              setMarkBlack({});
              setMarkGreen({});
              setMarkFruit({});
              setBubbleTeas(() => {
                return bubbleTeas;
              });
            }}>
            All
          </a>
        </li>
        <li>
          <a
            style={markBlack}
            onClick={() => {
              setMarkAll({});
              setMarkBlack(markActive);
              setMarkGreen({});
              setMarkFruit({});
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
            style={markGreen}
            onClick={() => {
              setMarkAll({});
              setMarkBlack({});
              setMarkGreen(markActive);
              setMarkFruit({});
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
            style={markFruit}
            onClick={() => {
              setMarkAll({});
              setMarkBlack({});
              setMarkGreen({});
              setMarkFruit(markActive);
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

const markActive = {
  borderBottom: "4px solid black",
  borderColor: "#7F669D",
  marginTop: "0px",
};
