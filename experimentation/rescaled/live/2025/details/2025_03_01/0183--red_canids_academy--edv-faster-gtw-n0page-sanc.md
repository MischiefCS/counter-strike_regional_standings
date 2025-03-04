### Roster Details<br />
Team Name: RED Canids Academy<br />
Roster: edv, FasteR, gtw, n0page, sanc<br />
Global Rank: [183](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [46]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  648.8<br />
<br />
Final Rank Value (648.8) = Starting Rank Value (648.8) + Head To Head Adjustments (0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 648.8
- 400 + ( ( 0.131 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 648.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      908 | 2024-12-12 | Players (Brazilian team) | L   | 0.674      | -            | -                | -                | -         |    -8.39 | edv, FasteR, gtw, n0page, sanc |
|            5 |     1151 | 2024-11-30 | Players (Brazilian team) | W   | 0.594      | 0.322        | 0.008 (0.002)    | 0.566 (0.108)    | 0 (0.000) |    11.58 | edv, FasteR, gtw, n0page, sanc |
|            4 |     1185 | 2024-11-29 | Galorys Academy          | W   | 0.587      | 0.322        | 0.000 (0.000)    | 0.042 (0.008)    | 0 (0.000) |     3.75 | edv, FasteR, gtw, n0page, sanc |
|            3 |     1591 | 2024-11-09 | MIBR Academy             | L   | 0.454      | -            | -                | -                | -         |    -7.07 | edv, FasteR, gtw, n0page, sanc |
|            2 |     1681 | 2024-11-03 | UNO MILLE                | L   | 0.413      | -            | -                | -                | -         |    -5.53 | edv, FasteR, gtw, n0page, sanc |
|            1 |     1701 | 2024-11-02 | Intense Game             | W   | 0.408      | 0.333        | 0.001 (0.000)    | 0.024 (0.003)    | 0 (0.000) |     5.72 | edv, FasteR, gtw, n0page, sanc |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,621.55)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-30 |      0.594 | $1,339.06      | $794.88         |
| 2024-11-03 |      0.413 | $2,000.00      | $826.67         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
