### Roster Details<br />
Team Name: SNOGARD Dragons<br />
Roster: kryptoN, LapeX, mave, ND, Shairoe<br />
Global Rank: [401](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [253]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  586.7<br />
<br />
Final Rank Value (586.7) = Starting Rank Value (597.1) + Head To Head Adjustments (-10.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.223[<sup>1</sup>](#table2)
- Bounty Collected: 0.176[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.100<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 597.1
- 400 + ( ( 0.100 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 597.1


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
|           15 |     3668 | 2024-11-02 | XPERION NXT          | L   | 0.406      | -            | -                | -                | -         |    -5.49 | kryptoN, LapeX, mave, ND, Shairoe |
|           14 |     3874 | 2024-10-29 | Wave Esports         | L   | 0.380      | -            | -                | -                | -         |    -5.28 | kryptoN, LapeX, mave, ND, Shairoe |
|           13 |     3888 | 2024-10-29 | BIG                  | L   | 0.380      | -            | -                | -                | -         |    -0.08 | kryptoN, LapeX, mave, ND, Shairoe |
|           12 |     4307 | 2024-10-20 | Reveal (German team) | L   | 0.319      | -            | -                | -                | -         |    -4.41 | kryptoN, LapeX, mave, ND, Shairoe |
|           11 |     4443 | 2024-10-17 | Playing Ducks        | W   | 0.299      | 0.297        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.28 | kryptoN, LapeX, mave, ND, Shairoe |
|           10 |     4603 | 2024-10-14 | Sissi State Punks    | W   | 0.280      | 0.338        | 0.000 (0.000)    | 0.058 (0.005)    | 0 (0.000) |     4.59 | kryptoN, LapeX, mave, ND, Shairoe |
|            9 |     4827 | 2024-10-09 | Wave Esports         | L   | 0.247      | -            | -                | -                | -         |    -3.50 | kryptoN, LapeX, mave, ND, Shairoe |
|            8 |     4963 | 2024-10-07 | MYinsanity           | W   | 0.233      | 0.338        | 0.002 (0.000)    | 0.094 (0.007)    | 0 (0.000) |     4.30 | kryptoN, LapeX, mave, ND, Shairoe |
|            7 |     5240 | 2024-10-02 | ALTERNATE aTTaX      | L   | 0.199      | -            | -                | -                | -         |    -0.89 | kryptoN, LapeX, mave, ND, Shairoe |
|            6 |     6120 | 2024-09-19 | ALTERNATE aTTaX Evo  | L   | 0.113      | -            | -                | -                | -         |    -1.71 | kryptoN, LapeX, mave, ND, Shairoe |
|            5 |     6183 | 2024-09-18 | XPERION NXT          | L   | 0.107      | -            | -                | -                | -         |    -1.48 | kryptoN, LapeX, mave, ND, Shairoe |
|            4 |     6257 | 2024-09-17 | Sissi State Punks    | W   | 0.100      | 0.297        | 0.000 (0.000)    | 0.058 (0.002)    | 0 (0.000) |     1.59 | kryptoN, LapeX, mave, ND, Shairoe |
|            3 |     6689 | 2024-09-09 | Permitta Esports     | L   | 0.047      | -            | -                | -                | -         |    -0.42 | kryptoN, LapeX, mave, ND, Shairoe |
|            2 |     7073 | 2024-09-04 | Regnum4Games         | W   | 0.013      | 0.338        | 0.002 (0.000)    | 0.126 (0.001)    | 0 (0.000) |     0.22 | kryptoN, LapeX, mave, ND, Shairoe |
|            1 |     7106 | 2024-09-03 | Regnum4Games         | L   | 0.007      | -            | -                | -                | -         |    -0.10 | kryptoN, LapeX, mave, ND, Shairoe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($108.17)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-14 |      0.686 | $157.57        | $108.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
