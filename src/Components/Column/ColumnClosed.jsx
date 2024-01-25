import React, { useState } from "react";
import Style from "./ColumnStyle.module.scss";

const ColumnClosed = () => {
  const [openClosed, setopenClosed] = useState(null);

  const handleColsedToggle = (index) => {
    setopenClosed(openClosed === index ? null : index);
  };

  const HeadData = [
    {
      title: "Закрытые 0",
      content: "Закрытые .",
    },
  ];

  return (
    <React.Fragment>
      <div className={Style.Container}>
        {HeadData.map((item, index) => (
          <div key={index} className={Style.Head_item}>
            <div
              className={Style.Head_header}
              onClick={() => handleColsedToggle(index)}
            >
              <div className={Style.Head_title}>{item.title}</div>
            </div>
            {openClosed === index && (
              <div className={Style.accordion_content}>{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ColumnClosed;
