### Roster Details<br />
Team Name: Elevate<br />
Roster: diozera, fREQ, lash, short, zede<br />
Global Rank: [274](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [68]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  594.4<br />
<br />
Final Rank Value (594.4) = Starting Rank Value (517.6) + Head To Head Adjustments (76.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 517.6
- 400 + ( ( 0.060 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 517.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      644 | 2025-02-07 | RED Canids   | L   | 1.000      | -            | -                | -                | -         |    -5.71 | diozera, fREQ, lash, short, zede    |
|            7 |      671 | 2025-02-06 | 9z Team      | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.126 (0.018)    | 0 (0.000) |    23.14 | diozera, fREQ, lash, short, zede    |
|            6 |      688 | 2025-02-06 | Tropa do VSM | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.167 (0.024)    | 0 (0.000) |    12.10 | diozera, fREQ, lash, short, zede    |
|            5 |      739 | 2025-02-05 | RED Canids   | L   | 1.000      | -            | -                | -                | -         |    -5.42 | diozera, fREQ, lash, short, zede    |
|            4 |      770 | 2025-02-04 | Nitro.GG     | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.414 (0.059)    | 0 (0.000) |    19.71 | diozera, fREQ, lash, short, zede    |
|            3 |      775 | 2025-02-04 | Nova holanda | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.107 (0.015)    | 0 (0.000) |    17.94 | diozera, fREQ, lash, short, zede    |
|            2 |     1026 | 2025-01-10 | BESTIA       | L   | 0.867      | -            | -                | -                | -         |    -3.08 | desh, fREQ, Leomonster, short, zede |
|            1 |     1038 | 2025-01-09 | 9z Academy   | W   | 0.859      | 0.384        | 0.001 (0.000)    | 0.320 (0.106)    | 0 (0.000) |    18.05 | desh, fREQ, Leomonster, short, zede |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
