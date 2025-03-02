### Roster Details<br />
Team Name: Lausanne-Sport Esports<br />
Roster: AwaykeN, choiv7, dan1, msn2k, xReal<br />
Global Rank: [443](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [277]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  576.9<br />
<br />
Final Rank Value (576.9) = Starting Rank Value (561.1) + Head To Head Adjustments (15.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.278[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.078<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 561.1
- 400 + ( ( 0.078 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 561.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     2246 | 2024-12-01 | Wu-Tang Clan    | L   | 0.606      | -            | -                | -                | -         |    -7.45 | AwaykeN, choiv7, dan1, msn2k, xReal |
|           14 |     2591 | 2024-11-24 | GODSENT         | L   | 0.559      | -            | -                | -                | -         |    -6.08 | AwaykeN, choiv7, dan1, msn2k, xReal |
|           13 |     2658 | 2024-11-23 | GTZ.ESPORTS     | W   | 0.553      | 0.372        | 0.095 (0.020)    | 0.655 (0.135)    | 0 (0.000) |    16.91 | AwaykeN, choiv7, dan1, msn2k, xReal |
|           12 |     2892 | 2024-11-20 | Grindas         | L   | 0.533      | -            | -                | -                | -         |    -8.72 | AwaykeN, choiv7, dan1, msn2k, xReal |
|           11 |     2927 | 2024-11-20 | Infinite Gaming | W   | 0.532      | 0.372        | 0.000 (0.000)    | 0.064 (0.013)    | 0 (0.000) |     6.93 | AwaykeN, choiv7, dan1, msn2k, xReal |
|           10 |     2962 | 2024-11-19 | MOUZ NXT        | L   | 0.526      | -            | -                | -                | -         |    -7.70 | AwaykeN, choiv7, dan1, msn2k, xReal |
|            9 |     3002 | 2024-11-18 | Kay Team        | W   | 0.520      | 0.372        | 0.000 (0.000)    | 0.054 (0.011)    | 0 (0.000) |     6.45 | AwaykeN, choiv7, dan1, msn2k, xReal |
|            8 |     3972 | 2024-11-01 | FORZE Reload    | L   | 0.406      | -            | -                | -                | -         |    -1.99 | AwaykeN, choiv7, dan1, msn2k, xReal |
|            7 |     4026 | 2024-10-31 | HOTU            | W   | 0.399      | 0.372        | 0.004 (0.001)    | 0.637 (0.095)    | 0 (0.000) |     8.92 | AwaykeN, choiv7, dan1, msn2k, xReal |
|            6 |     4146 | 2024-10-29 | RUSTEC          | W   | 0.386      | 0.372        | 0.000 (0.000)    | 0.134 (0.019)    | 0 (0.000) |     6.24 | AwaykeN, choiv7, dan1, msn2k, xReal |
|            5 |     4403 | 2024-10-24 | Heimo Esports   | L   | 0.352      | -            | -                | -                | -         |    -2.56 | AwaykeN, choiv7, dan1, msn2k, xReal |
|            4 |     4432 | 2024-10-23 | Nuclear TigeRES | L   | 0.346      | -            | -                | -                | -         |    -1.71 | AwaykeN, choiv7, dan1, msn2k, xReal |
|            3 |     4489 | 2024-10-22 | Los kogutos     | W   | 0.338      | 0.372        | 0.038 (0.005)    | 0.572 (0.072)    | 0 (0.000) |     9.89 | AwaykeN, choiv7, dan1, msn2k, xReal |
|            2 |     4724 | 2024-10-17 | ALASKA          | L   | 0.305      | -            | -                | -                | -         |    -0.36 | AwaykeN, choiv7, dan1, msn2k, xReal |
|            1 |     4788 | 2024-10-16 | TEAM NEXT LEVEL | L   | 0.298      | -            | -                | -                | -         |    -2.97 | AwaykeN, choiv7, dan1, msn2k, xReal |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
