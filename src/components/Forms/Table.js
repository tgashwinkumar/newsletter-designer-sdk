import React, { useContext, useEffect, useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { HiOutlineTrash } from "react-icons/hi";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

import ModalImage from "react-modal-image";
import Button from "./Button";
import Popup from "reactjs-popup";
import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
 0% { opacity: 0; transform: scale(0.25) translateY(75px); }
 100% { opacity: 1; transform: scale(1); }
`;

const StyledPopup = styled(Popup)`
  &-overlay {
    animation-name: ${breatheAnimation};
    animation-duration: 0.5s;
  }
  &-content {
    border-radius: 10px;
    background-color: #e5e5e5;
    animation-name: ${breatheAnimation};
    animation-duration: 0.5s;
  }
  &-arrow {
    color: #e5e5e5;
    animation-name: ${breatheAnimation};
    animation-duration: 0.5s;
  }
`;

const Table = ({
  theads = [],
  tdata = [],
  tkeys = [],
  className = "",
  tratio = "",
  url = "",
  handleDownload = () => {},
  haveID = false,
}) => {

  const nodes = tdata.map((d, di) => {
    console.log(d);
    let j = Object();
    j["ID"] = di + 1;
    j["_id"] = d["_id"];
    tkeys.forEach((k) => {
      j[k] = d[k];
    });
    return j;
  });

  let COLUMNS = theads.map((h, idx) => {
    return {
      label: h,
      renderCell: (item) => {
        console.log("ITEM: ", item);

        if (
          /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/.test(
            item[tkeys[idx]]
          )
        ) {
          return parseInt(item[tkeys[idx]].split("-")[0]) + 1;
        }

        if (
          /^https?:\/\/(?:[a-z0-9-]+\.)+[a-z]{2,6}(?:\/[^/#?]+)+\.(?:jpg|gif|png)$/.test(
            item[tkeys[idx]]
          )
        ) {
          return (
            <div className="flex space-x-2">
              <ModalImage
                className="w-12 h-12 rounded-full"
                small={item[tkeys[idx]]}
                large={item[tkeys[idx]]}
                alt="Image URL"
              />
            </div>
          );
        } else return item[tkeys[idx]];
      },
      // resize: true,
    };
  });
  // console.log("ites"+item[tkeys[idx]])

  COLUMNS = [
    { label: "S.No.", renderCell: (item) => item["ID"] },
    ...COLUMNS,
    {
      label: "Actions",
      renderCell: (item) => {
        console.log(item._id);
        return (
          <div className="flex space-x-4">
            <StyledPopup
              trigger={
                <button className="hover:text-[#ff0000]">
                  <HiOutlineTrash />
                </button>
              }
              position="top center"
              offsetX={-90}
              offsetY={64}
            >
              {(close) => (
                <div className="flex items-center space-x-4 m-4">
                  <Button className="w-3/4" text="Cancel" handleClick={close} />
                  <Button
                    className="w-3/4"
                    text="Confirm"
                    handleClick={(e) => {
                      console.log("Delete");
                      close();
                    }}
                  />
                </div>
              )}
            </StyledPopup>

            <button
              className="hover:text-[#1f1fdf]"
              onClick={(e) => {
                console.log("HEY");
                handleDownload(item.roll);
              }}
            >
              <IoMdDownload />
            </button>
          </div>
        );
      },
    },
  ];

  const getDefaults = () => {
    let defaultRatio = "";
    theads.forEach((h, idx) => {
      defaultRatio += `${100 / (theads.length + 1)}% `;
    });
    return defaultRatio;
  };

  const theme = useTheme([
    getTheme(),
    {
      Table: `
        --data-table-library_grid-template-columns: 75px ${
          tratio.length <= 0 ? getDefaults() : tratio
        } 100px;
      `,
    },
  ]);

  const data = { nodes };

  useEffect(() => {
    console.log("JSON", nodes, COLUMNS, getDefaults(), tratio);
  }, [nodes]);

  return (
    <div className={`${className} font-poppins`}>
      <CompactTable
        columns={COLUMNS}
        data={data}
        theme={theme}
        layout={{
          custom: true,
          isDiv: true,
          fixedHeader: true,
          horizontalScroll: false,
        }}
      />
      <div className="flex justify-end space-x-4 mt-8">
        <p>Total Count : {nodes.length}</p>
      </div>
    </div>
  );
};

export default Table;
