import React from "react";
import "./Sort.scss";

enum SortType {
  Increase,
  Decrease,
}
const columns = [
  {
    id: 0,
    name: "id",
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
    id: 6,
    productCode: "SP006",
    productName: "CCCCCCCDDDDDD",
  },
  {
    id: 4,
    productCode: "SP005",
    productName: "CCCCCCC",
  },
];

export default function Sort() {
  const [data, setData] = React.useState(list);

  const handleSort = React.useCallback(
    (type: string, state: SortType) => {
      if (state === SortType.Increase) {
        const compare = (a: any, b: any) =>
          a[type] < b[type] ? -1 : a[type] > b[type] ? 1 : 0;
        setData([...data].sort(compare));
      } else {
        const compare = (a: any, b: any) =>
          a[type] > b[type] ? -1 : a[type] < b[type] ? 1 : 0;
        setData([...data].sort(compare));
      }
    },
    [data]
  );

  return (
    <div>
      <h2>BTTH WEEK 8</h2>
      <table>
        <thead>
          <tr>
            {columns.map((item) => {
              return (
                <th key={item.id}>
                  <div>{item.columnName}</div>
                  <button
                    name={item.name}
                    onClick={() => handleSort(item.name, SortType.Increase)}
                  >
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAAhklEQVQ4je3SsQ3CMBBG4XcOm7ICDRtQhZbOdKwXGCAvjSVQhMBOJESRv7J19ueTfLDl7xLfDqgJOAECx4gYF7+mJvXqMze1W4PlAuXZOq3pLJd9qJfmTt9hL7U29BPWjNZg1WgLVoWq/ZIfnE1CD7ArtQdwBg4tgxsRo7oHBuBee2/LjzMBvr4JLRnS9AMAAAAASUVORK5CYII="
                      alt="error"
                    />
                  </button>
                  <button
                    name={item.name}
                    onClick={() => handleSort(item.name, SortType.Decrease)}
                  >
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAAZElEQVQ4je3SMQrAIBBEUc9hJQpGyP3PkSP9NAZEEuOuIVg45Q7zqjVmZc4AFggD+wDY8uCAA0gKLOWtq4uYi12Abc2NBH3FJGg31oOKsRaqxu7QYaxAr7dQvdUT6gH/Cbbyf07bFK3FULAnLAAAAABJRU5ErkJggg=="
                      alt="error"
                    />
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => {
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
        </tbody>
      </table>
    </div>
  );
}
