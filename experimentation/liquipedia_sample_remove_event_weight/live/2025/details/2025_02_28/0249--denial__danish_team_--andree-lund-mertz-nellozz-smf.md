### Roster Details<br />
Team Name: Denial (Danish team)<br />
Roster: Andree, lund, mertz, nellozz, smF<br />
Global Rank: [249](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [169]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  747.6<br />
<br />
Final Rank Value (747.6) = Starting Rank Value (724.2) + Head To Head Adjustments (23.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.120[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 724.2
- 400 + ( ( 0.162 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 724.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     2696 | 2024-11-23 | Astralis Talent           | L   | 0.552      | -            | -                | -                | -         |    -4.49 | Andree, lund, mertz, nellozz, smF  |
|           16 |     3236 | 2024-11-14 | Sashi Academy             | W   | 0.493      | 1.000        | 0.001 (0.001)    | 0.310 (0.153)    | 0 (0.000) |     8.72 | Andree, lund, mertz, nellozz, smF  |
|           15 |     3255 | 2024-11-14 | WOPA Esport               | L   | 0.492      | -            | -                | -                | -         |    -3.07 | Andree, J3nsyy, lund, nellozz, smF |
|           14 |     3361 | 2024-11-11 | Preasy Esport             | W   | 0.473      | 1.000        | 0.014 (0.007)    | 0.566 (0.268)    | 0 (0.000) |    10.36 | Andree, lund, mertz, nellozz, smF  |
|           13 |     3373 | 2024-11-11 | XI Esport                 | L   | 0.473      | -            | -                | -                | -         |   -11.09 | Andree, lund, mertz, nellozz, smF  |
|           12 |     3379 | 2024-11-11 | Copenhagen Wolves Academy | W   | 0.473      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.78 | Andree, lund, mertz, nellozz, smF  |
|           11 |     3751 | 2024-11-04 | Sashi Academy             | W   | 0.427      | 1.000        | 0.001 (0.001)    | 0.310 (0.132)    | 0 (0.000) |     7.64 | Andree, lund, mertz, nellozz, smF  |
|           10 |     4186 | 2024-10-28 | Astralis Talent           | W   | 0.380      | 1.000        | 0.003 (0.001)    | 0.640 (0.243)    | 0 (0.000) |     8.32 | Andree, lund, mertz, nellozz, smF  |
|            9 |     4205 | 2024-10-28 | MASONIC                   | L   | 0.380      | -            | -                | -                | -         |    -6.84 | Andree, lund, mertz, nellozz, smF  |
|            8 |     4514 | 2024-10-21 | WOPA Esport               | L   | 0.333      | -            | -                | -                | -         |    -1.84 | Andree, lund, mertz, nellozz, smF  |
|            7 |     5252 | 2024-10-07 | MASONIC                   | W   | 0.239      | 1.000        | 0.001 (0.000)    | 0.129 (0.031)    | 0 (0.000) |     3.34 | Andree, lund, mertz, nellozz, smF  |
|            6 |     5259 | 2024-10-07 | Copenhagen Wolves Academy | W   | 0.239      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.99 | Andree, lund, mertz, nellozz, smF  |
|            5 |     5268 | 2024-10-07 | WOPA Esport               | W   | 0.239      | 1.000        | 0.037 (0.009)    | 0.845 (0.202)    | 0 (0.000) |     6.22 | Andree, lund, mertz, nellozz, smF  |
|            4 |     6234 | 2024-09-23 | Preasy Esport             | W   | 0.146      | 1.000        | 0.014 (0.002)    | 0.566 (0.083)    | 0 (0.000) |     3.52 | Andree, lund, mertz, nellozz, smF  |
|            3 |     6247 | 2024-09-23 | Astralis Talent           | W   | 0.146      | 1.000        | 0.003 (0.000)    | 0.640 (0.093)    | 0 (0.000) |     3.41 | Andree, lund, mertz, nellozz, smF  |
|            2 |     6662 | 2024-09-16 | XI Esport                 | L   | 0.100      | -            | -                | -                | -         |    -2.32 | Andree, lund, mertz, nellozz, smF  |
|            1 |     6672 | 2024-09-16 | Sashi Academy             | L   | 0.099      | -            | -                | -                | -         |    -1.29 | Andree, lund, mertz, nellozz, smF  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($386.21)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-23 |      0.553 | $698.53        | $386.21         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
