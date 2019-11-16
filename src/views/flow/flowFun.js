/*
 * @description: 头部描述
 * @Author: Coder
 * @Date: 2019-11-14 14:05:31
 * @LastEditors: Coder
 * @LastEditTime: 2019-11-17 02:29:25
 * @FilePath: \myvueadmin\src\views\flow\flowFun.js
 */

/**
 * @description: copy 深拷贝数据
 * @param {type}
 * @return:
 * @author: Coder
 */
function copy(data) {
  return JSON.parse(JSON.stringify(data))
}

/**
 * @description: 封装并导出流程图类
 * @param {type}
 * @return:
 * @author: Coder
 */

class flowFun {
  constructor() {
    this.nowId = 0;
    this.stack = []
  }


  /**
   * @description: 深拷贝数据
   * @param {type}
   * @return:
   * @author: Coder
   */
  deepCopy(data) {
    const deepCopy = JSON.parse(JSON.stringify(data))
    return deepCopy
  }



  /**
   * @description: stack深拷贝并且push
   * @param {type}
   * @return:
   * @author: Coder
   */
  pushStack(tree) {
    const data = JSON.parse(JSON.stringify(tree))
    this.stack.push(data);
    console.log('stack', this.stack)
  }

  /**
   * @description: 删除主节点
   * @param {type}
   * @return:
   * @author: Coder
   */

  delNode(data, obj) {
    // debugger
    console.log('obj', data, obj)
    // debugger
    if (!obj.parentId) {
      if (obj.childNode) {
        data = obj.childNode;
        data.parentId = null;
      } else {
        data = null;
      }
    } else {
      this.myDelChildNode(data, obj, data);
    }
    return data;
  }

  /**
   * @description: 封装删除节点
   * @param {type}
   * @return:
   * @author: Coder
   */
  myDelChildNode(d, obj, tree) {

    const data = d;
    if (data.id === obj.parentId) {
      if (obj.nodeType !== 'condition') {
        if (obj.childNode) {
          data.childNode = copy(obj.childNode);
          data.childNode.parentId = data.id;
        } else {
          data.childNode = null;
          delete data.childNode
        }
      } else {
        data.conditionNodes.forEach((i, k) => {
          if (i.id === obj.id) {
            data.conditionNodes.splice(k, 1);
          }
        });
        if (data.conditionNodes.length === 0) {
          this.delNode(tree, data);
        }
      }
    } else {
      if (data.childNode) {
        this.myDelChildNode(data.childNode, obj, tree);
      }
      if (data.conditionNodes) {
        data.conditionNodes.forEach(i => {
          this.myDelChildNode(i, obj, tree);
        });
      }
    }
  }

  /**
   * @description: 添加兄弟节点
   * @param {type}
   * @return:
   * @author: Coder
   */
  addChildNode(d, obj) {
    // obj.id = this.getId();
    // const data = this.deepCopy(d)
    // this.myAddChildNode(data, obj);
    // return data
    obj.id = this.getId();
    const data = JSON.parse(JSON.stringify(d));
    this.myAddChildNode(data, obj);
    return data;
  }

  /**
   * @description: 封装增加子节点方法
   * @param {type}
   * @return:
   * @author: Coder
   */
  myAddChildNode(d, obj) {
    const data = d;
    if (obj.nodeType === 'conditionEnter') {
      obj.conditionNodes = [];
      let i = 0;
      while (i < 2) {
        obj.conditionNodes.push({
          nodeType: 'condition',
          parentId: obj.id,
          id: this.getId(),
          checkVal: [],
          ruleArr: [],
        })
        i += 1
      }

    }
    if (data.id === obj.parentId) {
      if (obj.nodeType !== 'condition') {
        if (data.childNode) {
          obj.childNode = copy(data.childNode);
          obj.childNode.parentId = obj.id
          data.childNode = obj
        } else {
          data.childNode = obj
        }
      } else {
        obj.checkVal = []
        obj.ruleArr = []
        data.conditionNodes.push(obj)
      }
    } else {
      if (data.childNode) {
        this.myAddChildNode(data.childNode, obj)
      }
      if (data.conditionNodes) {
        data.conditionNodes.forEach(item => {
          this.myAddChildNode(item, obj)
        })
      }
    }
    // ..............
    // const data = d;
    // if (obj.nodeType === 'conditionEnter') {
    //   obj.conditionNodes = [];
    //   let i = 0;
    //   while (i < 2) {
    //     obj.conditionNodes.push({
    //       nodeType: 'condition',
    //       parentId: obj.id,
    //       id: this.getId(),
    //       checkVal: [],
    //       ruleArr: [],
    //     });
    //     i += 1;
    //   }
    // }
    // if (data.id === obj.parentId) {
    //   if (obj.nodeType !== 'condition') {
    //     if (data.childNode) {
    //       obj.childNode = copy(data.childNode);
    //       obj.childNode.parentId = obj.id;
    //       data.childNode = obj;
    //     } else {
    //       data.childNode = obj;
    //     }
    //   } else {
    //     obj.checkVal = [];
    //     obj.ruleArr = [];
    //     data.conditionNodes.push(obj);
    //   }
    // } else {
    //   if (data.childNode) {
    //     this.myAddChildNode(data.childNode, obj);
    //   }
    //   if (data.conditionNodes) {
    //     data.conditionNodes.forEach(i => {
    //       this.myAddChildNode(i, obj);
    //     });
    //   }
    // }
  }
  /**
   * @description:封装插入节点
   * @param {type}
   * @return:
   * @author: Coder
   */
  insertNode(d, item) {
    const data = d;
    if (data.id === item.parentId) {
      if (item.nodeType !== 'condition') {
        data.childNode = item
      } else {
        if (data.conditionNodes) {
          data.conditionNodes.push(item)
        } else {
          data.conditionNodes = [item]
        }
      }
    } else {
      if (data.childNode) {
        this.insertNode(data.childNode, item)
      }
      if (data.conditionNodes) {
        data.conditionNodes.forEach(i => {
          this.insertNode(i, item)
        })
      }
    }
  }

  /**
   * @description: 获取自增ID
   * @param {type}
   * @return:
   * @author: Coder
   */
  getId() {
    return this.nowId += 1;
  }

}

export default flowFun
