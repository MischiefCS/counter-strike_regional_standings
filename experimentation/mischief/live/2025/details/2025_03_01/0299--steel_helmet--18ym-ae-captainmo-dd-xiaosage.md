### Roster Details<br />
Team Name: Steel Helmet<br />
Roster: 18yM, AE, captainMo, DD, XiaosaGe<br />
Global Rank: [299](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [52]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  552.3<br />
<br />
Final Rank Value (552.3) = Starting Rank Value (526.7) + Head To Head Adjustments (25.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 526.7
- 400 + ( ( 0.065 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 526.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      119 | 2025-02-22 | Shika           | L   | 1.000      | -            | -                | -                | -         |   -14.38 | 18yM, AE, captainMo, DD, XiaosaGe |
|            6 |      263 | 2025-02-16 | DogEvil         | L   | 1.000      | -            | -                | -                | -         |    -5.45 | 18yM, AE, captainMo, DD, XiaosaGe |
|            5 |      275 | 2025-02-16 | DK ESPORT       | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.69 | 18yM, AE, captainMo, DD, XiaosaGe |
|            4 |      368 | 2025-02-14 | Change The Game | W   | 1.000      | 0.143        | 0.061 (0.009)    | 0.263 (0.038)    | 0 (0.000) |    23.01 | 18yM, AE, CaptainMo, DD, XiaosaGe |
|            3 |     1094 | 2024-12-29 | Rare Atom       | L   | 0.785      | -            | -                | -                | -         |    -2.12 | 18yM, AE, captainMo, DD, xiaosaGe |
|            2 |     1147 | 2024-12-27 | IHC Esports     | W   | 0.777      | 0.396        | 0.002 (0.001)    | 0.239 (0.074)    | 0 (0.000) |    17.58 | 18yM, AE, captainMo, DD, xiaosaGe |
|            1 |     1170 | 2024-12-26 | Rare Atom       | L   | 0.770      | -            | -                | -                | -         |    -1.74 | 18yM, AE, captainMo, DD, xiaosaGe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
