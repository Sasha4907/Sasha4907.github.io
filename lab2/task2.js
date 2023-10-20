function generateTable(rows, cols) {
  const table = document.getElementById('colorTable');
  const colorPicker = document.getElementById('colorPicker');

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < cols; j++) {
      const cell = document.createElement('td');
      cell.textContent = i * cols + j + 1;

      cell.addEventListener('mouseover', function() {
        if (cell.textContent === '6') {
          cell.style.backgroundColor = getRandomColor();
        }
      });

      cell.addEventListener('click', function() {
        if (cell.textContent === '6') {
          colorOfCell6 = cell.style.backgroundColor;
          openColorPicker(cell, colorPicker);
        }
      });

      cell.addEventListener('dblclick', function() {
        if (cell.textContent === '6') {
          changeColumnColor(table, j, colorOfCell6);
        }
      });

      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}

function changeColumnColor(table, columnIndex, colorPicker) {
  const rows = table.querySelectorAll('tr'); 

  function changeColor() {
    if (columnIndex >= 0) {
      for (let i = 0; i < rows.length; i++) {
        const cell = rows[i].getElementsByTagName('td')[columnIndex];
        cell.style.backgroundColor = colorPicker; 
      }
      columnIndex--;
      setTimeout(changeColor, 100);
    }
  }
  changeColor(); 
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function openColorPicker(cell, colorPicker) {
  colorPicker.value = cell.style.backgroundColor || '#ffffff';
  colorPicker.click();

  colorPicker.addEventListener('input', function() {
    cell.style.backgroundColor = colorPicker.value;
  });
}

generateTable(6, 6);