### Roster Details<br />
Team Name: Ex-GR Gaming<br />
Roster: 7nation, mediocrity, Runnin, SALO_MUX, weqt2<br />
Global Rank: [134](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [89]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  669.0<br />
<br />
Final Rank Value (669.0) = Starting Rank Value (678.8) + Head To Head Adjustments (-9.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.320[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.005[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 678.8
- 400 + ( ( 0.135 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 678.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1045 | 2024-12-05 | Chinggis Warriors | L   | 0.376      | -            | -                | -                | -         |    -5.51 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            9 |     1057 | 2024-12-04 | DogEvil           | L   | 0.375      | -            | -                | -                | -         |    -8.46 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            8 |     1345 | 2024-11-21 | The Huns Esports  | L   | 0.282      | -            | -                | -                | -         |    -2.38 | mediocrity, Runnin, SALO_MUX, Sange, weqt2       |
|            7 |     1352 | 2024-11-20 | Harizma           | L   | 0.282      | -            | -                | -                | -         |    -4.86 | dukefissura, mediocrity, Runnin, SALO_MUX, weqt2 |
|            6 |     1625 | 2024-11-08 | IHC Esports       | W   | 0.196      | 0.333        | 0.002 (0.000)    | 0.045 (0.003)    | 0 (0.000) |     2.79 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            5 |     1627 | 2024-11-07 | Chinggis Warriors | W   | 0.195      | 0.333        | 0.010 (0.001)    | 0.522 (0.034)    | 0 (0.000) |     3.34 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            4 |     1668 | 2024-11-04 | IHC Esports       | W   | 0.175      | 0.333        | 0.002 (0.000)    | 0.045 (0.003)    | 0 (0.000) |     2.51 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            3 |     1670 | 2024-11-04 | Chinggis Warriors | W   | 0.175      | 0.333        | 0.010 (0.001)    | 0.522 (0.030)    | 0 (0.000) |     3.04 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            2 |     1941 | 2024-10-16 | Chinggis Warriors | L   | 0.043      | -            | -                | -                | -         |    -0.61 | 7nation, mediocrity, Overdue, SALO_MUX, weqt2    |
|            1 |     1963 | 2024-10-15 | -72C              | W   | 0.036      | 0.417        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.036) |     0.34 | 7nation, mediocrity, Overdue, SALO_MUX, weqt2    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,682.37)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-08 |      0.196 | $7,500.00      | $1,471.18       |
| 2024-11-03 |      0.162 | $1,300.00      | $211.19         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
