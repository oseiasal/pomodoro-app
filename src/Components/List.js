import React from 'react';

function List() {
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
    <tr>
      <td>Aprendendo React</td>
      <td>concluido</td>
  </tr>
    <tr>
      <td>Aprendendo Inglês</td>
      <td>concluido</td>
  </tr>
</tbody>
</table>
</div>
  </div>
</div>
  );
}


export default List;
