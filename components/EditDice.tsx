import React from 'react';
import { View, Text, Button } from 'react-native';

import ScrollPicker from '../components/ScrollPicker';

type Props = {
  close: (letter: string) => void;
  letter: string;
}

const EditDice: React.FC<Props> = ({ close, letter }) => {
  return (
    <View>
      <View style={{height: 200, width: 200}}>
        <ScrollPicker
          dataSource={['A', 'B', 'C', 'D', 'E', 'F']}
          selectedIndex={0}
          renderItem={(data, index) => {
            return (
              <Text>{data}</Text>
            )
          }}
          // onValueChange={(data, selectedIndex) => {
          //   setMinRank(selectedIndex)
          // }}
          wrapperHeight={200}
          wrapperColor='#fff'
          itemHeight={200 / 3}
          highlightColor='#48CFAD'
        />
      </View>
      <Text>{letter}</Text>
      <Button title='hide' onPress={() => close('a') }/>
    </View>
  );
}

export default EditDice;