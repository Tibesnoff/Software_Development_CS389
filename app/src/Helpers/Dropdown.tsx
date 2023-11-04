import React, {useEffect, useState} from 'react';
import {DropdownProps} from '../types/DropdownProps';
import {Dropdown} from './StylizedComponents';
import {View} from 'react-native';

const DropdownComponent = (props: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(props.placeholder);
  const [items, setItems] = useState(
    props.options.map(o => ({
      label: o,
      value: o,
      labelStyle: {color: 'black'},
    })),
  );

  const handleSetValue = (val: string) => {
    setValue(val);
    props.onDropdownChange(val);
  };

  const listMode: any = props.mode ? props.mode : 'FLATLIST';

  useEffect(() => {
    const newItems = props.refresh?.map(o => ({
      label: o,
      value: o,
      labelStyle: {color: 'black'},
    }));
    if (newItems) {
      setItems(newItems);
    }
  }, [props.refresh]);

  return (
    <View className={props.style}>
      <Dropdown
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        listMode={listMode}
        modalProps={{
          animationType: 'slide',
        }}
        modalContentContainerStyle={
          listMode === 'MODAL'
            ? {
                backgroundColor: '#e6ffe3',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }
            : {}
        }
        listItemContainerStyle={
          listMode === 'MODAL'
            ? {
                width: '90%',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderStyle: 'solid',
                borderWidth: 3,
                borderColor: 'black',
                margin: 10,
              }
            : {}
        }
        placeholder={props.placeholder}
        placeholderStyle={{color: 'black', fontWeight: 'bold', fontSize: 20}}
        onChangeValue={event => handleSetValue(event?.toString() as string)}
      />
    </View>
  );
};

export default DropdownComponent;
