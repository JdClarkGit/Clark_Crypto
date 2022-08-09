import React from "react";
import axios from "axios";
import CoinItem from '../CoinItem/CoinItem'
class CoinChart extends React.Component {
    state = {
        isLoading: false,
        coins: null,
        hasError: false
    }

    getData = async () => {
        try{
            this.setState({isLoading: true});
            const { data } = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d')
            this.setState({ coins: data, isLoading: false });
            console.log(data)
        }catch(err){
            this.setState({ hasError: true, isLoading: false });
        }
    }
    componentDidMount(){
        this.getData()
    }

    render(){
        return(
            <div>
                {this.state.coins && (
                    <div>
                        <div>
                            <div className ="heading">
                            <p>#</p>
                                <p>Name</p>
                                <p>Price</p>
                                <p>1h%</p>
                                <p>7d%</p>
                                <p>24h Volume/Market Cap</p>
                                <p>Circulating/Total Supply</p>
                                {this.state.coins.map((coins)=>{
                                    return <CoinItem key = {coins.id} coins = {coins}/>
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default CoinChart;