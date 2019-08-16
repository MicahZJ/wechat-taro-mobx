    
import { observable, action } from 'mobx'

export default class Store {
  constructor() {
  }

  @observable a = 1
  @observable b = 2
  @observable checkedList = ['list1']

  @observable checkboxOption =[]

  @action
  handleChange (value) {
    console.log('23', value)
      this.checkedList = value
  }

  @action
  getlist() {
   
    this.checkboxOption = [{
      value: 'list1',
      label: 'iPhone X',
      desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
    },{
      value: 'list2',
      label: 'HUAWEI P20'
    },{
      value: 'list3',
      label: 'OPPO Find X',
      desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
      disabled: true
    },{
      value: 'list4',
      label: 'vivo NEX',
      desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
      disabled: true
  }]
  }
}