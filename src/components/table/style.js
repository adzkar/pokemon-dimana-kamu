import styled from "styled-components";

export const TableWrapper = styled.div`
  .ant-table-pagination {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .ant-pagination a {
    color: #6b6c7e;
    font-size: 14px;
    line-height: 25px;
  }

  .ant-pagination-item-active {
    width: 0;
    height: 0;
    border: none;
    background-color: #f2f2f3;
  }

  .ant-pagination-item-active a {
    color: #272833;
    font-size: 14px;
    line-height: 25px;
  }

  .ant-pagination.mini .ant-pagination-prev {
    margin-right: 30px;
  }

  .ant-pagination.mini .ant-pagination-next {
    margin-left: 30px;
  }

  .ant-table-pagination.ant-pagination {
    margin-left: auto;
  }
  .ant-table-content {
    overflow-x: auto;
  }
`;
