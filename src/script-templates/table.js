import { dataTableId } from '../components/common';
import { columnDefs, gridOptions, getComputedProperty } from '../components/@oee/table';

function template(node) {
    const id = node.attr('id') || (node.attr('id', `table${node.attr(dataTableId)}`), node.attr('id'));
    const key = node.attr(dataTableId);
    return `
    var ${columnDefs}${key} = [
        ${document.getElementById('iframeId').contentWindow[getComputedProperty(node)].columnDefs.map(def => {
            return `{headerName: '${def.headerName}', field: '${def.field}', width: ${def.width ? def.width : '\'\''},
                     checkboxSelection: ${def.checkboxSelection}, headerCheckboxSelection: ${def.headerCheckboxSelection}}`;
        }).join(',')}
    ];
    var ${gridOptions}${key} = {
        columnDefs: ${columnDefs}${key},
        enableSorting: true,
        enableFilter: false,
        rowSelection: 'multiple',
      };
    var eGridDiv${key} = document.querySelector('#${id}');
    new agGrid.Grid(eGridDiv${key}, ${gridOptions}${key});
    ${gridOptions}${key}.api.setRowData([]);
    `;
}

export default template;
