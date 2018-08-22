import React, { Component } from 'react'
import { ListView,Flex} from 'antd-mobile';
import '../../assets/styles/guessyoulike.less'
import img from '../../assets/images/listimg1.jpg'
const data = [
    {
        img,
        title: '融创天府逸家商铺1',
        address: '龙泉驿-龙泉驿',
        areasize: '1室2厅 110平米',
        tags: ['商场']
    },
    {
        img,
        title: '融创天府逸家商铺2',
        address: '龙泉驿-龙泉驿',
        areasize: '1室2厅 98平米',
        tags: ['商场','绕城外','公园']
    },
    {
        img,
        title: '融创天府逸家商铺3',
        address: '龙泉驿-龙泉驿',
        areasize: '1室2厅 98平米',
        tags: ['商场','单价低']
    },
];
// let getUrl = "http://www.its.com";
// let data = mock(getUrl,{
//     'likes|5':[{
//         'id|+1':1,
//         'username':'@cname',
//         'age|20-40':1,
//         'sex':/[男女]/,
//         'mobile':/^((13)|(14)|(15)|(17)|(18)|16|19|19|(14))\d{9}$/,
//         'email':/^[a-zA-Z0-9]{6,12}@(qq\.com|163\.com|sina\.com\.cn|itsource\.cn)$/,
//         'address':'@county(true)'
//     }]
// });
// console.log(data);
export default class GuessYouLike extends Component{
    constructor(){
        super();
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        // 绑定事件函数this指向
        this.renderRow=this.renderRow.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.state = {
            dataSource,
            isLoading: true,
        };
    }
    //头部渲染
    renderHeader(){
        return(
            <div className="guisheader">猜你喜欢</div>
        )
    }
    //内容
    // 行渲染函数
    renderRow(rowData, sectionID, rowID){
        // 准备楼盘标签的渲染色
        let colorArr  = rowData.tags.map((tag,index)=>{
            switch (tag) {
                case '商场':
                    return <span key={index} className="green">{tag}</span>

                case '绕城外':
                    return <span key={index} className="orange">{tag}</span>

                case '公园':
                    return <span key={index} className="skyblue">{tag}</span>

                default:
                    return <span key={index} className="gray">{tag}</span>
            }
        })
        return(
            <Flex>
                <Flex.Item className='left-img'>
                    <img src={rowData.img} alt=""/>
                </Flex.Item>
                <Flex.Item className='right-content'>
                    {/* 标题 */}
                    <p className="title">{rowData.title}</p>
                    <p className="address">{rowData.address}</p>
                    <p className="areasize">{rowData.areasize}</p>
                    <p>{colorArr}</p>
                    <div className="price">售价待定</div>
                </Flex.Item>
            </Flex>
        )
    }

    //分割线
    renderSeparator(sectionID, rowID){
        return (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#ccc',
                    height: 1,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        )
    }
    //尾部渲染
    renderFooter(){
        return (
            <div style={{ padding: 5, textAlign: 'center' }}>
                {this.state.isLoading ? '加载中...' : '加载完成'}
            </div>
        )
    }
    componentDidMount() {
        //使用模拟数据模拟ajax
        // $.ajax({
        //     type: "get",
        //     url: getUrl,
        //     dataType: "json",
        //     success:function(userArray){
        //         console.log(userArray);
        //
        //     }
        // })
        //模拟ajax
        setTimeout(() => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(data),
                isLoading: false,
            });
        }, 1000);
    }
    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}//数据
                renderHeader={this.renderHeader}//头部
                renderFooter={this.renderFooter}//尾部
                renderSeparator={this.renderSeparator}//分割线
                renderRow={this.renderRow}//内容
                className="am-list list-box"
                // pageSize={4}
                useBodyScroll
                // onScroll={() => { console.log('scroll'); }}
                // scrollRenderAheadDistance={500}
                // onEndReached={this.onEndReached}
                // onEndReachedThreshold={10}
            />
        )
    }
}