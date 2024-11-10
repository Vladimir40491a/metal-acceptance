import type { PropsWithChildren } from 'react';
import type { DefaultData, HeaderProps, LastedProps, RowProps, TableProps } from './types';

/** Ячейка заголовка таблицы. */
function HeaderCell({ children, lasted }: PropsWithChildren & LastedProps) {
  return (
    <div className={`px-3 py-2 ${lasted ? '' : 'border-r'}`} data-role="headercell">{children}</div>
  );
}

/** Заголовок таблицы. */
function Header({ columns }: HeaderProps) {
  return (
    <div className={`border-y font-semibold grid`} data-role="header" style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}>
      {columns.map(({ label, name }, index) => <HeaderCell key={name} lasted={index === columns.length - 1}>{label}</HeaderCell>)}
    </div>
  );
}

/** Ячейка таблицы. */
function Cell({ children }: PropsWithChildren) {
  return (
    <div className="px-3 py-2" data-role="cell">{children}</div>
  );
}

/** Строка таблицы. */
function Row<T extends DefaultData>({ columns, data, index }: RowProps<T>) {
  return (
    <div className={`border-b cursor-pointer grid ${index % 2 === 0 ? 'bg-bgTertiary' : ''} hover:bg-bgSecondary25`} data-role="row" style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}>
      {Object.values(columns).map(({ name }) => <Cell key={name}>{data[name]}</Cell>)}
    </div>
  );
}

/** Таблица. */
export function Table<T extends DefaultData>({ columns, data }: TableProps<T>) {
  return (
    <div className="flex flex-col" data-role="table">
      <Header columns={columns} />
      <div className="flex flex-col" data-role="body">
        {data.map((item, index) => <Row<T> key={Object.values(item).join('-')} columns={columns} data={item} index={index} />)}
      </div>
    </div>
  );
}
