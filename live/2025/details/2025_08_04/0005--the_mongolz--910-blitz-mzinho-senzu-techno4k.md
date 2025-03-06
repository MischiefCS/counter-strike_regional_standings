### Roster Details<br />
Team Name: The MongolZ<br />
Roster: 910, bLitz, mzinho, Senzu, Techno4K<br />
Global Rank: [5](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_04.md)<br />
Regional Rank: [1]( ../../standings_asia_2025_08_04.md)<br />
<br />
Final Rank Value:  1693.8<br />
<br />
Final Rank Value (1693.8) = Starting Rank Value (1693.6) + Head To Head Adjustments (0.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.981[<sup>1</sup>](#table2)
- Bounty Collected: 0.328[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.662[<sup>2</sup>](#table1)

The average of these factors is 0.494<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1693.6
- 400 + ( ( 0.494 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 1693.6


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
|            6 |      148 | 2025-02-21 | Astralis      | L   | 0.103      | -            | -                | -                | -         |    -0.56 | 910, bLitz, mzinho, Senzu, Techno4K |
|            5 |      208 | 2025-02-16 | PaiN Gaming   | W   | 0.071      | 1.000        | 0.756 (0.054)    | 0.330 (0.023)    | 1 (0.071) |     1.01 | 910, bLitz, mzinho, Senzu, Techno4K |
|            4 |      249 | 2025-02-15 | Wildcard      | W   | 0.063      | 1.000        | 0.227 (0.014)    | 0.086 (0.005)    | 1 (0.063) |     0.07 | 910, bLitz, mzinho, Senzu, Techno4K |
|            3 |      275 | 2025-02-14 | Complexity    | W   | 0.057      | 1.000        | 0.227 (0.013)    | 0.106 (0.006)    | 1 (0.057) |     0.07 | 910, bLitz, mzinho, Senzu, Techno4K |
|            2 |      461 | 2025-02-08 | Team Vitality | L   | 0.017      | -            | -                | -                | -         |    -0.49 | 910, bLitz, mzinho, Senzu, Techno4K |
|            1 |      498 | 2025-02-07 | Eternal Fire  | W   | 0.011      | 1.000        | 0.856 (0.009)    | 0.308 (0.003)    | 1 (0.011) |     0.15 | 910, bLitz, mzinho, Senzu, Techno4K |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,348.50)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.96) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.118 | $62,500.00     | $7,392.94       |
| 2025-02-09 |      0.024 | $80,000.00     | $1,955.56       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
