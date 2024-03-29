import React        from 'react';
import TableEntry   from './TableEntry';

const TableContents = (props) => {

    const entries = props.activeList ? props.activeList.items : null;
    return (
        entries ? <div className=' table-entries container-primary'>
            {
                entries.map((entry, index) => (
                    <TableEntry
                        upDisabled={index === 0}
                        downDisabled={index === props.activeList.items.length - 1}
                        data={entry} key={entry.id}
                        deleteItem={props.deleteItem} reorderItem={props.reorderItem}
                        editItem={props.editItem} index={index}
                    />
                ))
            }

            </div>
            : <div className='container-primary' />
    );
};

export default TableContents;
