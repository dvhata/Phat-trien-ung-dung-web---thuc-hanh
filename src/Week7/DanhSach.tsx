import "./DanhSach.scss";

import * as React from "react";


const columns = [
  {
    id: 1,
    culumnName: "Name",
  },
  {
    id: 2,
    culumnName: "Date of birth",
  },
  {
    id: 3,
    culumnName: "Sex",
  },
];

const list = [
  {
    id: 1,
    name: "Thao Hanh",
    dateOfBirth: "23/03/2001",
    sex: "male",
  },
  {
    id: 2,
    name: "Thao Hanh",
    dateOfBirth: "23/03/2001",
    sex: "male",
  },
  {
    id: 3,
    name: "Thao Hanh",
    dateOfBirth: "23/03/2001",
    sex: "male",
  },
  {
    id: 4,
    name: "Thao Hanh",
    dateOfBirth: "23/03/2001",
    sex: "male",
  },
];

export default function DanhSach() {
  const [disabled, setDisabled] = React.useState(true);
  const [indexArray] = React.useState([-1]);
  const [checkAll, setCheckAll] = React.useState(false);

  const handleOnClickPerson = React.useCallback((e) => {
    let selected: boolean = e.target.checked;
    let index: number = indexArray.indexOf(e.target.value);
    if (selected === true) {
      setDisabled(false);
      indexArray.push(e.target.value);
      console.log(indexArray);
      handleOnChange(indexArray, index, e);
    } else {
      setDisabled(true);
      indexArray.splice(index, e.target.value);
      console.log(indexArray);
      handleOnChange(indexArray, index, e);
    }
  }, [/* handleOnChange, */ indexArray]);

  // const handleItem = React.useCallback((item) => {
  //     if (item === )
  // },[])

  const handleOnChange = React.useCallback(
    (array: any, index: number, e: any) => {
      // handleDelete(index, e);
      console.log(array.length);
      if (array.length === 1) {
        setDisabled(true);
        setCheckAll(false);
      } else if (array.length === list.length + 1) {
        setDisabled(false);
        setCheckAll(true);
      } else {
        setDisabled(false);
        setCheckAll(false);
      }
    },
    []
  );

  // const handleDelete = React.useCallback((i, e) => {
  //   list.splice(i, e.target.value);
  //   return [...list];
  // }, []);

  return (
    <div>
      <h2>BTTH WEEK 7</h2>
      <button disabled={disabled} /* onClick={handleDelete} */>DELETE</button>
      <table>
        <thead>
          <tr>
            <th className="checkBoxAll">
              <input type="checkbox" checked={checkAll} />
            </th>
            {columns.map((item) => {
              return <th key={item.id}>{item.culumnName}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {list.map((item) => {
              return (
                <div
                  className="div-block"
                  key={item.id}
                  onClick={handleOnClickPerson}
                >
                  <td>
                    <input type="checkbox" value={item.id} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.dateOfBirth}</td>
                  <td>{item.sex}</td>
                </div>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
