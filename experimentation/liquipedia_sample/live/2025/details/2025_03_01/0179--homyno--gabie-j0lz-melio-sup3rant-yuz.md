### Roster Details<br />
Team Name: Homyno<br />
Roster: Gabie, J0LZ, Melio, Sup3rant, YuZ<br />
Global Rank: [179](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [34]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  726.0<br />
<br />
Final Rank Value (726.0) = Starting Rank Value (708.0) + Head To Head Adjustments (17.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.056[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 708.0
- 400 + ( ( 0.156 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 708.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     1217 | 2024-12-15 | Hite Gaming                 | W   | 0.696      | 0.333        | 0.005 (0.001)    | 0.069 (0.016)    | 0 (0.000) |     8.89 | Gabie, J0LZ, Melio, Sup3rant, YuZ  |
|           17 |     1347 | 2024-12-13 | Masso Chiasson              | W   | 0.682      | 0.333        | 0.003 (0.001)    | 0.034 (0.008)    | 0 (0.000) |     7.83 | Gabie, J0LZ, Melio, Sup3rant, YuZ  |
|           16 |     1426 | 2024-12-12 | Fisher College              | W   | 0.675      | 0.333        | 0.008 (0.002)    | 0.171 (0.039)    | 0 (0.000) |    12.38 | Gabie, J0LZ, Melio, Sup3rant, YuZ  |
|           15 |     1462 | 2024-12-11 | Reunion                     | W   | 0.669      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.71 | Gabie, J0LZ, Melio, Sup3rant, YuZ  |
|           14 |     1501 | 2024-12-10 | Bass Masters                | W   | 0.662      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.76 | Gabie, J0LZ, Melio, Sup3rant, YuZ  |
|           13 |     2952 | 2024-11-15 | Metizport                   | L   | 0.492      | -            | -                | -                | -         |    -1.48 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           12 |     2961 | 2024-11-15 | Mindfreak (Australian team) | L   | 0.491      | -            | -                | -                | -         |    -8.27 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           11 |     2977 | 2024-11-14 | Team Norway                 | L   | 0.487      | -            | -                | -                | -         |    -9.54 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           10 |     3052 | 2024-11-13 | Los kogutos                 | L   | 0.479      | -            | -                | -                | -         |    -3.89 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|            9 |     3057 | 2024-11-13 | PCIFIC Espor                | W   | 0.479      | 0.617        | 0.004 (0.001)    | 0.279 (0.083)    | 1 (0.479) |     8.73 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|            8 |     5801 | 2024-09-24 | Team Aether                 | L   | 0.147      | -            | -                | -                | -         |    -3.49 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            7 |     5869 | 2024-09-23 | Mythic                      | L   | 0.141      | -            | -                | -                | -         |    -3.39 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            6 |     6330 | 2024-09-15 | MIGHT                       | L   | 0.089      | -            | -                | -                | -         |    -1.32 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            5 |     6527 | 2024-09-12 | Lore Gaming                 | W   | 0.069      | 0.371        | 0.000 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     0.33 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            4 |     6683 | 2024-09-09 | Akimbo Esports              | L   | 0.049      | -            | -                | -                | -         |    -0.91 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            3 |     6789 | 2024-09-07 | Exceritus                   | W   | 0.035      | 0.372        | 0.000 (0.000)    | 0.159 (0.002)    | 0 (0.000) |     0.42 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            2 |     6954 | 2024-09-05 | Regain                      | W   | 0.022      | 0.372        | 0.000 (0.000)    | 0.070 (0.001)    | 0 (0.000) |     0.16 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            1 |     7098 | 2024-09-03 | After Hours                 | W   | 0.009      | 0.372        | 0.000 (0.000)    | 0.027 (0.000)    | 0 (0.000) |     0.04 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,595.87)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.696 | $3,500.00      | $2,434.93       |
| 2024-09-21 |      0.129 | $1,250.00      | $160.94         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
