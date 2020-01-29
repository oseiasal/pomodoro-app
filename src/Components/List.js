import React from 'react';

function List(props) {
  return (
<div>
  <div className="list-container">
<div className="box-container">
<table>
    <thead>
    <tr>
      <td>
        <h2>Tarefas</h2>
      </td>
    </tr>
    </thead>
  <tbody>
{
      props.dados.map(a => a).map((a) =>
        <tr key={a.key}>
          <td>{a.task}</td>
          <td>{a.status}</td>
        </tr>
      )
}

</tbody>
</table>
</div>
  </div>
</div>
  );
}


export default List;
