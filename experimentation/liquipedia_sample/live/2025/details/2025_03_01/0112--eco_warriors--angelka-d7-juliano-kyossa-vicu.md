### Roster Details<br />
Team Name: Eco Warriors<br />
Roster: Angelka, D7, juliano, kyossa, vicu<br />
Global Rank: [112](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [84]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  812.1<br />
<br />
Final Rank Value (812.1) = Starting Rank Value (790.5) + Head To Head Adjustments (21.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.377[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.127[<sup>2</sup>](#table1)

The average of these factors is 0.198<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 790.5
- 400 + ( ( 0.198 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 790.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      606 | 2025-02-05 | SAW                  | L   | 1.000      | -            | -                | -                | -         |    -2.38 | Angelka, D7, juliano, kyossa, vicu |
|           20 |      613 | 2025-02-05 | 500                  | L   | 1.000      | -            | -                | -                | -         |    -8.72 | Angelka, D7, juliano, kyossa, vicu |
|           19 |      658 | 2025-02-01 | Prototype Blaze      | W   | 1.000      | 0.143        | 0.058 (0.008)    | 0.251 (0.036)    | 0 (0.000) |    18.20 | D7, juliano, kyossa, vicu, wieenN  |
|           18 |      661 | 2025-02-01 | Forfunny             | W   | 1.000      | 0.143        | -                | 0.051 (0.007)    | 0 (0.000) |     3.19 | D7, juliano, kyossa, vicu, wieenN  |
|           17 |      677 | 2025-01-31 | 95 Vikings Female    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.00 | D7, juliano, kyossa, vicu, wieenN  |
|           16 |     2375 | 2024-11-24 | FURIA Esports Female | L   | 0.552      | -            | -                | -                | -         |    -5.42 | Angelka, ASTRA, D7, Hanka, vicu    |
|           15 |     2448 | 2024-11-23 | Fluxo Demons         | W   | 0.546      | 0.524        | 0.020 (0.006)    | 0.234 (0.067)    | 1 (0.546) |     8.41 | Angelka, ASTRA, D7, Hanka, vicu    |
|           14 |     2477 | 2024-11-23 | FlyQuest RED         | W   | 0.544      | 0.524        | 0.007 (0.002)    | 0.044 (0.013)    | 1 (0.544) |     5.33 | Angelka, ASTRA, D7, Hanka, vicu    |
|           13 |     2561 | 2024-11-22 | Imperial Female      | L   | 0.537      | -            | -                | -                | -         |    -3.62 | Angelka, ASTRA, D7, Hanka, vicu    |
|           12 |     4285 | 2024-10-20 | Let Her Cook         | W   | 0.320      | 0.328        | 0.002 (0.000)    | 0.035 (0.004)    | 0 (0.000) |     2.99 | Angelka, ASTRA, D7, Hanka, vicu    |
|           11 |     4346 | 2024-10-19 | K27 Female           | L   | 0.313      | -            | -                | -                | -         |    -6.40 | Angelka, ASTRA, D7, Hanka, vicu    |
|           10 |     4393 | 2024-10-18 | Ex-Astralis Women    | W   | 0.307      | 0.328        | 0.010 (0.001)    | 0.094 (0.009)    | 0 (0.000) |     4.29 | Angelka, ASTRA, D7, Hanka, vicu    |
|            9 |     5235 | 2024-10-02 | Take Flyte Female    | W   | 0.200      | 0.328        | 0.006 (0.000)    | 0.299 (0.020)    | 0 (0.000) |     2.08 | Angelka, ASTRA, D7, Hanka, vicu    |
|            8 |     6187 | 2024-09-18 | ENCE Athena          | W   | 0.107      | 0.328        | 0.001 (0.000)    | -                | 0 (0.000) |     0.61 | Angelka, ASTRA, D7, Hanka, vicu    |
|            7 |     6256 | 2024-09-17 | Eternal prem         | L   | 0.100      | -            | -                | -                | -         |    -2.35 | Angelka, ASTRA, D7, Hanka, vicu    |
|            6 |     6368 | 2024-09-15 | Imperial Female      | W   | 0.085      | 0.294        | 0.134 (0.003)    | 0.182 (0.005)    | 0 (0.000) |     2.10 | Angelka, ASTRA, D7, Hanka, vicu    |
|            5 |     6429 | 2024-09-14 | NIP Impact           | W   | 0.079      | 0.294        | 0.011 (0.000)    | -                | -         |     0.97 | Angelka, ASTRA, D7, Hanka, vicu    |
|            4 |     6458 | 2024-09-14 | Take Flyte Female    | W   | 0.078      | 0.294        | 0.006 (0.000)    | 0.299 (0.007)    | -         |     0.82 | Angelka, ASTRA, D7, Hanka, vicu    |
|            3 |     6605 | 2024-09-11 | NoLightGaming        | L   | 0.059      | -            | -                | -                | -         |    -1.39 | Angelka, ASTRA, D7, Hanka, vicu    |
|            2 |     6845 | 2024-09-07 | OneDay               | W   | 0.032      | 0.294        | -                | 0.164 (0.002)    | -         |     0.26 | Angelka, ASTRA, D7, Hanka, vicu    |
|            1 |     6992 | 2024-09-05 | NIP Impact           | L   | 0.020      | -            | -                | -                | -         |    -0.38 | Angelka, ASTRA, D7, Hanka, vicu    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,483.13)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.553 | $13,000.00     | $7,184.31       |
| 2024-09-21 |      0.127 | $350.00        | $44.38          |
| 2024-09-15 |      0.085 | $3,000.00      | $254.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
