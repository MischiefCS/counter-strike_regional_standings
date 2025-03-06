### Roster Details<br />
Team Name: SAW<br />
Roster: Ag1l, MUTiRiS, rmn, shr, story<br />
Global Rank: [6](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [5]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  1687.7<br />
<br />
Final Rank Value (1687.7) = Starting Rank Value (1688.6) + Head To Head Adjustments (-1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.892[<sup>1</sup>](#table2)
- Bounty Collected: 0.310[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.762[<sup>2</sup>](#table1)

The average of these factors is 0.492<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1688.6
- 400 + ( ( 0.492 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 1688.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      128 | 2025-02-21 | FaZe Clan  | L   | 0.105      | -            | -                | -                | -         |    -0.61 | Ag1l, MUTiRiS, rmn, shr, story |
|            6 |      175 | 2025-02-18 | 3DMAX      | W   | 0.083      | 1.000        | 0.378 (0.031)    | 0.282 (0.023)    | 1 (0.083) |     0.30 | Ag1l, MUTiRiS, rmn, shr, story |
|            5 |      182 | 2025-02-17 | Complexity | W   | 0.078      | 1.000        | 0.227 (0.018)    | 0.106 (0.008)    | 1 (0.078) |     0.10 | Ag1l, MUTiRiS, rmn, shr, story |
|            4 |      210 | 2025-02-16 | FlyQuest   | W   | 0.071      | 1.000        | 0.151 (0.011)    | 0.000 (0.000)    | 1 (0.071) |     0.01 | Ag1l, MUTiRiS, rmn, shr, story |
|            3 |      235 | 2025-02-15 | Astralis   | L   | 0.064      | -            | -                | -                | -         |    -0.33 | Ag1l, MUTiRiS, rmn, shr, story |
|            2 |      278 | 2025-02-14 | FaZe Clan  | L   | 0.056      | -            | -                | -                | -         |    -0.33 | Ag1l, MUTiRiS, rmn, shr, story |
|            1 |      529 | 2025-02-06 | 500        | L   | 0.003      | -            | -                | -                | -         |    -0.09 | Ag1l, MUTiRiS, rmn, shr, story |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,392.94)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.76) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.118 | $62,500.00     | $7,392.94       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
