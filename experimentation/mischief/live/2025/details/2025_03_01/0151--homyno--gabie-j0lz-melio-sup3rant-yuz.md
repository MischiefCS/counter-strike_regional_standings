### Roster Details<br />
Team Name: Homyno<br />
Roster: Gabie, J0LZ, Melio, Sup3rant, YuZ<br />
Global Rank: [151](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [32]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  722.4<br />
<br />
Final Rank Value (722.4) = Starting Rank Value (705.1) + Head To Head Adjustments (17.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.056[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 705.1
- 400 + ( ( 0.156 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 705.1


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
|           17 |     1389 | 2024-12-15 | Hite Gaming                 | W   | 0.696      | 0.333        | 0.005 (0.001)    | 0.075 (0.017)    | 0 (0.000) |     8.94 | Gabie, J0LZ, Melio, Sup3rant, YuZ  |
|           16 |     1495 | 2024-12-13 | Masso Chiasson              | W   | 0.682      | 0.333        | 0.003 (0.001)    | 0.037 (0.008)    | 0 (0.000) |     7.88 | Gabie, J0LZ, Melio, Sup3rant, YuZ  |
|           15 |     1561 | 2024-12-12 | Fisher College              | W   | 0.675      | 0.333        | 0.008 (0.002)    | 0.323 (0.073)    | 0 (0.000) |    12.22 | Gabie, J0LZ, Melio, Sup3rant, YuZ  |
|           14 |     1585 | 2024-12-11 | Reunion                     | W   | 0.669      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.77 | Gabie, J0LZ, Melio, Sup3rant, YuZ  |
|           13 |     1622 | 2024-12-10 | Bass Masters                | W   | 0.662      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.82 | Gabie, J0LZ, Melio, Sup3rant, YuZ  |
|           12 |     2694 | 2024-11-15 | Metizport                   | L   | 0.492      | -            | -                | -                | -         |    -1.67 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           11 |     2701 | 2024-11-15 | Mindfreak (Australian team) | L   | 0.491      | -            | -                | -                | -         |    -7.47 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           10 |     2714 | 2024-11-14 | Team Norway                 | L   | 0.487      | -            | -                | -                | -         |    -9.51 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|            9 |     2761 | 2024-11-13 | Los kogutos                 | L   | 0.479      | -            | -                | -                | -         |    -4.13 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|            8 |     2765 | 2024-11-13 | PCIFIC Espor                | W   | 0.479      | 0.617        | 0.004 (0.001)    | 0.132 (0.039)    | 1 (0.479) |     9.20 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|            7 |     4211 | 2024-09-24 | Team Aether                 | L   | 0.147      | -            | -                | -                | -         |    -3.52 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            6 |     4252 | 2024-09-23 | Mythic                      | L   | 0.141      | -            | -                | -                | -         |    -3.37 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            5 |     4355 | 2024-09-19 | Jahsdnmasjdm v2             | W   | 0.115      | 0.371        | 0.000 (0.000)    | 0.011 (0.000)    | 0 (0.000) |     0.83 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            4 |     4435 | 2024-09-17 | Akimbo Esports              | L   | 0.101      | -            | -                | -                | -         |    -1.85 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            3 |     4475 | 2024-09-15 | MIGHT                       | L   | 0.088      | -            | -                | -                | -         |    -1.28 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            2 |     4569 | 2024-09-12 | Lore Gaming                 | W   | 0.068      | 0.371        | 0.000 (0.000)    | 0.022 (0.001)    | 0 (0.000) |     0.33 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            1 |     4662 | 2024-09-09 | Akimbo Esports              | L   | 0.049      | -            | -                | -                | -         |    -0.90 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,595.52)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.696 | $3,500.00      | $2,434.93       |
| 2024-09-21 |      0.128 | $1,250.00      | $160.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
