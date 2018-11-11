import React, { Component } from 'react'

export default class TableList extends Component{
    constructor(props){
        super(props)
        this.state = {
            isFirstLoading:true
        }
    }
   componentWillReceiveProps(){
       this.setState({
           isFirstLoading:false
       })
   }
   render(){
       let tableHeader = this.props.tableHeaders.map(
         (tableHeader, index) => {
           if (typeof tableHeader === "object") {
             return (
               <th key={index} width={tableHeader.width}>
                 {tableHeader.name}
               </th>
             );
           } else if (typeof tableHeader === "string") {
             return <th key={index}> {tableHead}</th>;
           }
         }
       );
        let listBody = this.props.children
        let listInfo = <tr>
            <td colSpan={this.props.tableHeaders.length} className="text-center">
              {this.state.isFirstLoading} ? '正在加载数据' : '没有找到相应的结果'
            </td>
          </tr>; 
        let tableBody = listBody.length > 0 ? listBody: listInfo
        return (
            <div className="row">
                <div className="col-md-12">
                <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        {tableHeader}
                    </tr>
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
                </table>
                </div>
            </div>
        )
   }
}