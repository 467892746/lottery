import React, {Component} from 'react';
import CardExampleCard from './display/ui';
let web3 = require('./utils/initWeb3');
let lotteryInstance = require('./eth/lotteryInstance');

class App extends Component {
    constructor() {
        super();
        this.state = {
            manager: '',
            round: '',
            winner: '',
          playerCounts: 0,
          balance: 0,
          players: [],
          currentAccount: '',
        }
    }

    // 在页面渲染之后自动调用
    componentDidMount() {
    }
    play = async () => {
        this.setState({
            isClicking: true,
        })
        console.log('play button click!')
        // 处理真正的业务逻辑
        // 1 调用play方法
        // 2 转钱1ether
        try {
            await lotteryInstance.methods.play().send({
                from: this.state.currentAccount,
                value: web3.utils.toWei('1', 'ether'),
                gas: '3000000',
            })
            alert('投注成功!')
            window.location.reload()
        } catch (e) {
            alert('投注失败!')
            console.log(e)
            window.location.reload()

        }
    };
    kaiJiang = async () => {
        this.setState({
            isClicking: true,
        })
        console.log('kaiJiang button click!')
        // 处理真正的业务逻辑
        // 1 调用play方法
        // 2 转钱1ether
        try {
            await lotteryInstance.methods.kaiJian().send({
                from: this.state.currentAccount,
                gas: '3000000',
            })
            // 显示中奖人
            let winner = await lotteryInstance.methods.winner().call()

            alert(`开奖成功!,\n中将人: ${winner}`)
            window.location.reload()
        } catch (e) {
            alert('开奖失败!')
            console.log(e)
            window.location.reload()

        }
    };

    tuiJiang = async () => {
        this.setState({
            isClicking: true,
        })
        console.log('tuiJiang button click!')
        // 处理真正的业务逻辑
        // 1 调用play方法
        // 2 转钱1ether
        try {
            await lotteryInstance.methods.tuiJian().send({
                from: this.state.currentAccount,
                gas: '3000000',
            })
            alert('退奖成功!')
            window.location.reload()
        } catch (e) {
            alert('退奖失败!')
            console.log(e)
            window.location.reload()
        }
    };

    // 在页面渲染之前调用
    async componentWillMount() {
        let accounts = await web3.eth.getAccounts()
        let manager = await lotteryInstance.methods.manager().call()
        let round = await lotteryInstance.methods.round().call()
        let winner = await lotteryInstance.methods.winner().call()
        let playerCounts = await lotteryInstance.methods.getPlayersCount().call()
        let balance = web3.utils.fromWei(await lotteryInstance.methods.getBalance().call(), 'ether')
        // let players = await lotteryInstance.methods.getPlayers().call()
        let isShowButton = accounts[0] === manager ? 'inline' : 'none'

        this.setState({
          manager,
          round,
          winner,
          playerCounts,
          balance,
          currentAccount: accounts[0],
          isClicking: false,
            isShowButton,
        })
    }


    render() {


        return (
            <div>
                <CardExampleCard
                    manager={this.state.manager}
                    winner={this.state.winner}
                    round={this.state.round}
                    balance={this.state.balance}
                    players={this.state.players}
                    playerCounts={this.state.playerCounts}
                    currentAccount={this.state.currentAccount}
                    play={this.play}
                    tuiJiang={this.tuiJiang}
                    kaiJiang={this.kaiJiang}
                    isClicking={this.state.isClicking}
                    isShowButton = {this.state.isShowButton}
                />

            </div>
        );
    }
}


export default App;

