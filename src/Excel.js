import React,{Component} from 'react'
class Excel extends Component{
    constructor(props){
        super(props)
        this.state = {
            headers : this.props.table.headers,
            data : this.props.table.data
        }
    }



    render(){
        
        return(
        
            <div>
                <table className='wrapper'>
                    <thead >
                        <tr className='excel-header'>
                            {this.state.headers.map((title,i) => <th key={i}>{title}</th>)}
                        </tr>
                    </thead>
                    <tbody className='excel-data'>
                        {this.state.data.map((row,i)=>
                            <tr key={i}>{row.map((cell,idx) => <td key={idx}>{cell}</td>)}</tr>
                        )}
                    </tbody>
                </table>


            </div>
        )
    }
}

export default Excel