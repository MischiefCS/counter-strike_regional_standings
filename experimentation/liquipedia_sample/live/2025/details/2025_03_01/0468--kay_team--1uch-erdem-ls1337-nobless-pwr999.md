### Roster Details<br />
Team Name: Kay Team<br />
Roster: 1uch, Erdem, ls1337, NoBless, pwr999<br />
Global Rank: [468](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [293]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  522.9<br />
<br />
Final Rank Value (522.9) = Starting Rank Value (504.9) + Head To Head Adjustments (18.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 504.9
- 400 + ( ( 0.053 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 504.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     4226 | 2024-10-22 | FLuffy Gangsters | L   | 0.332      | -            | -                | -                | -         |    -1.93 | 1uch, Erdem, ls1337, NoBless, pwr999 |
|            7 |     4306 | 2024-10-20 | Nexus Gaming     | L   | 0.319      | -            | -                | -                | -         |    -0.45 | 1uch, Erdem, ls1337, NoBless, pwr999 |
|            6 |     4342 | 2024-10-19 | K27              | W   | 0.313      | 0.333        | 0.008 (0.001)    | 0.646 (0.068)    | 0 (0.000) |     8.88 | 1uch, Erdem, ls1337, NoBless, pwr999 |
|            5 |     4402 | 2024-10-18 | BC.Game Esports  | L   | 0.306      | -            | -                | -                | -         |    -1.43 | 1uch, Erdem, ls1337, NoBless, pwr999 |
|            4 |     4453 | 2024-10-17 | Viperio          | W   | 0.298      | 0.333        | 0.002 (0.000)    | 0.426 (0.042)    | 0 (0.000) |     7.48 | 1uch, Erdem, ls1337, NoBless, pwr999 |
|            3 |     4576 | 2024-10-15 | RUSTEC           | W   | 0.286      | 0.333        | 0.000 (0.000)    | 0.097 (0.009)    | 0 (0.000) |     5.08 | 1uch, Erdem, ls1337, NoBless, pwr999 |
|            2 |     4618 | 2024-10-14 | FLuffy Gangsters | L   | 0.278      | -            | -                | -                | -         |    -1.50 | 1uch, Erdem, ls1337, NoBless, pwr999 |
|            1 |     5505 | 2024-09-28 | Oshikousei       | W   | 0.172      | 0.215        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.94 | 1uch, Erdem, NoBless, pfq, pwr999    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
