import React, {useEffect, useState} from 'react';
import {Dropdown} from './StylizedComponents';
import {StyleSheet, View} from 'react-native';
import {styled} from 'nativewind';

const StyledView = styled(View);

const DropdownComponent = (props: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(props.placeholder);
  const [items, setItems] = useState<OptionsProps[]>([]);
  const handleSetValue = (val: string) => {
    setValue(val);
    props.onDropdownChange(val);
  };

  const listMode: any = props.mode ? props.mode : 'FLATLIST';

  useEffect(() => {
    if (props.options) {
      setItems(props.options);
    }
  }, [props.refresh]);

  return (
    <StyledView className={props.dropdownStyle}>
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
          transparent: true,
          presentationStyle: 'overFullScreen',
        }}
        modalContentContainerStyle={
          listMode === 'MODAL' ? styleSheet.modalContainer : {}
        }
        listItemContainerStyle={
          listMode === 'MODAL' ? styleSheet.listContainer : {}
        }
        listItemLabelStyle={listMode === 'MODAL' ? styleSheet.modalLabel : {}}
        placeholder={props.placeholder}
        placeholderStyle={styleSheet.placeholderStyle}
        textStyle={styleSheet.textStyle}
        onChangeValue={event => handleSetValue(event?.toString() as string)}
      />
    </StyledView>
  );
};

const styleSheet = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fcfcfa',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '33%',
  },
  listContainer: {
    width: '95%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: 'gray',
    margin: 10,
  },
  modalLabel: {
    fontSize: 20,
    color: 'black',
  },
  placeholderStyle: {color: 'black', fontWeight: 'bold', fontSize: 20},
  textStyle: {color: 'black', fontSize: 20},
});

export default DropdownComponent;

export interface DropdownProps {
  options: OptionsProps[];
  placeholder: string;
  onDropdownChange: (_item: string) => void;
  dropdownStyle?: string;
  mode?: string;
  refresh?: boolean;
}

export interface OptionsPropsType {
  setOption: (_item: string) => void;
  show: boolean;
}

export interface OptionsProps {
  label: string;
  value: string;
  labelStyle?: {};
}
