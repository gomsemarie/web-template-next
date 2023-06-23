/*------------------------------------------------------------------------------------------------------------------------------------------
 * CoinSample.tsx
 * WRITER : 모시깽이
 * DATE : 20XX-XX-XX
 * DISCRIPTION : 
 * TYPE : Page
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import { React, useState, useEffect } from "react";
import DaisySample from "../DaisySample/DaisySample";

interface CoinSampleProps {}

function CoinSample(props: CoinSampleProps) {
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* Props ――――― */
  const {} = props;

  /* State ――――― */
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myUSD, setMyUSD] = useState(0);

  /* Const ――――― */
  /* API ――――――― */

  /* ―――――――――――――――― Method ―――――――――――――――― */
  const onChange = (event) => setMyUSD(event.target.value);

  /* ―――――――――――――― Use Effect ―――――――――――――― */
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((Response) => Response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(222, { myUSD });
  }, [myUSD]);
  console.log(111, { myUSD });

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return (
    <div data-page="daisySample">
      <DaisySample.goBack></DaisySample.goBack>
      <h1>The Coins! {loading ? "" : `(count : ${coins.length})`}</h1>
      <input
        value={myUSD}
        onChange={onChange}
        type="text"
        placeholder="input USD"
      ></input>
      {loading ? (
        "Loading..."
      ) : (
        <div className="card-body">
          {coins.map((coin) => (
            <div>
              <h2 className="card-title">
                {coin.name} ({coin.symbol})
              </h2>
              <p>
                ${coin.quotes.USD.price} USD // {myUSD / coin.quotes.USD.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

namespace CoinSample {}

export default CoinSample;
