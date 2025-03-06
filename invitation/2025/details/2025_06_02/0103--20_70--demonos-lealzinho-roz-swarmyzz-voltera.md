### Roster Details<br />
Team Name: 20/70<br />
Roster: Demonos, lealziNho, Roz, swarmyzz, voltera<br />
Global Rank: [103](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [25]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  520.4<br />
<br />
Final Rank Value (520.4) = Starting Rank Value (524.6) + Head To Head Adjustments (-4.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.215[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 524.6
- 400 + ( ( 0.054 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 524.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      800 | 2024-12-19 | 9z Academy               | L   | 0.098      | -            | -                | -                | -         |    -1.63 | Demonos, lealziNho, Roz, swarmyzz, voltera |
|            4 |      826 | 2024-12-17 | Game Hunters             | L   | 0.084      | -            | -                | -                | -         |    -1.47 | Demonos, lealziNho, Roz, swarmyzz, voltera |
|            3 |      828 | 2024-12-16 | LaChampionsLiga          | L   | 0.080      | -            | -                | -                | -         |    -1.34 | Demonos, lealziNho, Roz, swarmyzz, voltera |
|            2 |      890 | 2024-12-13 | Players (Brazilian team) | L   | 0.059      | -            | -                | -                | -         |    -0.60 | Demonos, lealziNho, Roz, swarmyzz, voltera |
|            1 |      910 | 2024-12-12 | 9z Academy               | W   | 0.052      | 0.143        | 0.000 (0.000)    | 0.050 (0.000)    | 0 (0.000) |     0.77 | Demonos, lealziNho, Roz, swarmyzz, voltera |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($19.72)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-13 |      0.059 | $333.50        | $19.72          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
