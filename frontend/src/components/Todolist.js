import React, { Fragement } from 'react'

const Todolist = ({ list }) => {
  return (
    <div className="listWrapper">
      <ul>
        {
          list.map((item) => {
            return (
              <div className="list" key={item._id}>
                <div>
                <li >{item.task}</li>
                </div>
                <div>
                <button>Edit</button>
                <button>Delete</button>
                </div>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Todolist
