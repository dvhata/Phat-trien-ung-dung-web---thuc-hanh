import React from "react";
import "./Sort.scss";

const columns = [
  {
    id: 0,
    name: "index",
    columnName: "STT",
  },
  {
    id: 1,
    name: "productCode",
    columnName: "Ma san pham",
  },
  {
    id: 2,
    name: "productName",
    columnName: "Ten san pham",
  },
];

interface Data {
  id: number;
  productCode: string;
  productName: string;
}

const list: Data[] = [
  {
    id: 0,
    productCode: "SP001",
    productName: "DDDDDDD",
  },
  {
    id: 1,
    productCode: "SP002",
    productName: "AAAAAAAAA",
  },
  {
    id: 2,
    productCode: "SP003",
    productName: "BBBBBB",
  },
  {
    id: 3,
    productCode: "SP004",
    productName: "EEEEEEE",
  },
  {
    id: 4,
    productCode: "SP005",
    productName: "CCCCCCC",
  },
];

export default function Sort() {
  const [data, setData] = React.useState(list);
  const [currentSort, setCurrentSort] = React.useState("default");

  const sortTypes: any = {
    up: {
      class: "sort-up",
      function: (a: any, b: any) => (a.productName < b.productName ? -1 : 1),
    },
    down: {
      class: "sort-down",
      function: (a: any, b: any) => (a.productName > b.productName ? -1 : 1),
    },
    default: {
      class: "sort",
      function: (a: any, b: any) => 0,
    },
  };

  // const handleSort = React.useCallback((type:string, state:boolean) => {
  //   // true: tang
  //   const compare = (a: any, b: any) => (a[type] < b[type]) ? -1 : (a[type] > b[type]) ? 1 : 0;
  //   setData(data.sort(compare));
  // },[])

  const handleSortTable = React.useCallback(
    (e) => {
      console.log(e.target.name);
      if (currentSort === "down") setCurrentSort("up");
      else if (currentSort === "up") setCurrentSort("default");
      else if (currentSort === "default") setCurrentSort("down");
    },
    [currentSort]
  );

  return (
    <div>
      <h2>BTTH WEEK 8</h2>
      <table>
        <thead>
          <tr>
            {columns.map((item) => {
              return (
                <th onClick={handleSortTable} key={item.id}>
                  {item.columnName}
                  <button name={item.name}>
                    <img
                      src="https://img.icons8.com/dusk/64/000000/sort.png"
                      alt="error"
                    />
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {[...data].sort(sortTypes[currentSort].function).map((item: any) => {
            return (
              <>
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.productCode}</td>
                  <td>{item.productName}</td>
                </tr>
              </>
            );
          })}
          ;
        </tbody>
      </table>
    </div>
  );
}
