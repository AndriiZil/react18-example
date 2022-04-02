import React, {useDeferredValue, useMemo, useState, useTransition} from 'react';
import {defaultItems} from './defaultItems';

const Deffered = () => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState(defaultItems);
  const defferedValue = useDeferredValue(value);

  const filteredItems = useMemo(() => {
    return items.filter(item => item.title.toLowerCase().includes(defferedValue))
  }, [defferedValue])

  const onChangeValue = (e) => {
    setValue(e.target.value);
  }

  return (
    <>
      <input type="text" value={value} onChange={onChangeValue}/>
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

export default Deffered;
