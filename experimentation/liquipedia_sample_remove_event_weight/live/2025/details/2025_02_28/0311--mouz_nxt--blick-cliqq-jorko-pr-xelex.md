### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: blick, Cliqq, Jorko, PR, xelex<br />
Global Rank: [311](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [204]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  688.8<br />
<br />
Final Rank Value (688.8) = Starting Rank Value (624.2) + Head To Head Adjustments (64.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.317[<sup>2</sup>](#table1)
- Opponent Network: 0.133[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 624.2
- 400 + ( ( 0.112 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 624.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     2898 | 2024-11-20 | GODSENT                | W   | 0.533      | 1.000        | 0.001 (0.001)    | 0.298 (0.159)    | 0 (0.000) |    10.42 | blick, Cliqq, Jorko, PR, xelex |
|           19 |     2918 | 2024-11-20 | QUAZAR                 | L   | 0.533      | -            | -                | -                | -         |    -4.63 | blick, Cliqq, Jorko, PR, xelex |
|           18 |     2930 | 2024-11-20 | TEAM NEXT LEVEL        | W   | 0.532      | 1.000        | 0.004 (0.002)    | 0.298 (0.159)    | 0 (0.000) |    11.25 | blick, Cliqq, Jorko, PR, xelex |
|           17 |     2962 | 2024-11-19 | Lausanne-Sport Esports | W   | 0.526      | 1.000        | 0.000 (0.000)    | 0.136 (0.071)    | 0 (0.000) |     7.38 | blick, Cliqq, Jorko, PR, xelex |
|           16 |     2972 | 2024-11-19 | TEAM NEXT LEVEL        | L   | 0.525      | -            | -                | -                | -         |    -2.03 | blick, Cliqq, Jorko, PR, xelex |
|           15 |     3286 | 2024-11-13 | Ex-9INE Academy        | W   | 0.487      | 1.000        | 0.000 (0.000)    | 0.039 (0.019)    | 0 (0.000) |     6.39 | blick, Cliqq, Jorko, PR, xelex |
|           14 |     3375 | 2024-11-11 | Lilmix                 | W   | 0.473      | 1.000        | 0.001 (0.000)    | 0.141 (0.066)    | 0 (0.000) |     8.23 | blick, Cliqq, Jorko, PR, xelex |
|           13 |     3982 | 2024-11-01 | TEAM NEXT LEVEL        | L   | 0.405      | -            | -                | -                | -         |    -1.27 | blick, Cliqq, Jorko, PR, xelex |
|           12 |     4093 | 2024-10-30 | Partizan Esports       | W   | 0.392      | 1.000        | 0.097 (0.038)    | 0.878 (0.345)    | 0 (0.000) |    12.02 | blick, Cliqq, Jorko, PR, xelex |
|           11 |     4112 | 2024-10-30 | Astralis Talent        | L   | 0.390      | -            | -                | -                | -         |    -2.68 | blick, Cliqq, Jorko, PR, xelex |
|           10 |     4151 | 2024-10-29 | FORZE Reload           | L   | 0.386      | -            | -                | -                | -         |    -1.30 | blick, Cliqq, Jorko, PR, xelex |
|            9 |     4159 | 2024-10-29 | GTZ.ESPORTS            | L   | 0.385      | -            | -                | -                | -         |    -0.18 | blick, Cliqq, Jorko, PR, xelex |
|            8 |     4242 | 2024-10-27 | KONO.ECF               | L   | 0.372      | -            | -                | -                | -         |    -0.65 | blick, Cliqq, Jorko, PR, xelex |
|            7 |     4511 | 2024-10-21 | Underrated             | W   | 0.333      | 1.000        | 0.002 (0.001)    | 0.193 (0.064)    | 0 (0.000) |     6.49 | blick, Cliqq, Jorko, PR, xelex |
|            6 |     4762 | 2024-10-16 | ROYALS                 | L   | 0.299      | -            | -                | -                | -         |    -3.17 | blick, Cliqq, Jorko, PR, xelex |
|            5 |     5014 | 2024-10-12 | TEAM NEXT LEVEL        | W   | 0.271      | 1.000        | 0.047 (0.013)    | 0.549 (0.149)    | 0 (0.000) |     7.79 | blick, Cliqq, Jorko, PR, xelex |
|            4 |     5058 | 2024-10-10 | Leo Team               | W   | 0.259      | 1.000        | 0.031 (0.008)    | 0.618 (0.160)    | 0 (0.000) |     7.38 | blick, Cliqq, Jorko, PR, xelex |
|            3 |     5206 | 2024-10-08 | Passion UA             | W   | 0.245      | 1.000        | 0.029 (0.007)    | 0.544 (0.134)    | 0 (0.000) |     7.40 | blick, Cliqq, Jorko, PR, xelex |
|            2 |     5454 | 2024-10-04 | GamerLegion Academy    | L   | 0.218      | -            | -                | -                | -         |    -3.76 | blick, Cliqq, Jorko, PR, xelex |
|            1 |     5699 | 2024-09-30 | Johnny Speeds          | L   | 0.192      | -            | -                | -                | -         |    -0.53 | blick, Cliqq, Jorko, PR, xelex |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
