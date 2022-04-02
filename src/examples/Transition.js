import React, {useMemo, useState, useTransition} from 'react';
import {defaultItems} from './defaultItems';

const Transition = () => {
  const [value, setValue] = useState('');
  const [filteredValue, setFilteredValue] = useState('');
  const [items, setItems] = useState(defaultItems);
  const [isPending, startTransition] = useTransition();

  const filteredItems = useMemo(() => {
    return items.filter(item => item.title.toLowerCase().includes(filteredValue))
  }, [filteredValue])

  const onChangeValue = (e) => {
    setValue(e.target.value);
    startTransition(() => {
      setFilteredValue((e.target.value))
    })
  }

  return (
    <>
      <input type="text" value={value} onChange={onChangeValue}/>
      {isPending && <h1>Loading...</h1>}
      <div>
        {
          filteredItems.map((item, i) => (
            <div key={i}>
              <div>id = {item.id}</div>
              <div>id = {item.title}</div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Transition;
