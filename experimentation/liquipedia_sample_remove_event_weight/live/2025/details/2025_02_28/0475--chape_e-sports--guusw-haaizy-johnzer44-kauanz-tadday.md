### Roster Details<br />
Team Name: Chape E-sports<br />
Roster: GuusW, haaizy, johnzer44, kauanz, tadday<br />
Global Rank: [475](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_28.md)<br />
Regional Rank: [106]( ../../standings_americas_2025_02_28.md)<br />
<br />
Final Rank Value:  562.6<br />
<br />
Final Rank Value (562.6) = Starting Rank Value (556.4) + Head To Head Adjustments (6.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.296[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.078<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 556.4
- 400 + ( ( 0.078 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 556.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2637 | 2024-11-23 | América eSports          | L   | 0.553      | -            | -                | -                | -         |    -6.84 | GuusW, haaizy, johnzer44, kauanz, tadday |
|            4 |     2652 | 2024-11-23 | FURIA Female             | W   | 0.553      | 1.000        | 0.076 (0.042)    | 0.292 (0.161)    | 0 (0.000) |    16.25 | GuusW, haaizy, johnzer44, kauanz, tadday |
|            3 |     3638 | 2024-11-06 | América eSports          | L   | 0.441      | -            | -                | -                | -         |    -5.11 | GuusW, hawk, johnzer44, lkz, tadday      |
|            2 |     3884 | 2024-11-02 | Players (Brazilian team) | L   | 0.414      | -            | -                | -                | -         |    -2.00 | GuusW, hawk, johnzer44, lkz, tadday      |
|            1 |     3900 | 2024-11-02 | Southampton              | W   | 0.413      | 1.000        | 0.000 (0.000)    | 0.032 (0.013)    | 0 (0.000) |     3.83 | GuusW, hawk, johnzer44, lkz, tadday      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
