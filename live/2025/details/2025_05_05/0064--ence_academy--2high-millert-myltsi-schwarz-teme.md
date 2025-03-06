### Roster Details<br />
Team Name: ENCE Academy<br />
Roster: 2high, millert, myltsi, Schwarz, teme<br />
Global Rank: [64](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [44]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  776.1<br />
<br />
Final Rank Value (776.1) = Starting Rank Value (786.5) + Head To Head Adjustments (-10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.149[<sup>2</sup>](#table1)

The average of these factors is 0.177<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 786.5
- 400 + ( ( 0.177 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 786.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      112 | 2025-02-22 | JANO Esports       | L   | 0.718      | -            | -                | -                | -         |    -8.13 | 2high, millert, myltsi, Schwarz, teme |
|            8 |      122 | 2025-02-21 | HAVU               | W   | 0.712      | 0.143        | 0.003 (0.000)    | 0.000 (0.000)    | 1 (0.712) |     4.90 | 2high, millert, myltsi, Schwarz, teme |
|            7 |      757 | 2024-12-24 | WOPA Esport        | L   | 0.317      | -            | -                | -                | -         |    -5.16 | 2high, millert, myltsi, Schwarz, teme |
|            6 |      761 | 2024-12-23 | KONO.ECF           | L   | 0.309      | -            | -                | -                | -         |    -5.63 | 2high, millert, myltsi, Schwarz, teme |
|            5 |      809 | 2024-12-19 | ESC Gaming         | W   | 0.282      | 0.333        | 0.000 (0.000)    | 0.224 (0.021)    | 0 (0.000) |     1.71 | 2high, millert, myltsi, Schwarz, teme |
|            4 |      818 | 2024-12-18 | ALASKA             | W   | 0.277      | 0.333        | 0.035 (0.003)    | 0.568 (0.052)    | 0 (0.000) |     6.48 | 2high, millert, myltsi, Schwarz, teme |
|            3 |     1113 | 2024-12-02 | Illuminar Gaming   | L   | 0.171      | -            | -                | -                | -         |    -3.61 | 2high, millert, myltsi, Schwarz, teme |
|            2 |     1190 | 2024-11-29 | Astralis Talent    | W   | 0.151      | 0.333        | 0.001 (0.000)    | 0.218 (0.011)    | 0 (0.000) |     1.71 | 2high, millert, myltsi, Schwarz, teme |
|            1 |     1208 | 2024-11-28 | Dark Cloud Esports | L   | 0.143      | -            | -                | -                | -         |    -2.73 | 2high, millert, myltsi, Schwarz, teme |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,074.32)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.718 | $1,046.46      | $751.05         |
| 2024-12-25 |      0.323 | $1,000.00      | $323.26         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
