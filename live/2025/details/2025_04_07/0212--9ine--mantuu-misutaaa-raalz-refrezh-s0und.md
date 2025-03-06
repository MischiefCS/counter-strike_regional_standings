### Roster Details<br />
Team Name: 9INE<br />
Roster: mantuu, misutaaa, raalz, refrezh, s0und<br />
Global Rank: [212](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [119]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  506.8<br />
<br />
Final Rank Value (506.8) = Starting Rank Value (506.7) + Head To Head Adjustments (0.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 506.7
- 400 + ( ( 0.052 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 506.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1234 | 2024-11-26 | WOPA Esport          | L   | 0.318      | -            | -                | -                | -         |    -1.92 | mantuu, misutaaa, raalz, refrezh, s0und |
|           13 |     1243 | 2024-11-25 | Insilio              | L   | 0.311      | -            | -                | -                | -         |    -4.33 | mantuu, misutaaa, raalz, refrezh, s0und |
|           12 |     1246 | 2024-11-25 | Iberian Soul         | L   | 0.310      | -            | -                | -                | -         |    -1.75 | mantuu, misutaaa, raalz, refrezh, s0und |
|           11 |     1639 | 2024-11-07 | Tricked Esport       | L   | 0.190      | -            | -                | -                | -         |    -1.08 | mantuu, misutaaa, raalz, refrezh, s0und |
|           10 |     1651 | 2024-11-06 | Wild Lotus           | L   | 0.183      | -            | -                | -                | -         |    -2.41 | mantuu, misutaaa, raalz, refrezh, s0und |
|            9 |     1663 | 2024-11-05 | Aurora Gaming        | L   | 0.177      | -            | -                | -                | -         |    -1.26 | mantuu, misutaaa, raalz, refrezh, s0und |
|            8 |     1674 | 2024-11-04 | ECSTATIC             | W   | 0.171      | 0.143        | 0.025 (0.001)    | 0.919 (0.022)    | 0 (0.000) |     4.57 | mantuu, misutaaa, raalz, refrezh, s0und |
|            7 |     1676 | 2024-11-04 | ARCRED               | W   | 0.170      | 0.143        | 0.009 (0.000)    | 0.259 (0.006)    | 0 (0.000) |     3.94 | mantuu, misutaaa, raalz, refrezh, s0und |
|            6 |     1677 | 2024-11-04 | Natus Vincere Junior | L   | 0.169      | -            | -                | -                | -         |    -0.54 | mantuu, misutaaa, raalz, refrezh, s0und |
|            5 |     1689 | 2024-11-03 | ECSTATIC             | L   | 0.164      | -            | -                | -                | -         |    -0.76 | mantuu, misutaaa, raalz, refrezh, s0und |
|            4 |     1694 | 2024-11-03 | NewBALLS             | W   | 0.163      | 0.384        | 0.000 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     2.51 | mantuu, misutaaa, raalz, refrezh, s0und |
|            3 |     1750 | 2024-10-31 | AMKAL ESPORTS        | L   | 0.144      | -            | -                | -                | -         |    -1.97 | mantuu, misutaaa, raalz, refrezh, s0und |
|            2 |     1787 | 2024-10-29 | Team Sampi           | W   | 0.130      | 0.371        | 0.007 (0.000)    | 0.048 (0.002)    | 0 (0.000) |     3.04 | mantuu, misutaaa, raalz, refrezh, s0und |
|            1 |     1812 | 2024-10-27 | HOTU                 | W   | 0.116      | 0.384        | 0.000 (0.000)    | 0.187 (0.008)    | 0 (0.000) |     1.96 | mantuu, misutaaa, raalz, refrezh, s0und |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
