import React, { useEffect, useState } from "react";
import Style from "./ColumnStyle.module.scss";
import axios from "axios";

import icons from "../Images/More.png";
import tablerusers from "../Images/tabler_users.png";
import tablerfile from "../Images/tabler_file.png";

const ColumnCurrent = () => {
  const [openCurrent, setopenCurrent] = useState(null);

  const handleCurrentToggle = (index) => {
    setopenCurrent(openCurrent === index ? null : index);
  };

  const CurrentData = [
    {
      title: "Текущие 7",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const [cart, setcart] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/cards`)
      .then((res) => setcart(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <div className={Style.Container}>
        {CurrentData.map((item, index) => (
          <div key={index} className={Style.Head_item}>
            <div
              className={Style.Head_header}
              onClick={() => handleCurrentToggle(index)}
            >
              <div className={Style.Head_title}>{item.title}</div>
            </div>
            {openCurrent === index && (
              <div className={Style.accordion_content}>
                {cart.slice(4, 10).map((cart) => {
                  return (
                    <React.Fragment key={cart.id}>
                      <div className={Style.frame_carta}>
                        <div className={Style.cart_title}>
                          <div className={Style.cart_text}>
                            <h3 className={Style.title}> {cart.title} </h3>
                            <p className={Style.text}> {cart.text} </p>
                          </div>
                          <div className={Style.cart_icons}>
                            <img src={icons} alt="" />
                          </div>
                        </div>
                        <div className={Style.cart_buttons}>
                          <button className={Style.cart_task}>
                            {" "}
                            {cart.task}{" "}
                          </button>
                          <div className={Style.user}>
                            <img src={tablerusers} alt="" />
                            <p className={Style.user_but}> {cart.users} </p>
                          </div>
                          <div className={Style.user}>
                            <img src={tablerfile} alt="" />
                            <p className={Style.user_but}> {cart.tabler} </p>
                          </div>
                        </div>

                        <div className={Style.cart_name}>
                          <div className={Style.cart_images}>
                            <img
                              className={Style.cart_img}
                              src={
                                process.env.PUBLIC_URL + "/images/" + cart.imge
                              }
                              alt=""
                            />
                          </div>
                          <div className={Style.name}>
                            <p className={Style.cart_name_text}>Рекруитер</p>
                            <h4 className={Style.recruiter}> {cart.name} </h4>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ColumnCurrent;
