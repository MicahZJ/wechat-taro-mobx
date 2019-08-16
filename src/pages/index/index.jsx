import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtCheckbox } from 'taro-ui'

import './index.styl'


@inject('indexStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor (props) {
		super(props)
		this.store = this.props.indexStore
	}

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    this.store.getlist()
    console.log('arr', this.store.checkboxOption)
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {a, b, checkboxOption, checkedList} = this.store
    return (
      <View className='index'>
        <Text>你好{a}{b}</Text>
      </View>
    )
  }
}

export default Index 
