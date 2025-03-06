### Roster Details<br />
Team Name: The MongolZ<br />
Roster: 910, bLitz, mzinho, Senzu, Techno4K<br />
Global Rank: [7](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_07_07.md)<br />
Regional Rank: [1]( ../../standings_asia_2025_07_07.md)<br />
<br />
Final Rank Value:  1800.4<br />
<br />
Final Rank Value (1800.4) = Starting Rank Value (1805.9) + Head To Head Adjustments (-5.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.881[<sup>1</sup>](#table2)
- Bounty Collected: 0.409[<sup>2</sup>](#table1)
- Opponent Network: 0.041[<sup>2</sup>](#table1)
- LAN Wins: 0.948[<sup>2</sup>](#table1)

The average of these factors is 0.570<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1805.9
- 400 + ( ( 0.570 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 1805.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      148 | 2025-02-21 | Astralis      | L   | 0.290      | -            | -                | -                | -         |    -3.03 | 910, bLitz, mzinho, Senzu, Techno4K |
|            8 |      208 | 2025-02-16 | PaiN Gaming   | W   | 0.258      | 1.000        | 0.443 (0.114)    | 0.428 (0.110)    | 1 (0.258) |     1.91 | 910, bLitz, mzinho, Senzu, Techno4K |
|            7 |      249 | 2025-02-15 | Wildcard      | W   | 0.250      | 1.000        | 0.145 (0.036)    | 0.171 (0.043)    | 1 (0.250) |     0.17 | 910, bLitz, mzinho, Senzu, Techno4K |
|            6 |      275 | 2025-02-14 | Complexity    | W   | 0.243      | 1.000        | 0.127 (0.031)    | 0.101 (0.025)    | 1 (0.243) |     0.09 | 910, bLitz, mzinho, Senzu, Techno4K |
|            5 |      461 | 2025-02-08 | Team Vitality | L   | 0.204      | -            | -                | -                | -         |    -3.75 | 910, bLitz, mzinho, Senzu, Techno4K |
|            4 |      498 | 2025-02-07 | Eternal Fire  | W   | 0.197      | 1.000        | 0.765 (0.151)    | 0.649 (0.128)    | 1 (0.197) |     3.87 | 910, bLitz, mzinho, Senzu, Techno4K |
|            3 |      574 | 2025-02-04 | Natus Vincere | L   | 0.178      | -            | -                | -                | -         |    -5.09 | 910, bLitz, mzinho, Senzu, Techno4K |
|            2 |      592 | 2025-02-03 | GamerLegion   | W   | 0.170      | 1.000        | 0.103 (0.018)    | 0.414 (0.070)    | 1 (0.170) |     0.28 | 910, bLitz, mzinho, Senzu, Techno4K |
|            1 |      603 | 2025-02-02 | Team Liquid   | W   | 0.163      | 1.000        | 0.069 (0.011)    | 0.201 (0.033)    | 1 (0.163) |     0.12 | 910, bLitz, mzinho, Senzu, Techno4K |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($35,948.50)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.73) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.305 | $62,500.00     | $19,059.61      |
| 2025-02-09 |      0.211 | $80,000.00     | $16,888.89      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
