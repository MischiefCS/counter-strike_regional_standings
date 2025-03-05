### Roster Details<br />
Team Name: Team Canada<br />
Roster: Gabie, J0LZ, Melio, Pluto, YuZ<br />
Global Rank: [258](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [79]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  528.3<br />
<br />
Final Rank Value (528.3) = Starting Rank Value (537.7) + Head To Head Adjustments (-9.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.231[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.056[<sup>2</sup>](#table1)

The average of these factors is 0.072<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 537.7
- 400 + ( ( 0.072 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 537.7


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
|           12 |     1455 | 2024-11-15 | Metizport                   | L   | 0.492      | -            | -                | -                | -         |    -0.45 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           11 |     1462 | 2024-11-15 | Mindfreak (Australian team) | L   | 0.491      | -            | -                | -                | -         |    -4.21 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|           10 |     1475 | 2024-11-14 | Team Norway                 | L   | 0.487      | -            | -                | -                | -         |    -6.60 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|            9 |     1515 | 2024-11-13 | Los kogutos                 | L   | 0.479      | -            | -                | -                | -         |    -1.57 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|            8 |     1518 | 2024-11-13 | Team Turkey                 | W   | 0.479      | 0.736        | 0.000 (0.000)    | 0.058 (0.020)    | 1 (0.479) |     8.86 | Gabie, J0LZ, Melio, Pluto, YuZ     |
|            7 |     2596 | 2024-09-24 | Team Aether                 | L   | 0.147      | -            | -                | -                | -         |    -2.68 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            6 |     2637 | 2024-09-23 | Mythic                      | L   | 0.141      | -            | -                | -                | -         |    -2.52 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            5 |     2729 | 2024-09-19 | Jahsdnmasjdm v2             | W   | 0.115      | 0.371        | 0.000 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     1.53 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            4 |     2801 | 2024-09-17 | Akimbo Esports              | L   | 0.101      | -            | -                | -                | -         |    -1.21 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            3 |     2837 | 2024-09-15 | MIGHT                       | L   | 0.088      | -            | -                | -                | -         |    -0.65 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            2 |     2931 | 2024-09-12 | Lore Gaming                 | W   | 0.068      | 0.371        | 0.000 (0.000)    | 0.023 (0.001)    | 0 (0.000) |     0.68 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |
|            1 |     3024 | 2024-09-09 | Akimbo Esports              | L   | 0.049      | -            | -                | -                | -         |    -0.59 | BiNoX, Gabie, J0LZ, Melio, TENSKEE |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($160.59)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.128 | $1,250.00      | $160.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
