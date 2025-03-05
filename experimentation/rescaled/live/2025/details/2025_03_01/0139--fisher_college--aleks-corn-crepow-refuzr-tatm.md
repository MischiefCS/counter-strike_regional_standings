### Roster Details<br />
Team Name: Fisher College<br />
Roster: AlekS, corn, CrePoW, ReFuZR, tatm<br />
Global Rank: [139](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [95]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  738.7<br />
<br />
Final Rank Value (738.7) = Starting Rank Value (737.0) + Head To Head Adjustments (1.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.309[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.186[<sup>2</sup>](#table1)

The average of these factors is 0.177<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 737.0
- 400 + ( ( 0.177 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 737.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      977 | 2024-12-07 | Undone                  | L   | 0.642      | -            | -                | -                | -         |   -10.18 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            7 |      987 | 2024-12-07 | Take Flyte Kings        | W   | 0.640      | 0.460        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.640) |     2.49 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            6 |     1007 | 2024-12-06 | Nouns Esports           | L   | 0.635      | -            | -                | -                | -         |    -6.12 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            5 |     1840 | 2024-10-20 | Timbermen               | W   | 0.321      | 0.333        | 0.002 (0.000)    | 0.038 (0.004)    | 1 (0.321) |     3.96 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            4 |     1842 | 2024-10-20 | Slugy's Shekel Squad    | W   | 0.320      | 0.333        | 0.001 (0.000)    | 0.019 (0.002)    | 1 (0.320) |     2.40 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            3 |     1855 | 2024-10-19 | Penance (American Team) | W   | 0.315      | 0.333        | 0.000 (0.000)    | 0.004 (0.000)    | 1 (0.315) |     1.24 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            2 |     1968 | 2024-10-13 | FLUFFY AIMERS           | W   | 0.274      | 0.643        | 0.005 (0.001)    | 0.223 (0.039)    | 0 (0.000) |     4.99 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            1 |     1977 | 2024-10-12 | InControl               | W   | 0.268      | 0.645        | 0.001 (0.000)    | 0.075 (0.013)    | 0 (0.000) |     2.93 | AlekS, corn, CrePoW, ReFuZR, tatm |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,972.27)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.321 | $5,500.00      | $1,766.49       |
| 2024-10-13 |      0.274 | $750.00        | $205.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
