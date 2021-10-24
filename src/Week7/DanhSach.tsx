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
    id: 0,
    name: "Thao Hanh 1",
    dateOfBirth: "23/03/2001",
    sex: "male",
    isCheck: false,
  },
  {
    id: 1,
    name: "Thao Hanh 2",
    dateOfBirth: "23/03/2001",
    sex: "male",
    isCheck: false,
  },
  {
    id: 2,
    name: "Thao Hanh 3",
    dateOfBirth: "23/03/2001",
    sex: "male",
    isCheck: false,
  },
  {
    id: 3,
    name: "Thao Hanh 4",
    dateOfBirth: "23/03/2001",
    sex: "male",
    isCheck: false,
  },
];

export default function DanhSach() {
  const [state, setState] = React.useState(list);
  const [checkAll, setCheckAll] = React.useState(false);

  const handleOnClickPerson = React.useCallback(
    (e) => {
      const temp = [...state];
      
      // console.log(temp)
      const value = e.target.value
      let i = -1
      temp.forEach((item, index) => {
        if(item.id === +value) {
          i = index    
        } 
      })

      
      temp[i].isCheck = e.target.checked;
      setState(temp);

      const indexCheckAll = state.findIndex((item) => item.isCheck === false);
      if (indexCheckAll === -1) {
        setCheckAll(true);
      } else {
        setCheckAll(false);
      }
    },
    [state]
  );

  const handleOnClickCheckAll = React.useCallback(
    (e) => {
      const temp = state.map((item) => {
        return {
          ...item,
          isCheck: e.target.checked,
        };
      });
      setState(temp);
      setCheckAll(e.target.checked);
    },
    [state]
  );

  const isDisableDelete = React.useMemo(() => {
    // check xem co index hay khong
    const index = state.findIndex((item) => item.isCheck === true);

    return index >= 0;
  }, [state]);

  const handleDelete = React.useCallback(
    (e) => {
      const temp = state.filter((item) => item.isCheck === false);
      setState(temp);
    },
    [state]
  );

  return (
    <div>
      <h2>BTTH WEEK 7</h2>
      <button disabled={!isDisableDelete} onClick={handleDelete}>
        DELETE
      </button>
      <table>
        <thead>
          <tr>
            <th className="checkBoxAll">
              <input
                type="checkbox"
                checked={checkAll}
                onClick={handleOnClickCheckAll}
              />
            </th>
            {columns.map((item) => {
              return <th key={item.id}>{item.culumnName}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {state.map((item) => {
            return (
              <tr className={item.isCheck ? "div-block" : ""} key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={item.isCheck}
                    onClick={handleOnClickPerson}
                    value={item.id}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.dateOfBirth}</td>
                <td>{item.sex}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
