### Roster Details<br />
Team Name: RED Canids Academy<br />
Roster: edv, FasteR, gtw, n0page, sanc<br />
Global Rank: [151](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [37]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  647.4<br />
<br />
Final Rank Value (647.4) = Starting Rank Value (647.4) + Head To Head Adjustments (-0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.289[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 647.4
- 400 + ( ( 0.120 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 647.4


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
|            6 |      908 | 2024-12-12 | Players (Brazilian team) | L   | 0.426      | -            | -                | -                | -         |    -5.43 | edv, FasteR, gtw, n0page, sanc |
|            5 |     1151 | 2024-11-30 | Players (Brazilian team) | W   | 0.345      | 0.143        | 0.008 (0.000)    | 0.541 (0.027)    | 0 (0.000) |     6.60 | edv, FasteR, gtw, n0page, sanc |
|            4 |     1185 | 2024-11-29 | Galorys Academy          | W   | 0.339      | 0.143        | 0.000 (0.000)    | 0.037 (0.002)    | 0 (0.000) |     2.16 | edv, FasteR, gtw, n0page, sanc |
|            3 |     1591 | 2024-11-09 | MIBR Academy             | L   | 0.206      | -            | -                | -                | -         |    -3.27 | edv, FasteR, gtw, n0page, sanc |
|            2 |     1681 | 2024-11-03 | UNO MILLE                | L   | 0.165      | -            | -                | -                | -         |    -2.36 | edv, FasteR, gtw, n0page, sanc |
|            1 |     1701 | 2024-11-02 | Intense Game             | W   | 0.160      | 0.333        | 0.001 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     2.25 | edv, FasteR, gtw, n0page, sanc |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($792.35)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-30 |      0.345 | $1,339.06      | $462.35         |
| 2024-11-03 |      0.165 | $2,000.00      | $330.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
