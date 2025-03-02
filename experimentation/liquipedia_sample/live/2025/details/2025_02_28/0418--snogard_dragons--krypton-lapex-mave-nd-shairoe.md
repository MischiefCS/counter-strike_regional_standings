### Roster Details<br />
Team Name: SNOGARD Dragons<br />
Roster: kryptoN, LapeX, mave, ND, Shairoe<br />
Global Rank: [418](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [261]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  593.8<br />
<br />
Final Rank Value (593.8) = Starting Rank Value (604.0) + Head To Head Adjustments (-10.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.226[<sup>1</sup>](#table2)
- Bounty Collected: 0.168[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.099<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 604.0
- 400 + ( ( 0.099 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 604.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     3918 | 2024-11-02 | XPERION NXT          | L   | 0.412      | -            | -                | -                | -         |    -5.44 | kryptoN, LapeX, mave, ND, Shairoe |
|           14 |     4135 | 2024-10-29 | Wave Esports         | L   | 0.387      | -            | -                | -                | -         |    -5.42 | kryptoN, LapeX, mave, ND, Shairoe |
|           13 |     4144 | 2024-10-29 | BIG                  | L   | 0.386      | -            | -                | -                | -         |    -0.11 | kryptoN, LapeX, mave, ND, Shairoe |
|           12 |     4578 | 2024-10-20 | Reveal (German team) | L   | 0.325      | -            | -                | -                | -         |    -4.43 | kryptoN, LapeX, mave, ND, Shairoe |
|           11 |     4715 | 2024-10-17 | Playing Ducks        | W   | 0.305      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.25 | kryptoN, LapeX, mave, ND, Shairoe |
|           10 |     4878 | 2024-10-14 | Sissi State Punks    | W   | 0.286      | 0.143        | 0.000 (0.000)    | 0.074 (0.003)    | 0 (0.000) |     4.71 | kryptoN, LapeX, mave, ND, Shairoe |
|            9 |     5116 | 2024-10-09 | Wave Esports         | L   | 0.253      | -            | -                | -                | -         |    -3.59 | kryptoN, LapeX, mave, ND, Shairoe |
|            8 |     5265 | 2024-10-07 | MYinsanity           | W   | 0.239      | 0.143        | 0.003 (0.000)    | 0.094 (0.003)    | 0 (0.000) |     4.47 | kryptoN, LapeX, mave, ND, Shairoe |
|            7 |     5559 | 2024-10-02 | ALTERNATE aTTaX      | L   | 0.205      | -            | -                | -                | -         |    -0.74 | kryptoN, LapeX, mave, ND, Shairoe |
|            6 |     6476 | 2024-09-19 | ALTERNATE aTTaX Evo  | L   | 0.119      | -            | -                | -                | -         |    -1.78 | kryptoN, LapeX, mave, ND, Shairoe |
|            5 |     6541 | 2024-09-18 | XPERION NXT          | L   | 0.113      | -            | -                | -                | -         |    -1.52 | kryptoN, LapeX, mave, ND, Shairoe |
|            4 |     6625 | 2024-09-17 | Sissi State Punks    | W   | 0.106      | 0.143        | 0.000 (0.000)    | 0.074 (0.001)    | 0 (0.000) |     1.69 | kryptoN, LapeX, mave, ND, Shairoe |
|            3 |     7064 | 2024-09-09 | Permitta Esports     | L   | 0.053      | -            | -                | -                | -         |    -0.45 | kryptoN, LapeX, mave, ND, Shairoe |
|            2 |     7464 | 2024-09-04 | Regnum4Games         | W   | 0.019      | 0.143        | 0.003 (0.000)    | 0.125 (0.000)    | 0 (0.000) |     0.33 | kryptoN, LapeX, mave, ND, Shairoe |
|            1 |     7501 | 2024-09-03 | Regnum4Games         | L   | 0.013      | -            | -                | -                | -         |    -0.18 | kryptoN, LapeX, mave, ND, Shairoe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($109.15)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-14 |      0.693 | $157.57        | $109.15         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
