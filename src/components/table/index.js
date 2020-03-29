import React from "react";
import { TableWrapper } from "./style";
import { Table } from "antd";
import "antd/dist/antd.css";

const index = props => {
  return (
    <TableWrapper>
      <Table {...props} />
    </TableWrapper>
  );
};

export default index;
