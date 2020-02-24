import React from 'react'
import { Card, Icon, Image, Segment, Statistic, Button } from 'semantic-ui-react'

const CardExampleCard = (props) => (
    <Card>
        <Image src='/images/logo.png' />
        <Card.Content>
            <Card.Header>向彩霞福利彩票</Card.Header>
            <Card.Meta>
                <p>管理员地址：{props.manager}</p>
                <p>当前地址：{props.currentAccount}</p>
                <p>上期中将地址：{props.winner}</p>
            </Card.Meta>
            <Card.Description>每晚八点准时开奖，不见不散</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
                {props.playerCounts} 人参与
            </a>
        </Card.Content>

        <Card.Content extra>
            <Statistic color='red'>
                <Statistic.Value>{props.balance} ETH</Statistic.Value>
                <Statistic.Label>奖金池</Statistic.Label>
            </Statistic>
        </Card.Content>

        <Card.Content extra>
            <Statistic color='blue'>
                <Statistic.Value>第{props.round}期</Statistic.Value>
                <a href='#'>点击我查看交易历史</a>
            </Statistic>
        </Card.Content>
        <Button animated='fade' color='orange' onClick={props.play} loading={props.isClicking} disabled={props.isClicking}>
            <Button.Content visible>投注产生希望</Button.Content>
            <Button.Content hidden>购买放飞梦想</Button.Content>
        </Button>
        <Button inverted color='red' onClick={props.kaiJiang} style={{display : props.isShowButton}} loading={props.isClicking} disabled={props.isClicking}>
            开奖
        </Button>
        <Button inverted color='green' onClick={props.tuiJiang} style={{display : props.isShowButton}} loading={props.isClicking} disabled={props.isClicking}>
            退奖
        </Button>
    </Card>
);

export default CardExampleCard
// import es6