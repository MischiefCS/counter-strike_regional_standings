### Roster Details<br />
Team Name: Venom (Swedish team)<br />
Roster: flaw, magi, milky, rafftu, redzy<br />
Global Rank: [531](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [331]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  501.7<br />
<br />
Final Rank Value (501.7) = Starting Rank Value (489.8) + Head To Head Adjustments (11.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.176[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.045<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 489.8
- 400 + ( ( 0.045 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 489.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     4585 | 2024-10-20 | Alliance    | L   | 0.325      | -            | -                | -                | -         |    -0.30 | flaw, magi, milky, rafftu, redzy |
|            5 |     4632 | 2024-10-19 | Pikejagarna | W   | 0.318      | 1.000        | 0.000 (0.000)    | 0.024 (0.008)    | 0 (0.000) |     3.76 | flaw, magi, milky, rafftu, redzy |
|            4 |     4777 | 2024-10-16 | Alliance    | L   | 0.299      | -            | -                | -                | -         |    -0.28 | flaw, magi, milky, rafftu, redzy |
|            3 |     4839 | 2024-10-15 | Lemondogs   | W   | 0.292      | 1.000        | 0.000 (0.000)    | 0.012 (0.003)    | 0 (0.000) |     4.60 | flaw, magi, milky, rafftu, redzy |
|            2 |     6484 | 2024-09-19 | Metizport X | W   | 0.119      | 1.000        | 0.002 (0.000)    | 0.239 (0.028)    | 0 (0.000) |     2.77 | flaw, magi, milky, rafftu, redzy |
|            1 |     6537 | 2024-09-18 | WARCUBE     | W   | 0.113      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.34 | flaw, magi, milky, rafftu, redzy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
