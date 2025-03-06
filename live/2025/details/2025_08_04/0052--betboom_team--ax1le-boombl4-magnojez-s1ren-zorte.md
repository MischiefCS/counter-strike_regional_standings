### Roster Details<br />
Team Name: BetBoom Team<br />
Roster: Ax1Le, Boombl4, Magnojez, s1ren, zorte<br />
Global Rank: [52](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [36]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  506.1<br />
<br />
Final Rank Value (506.1) = Starting Rank Value (505.0) + Head To Head Adjustments (1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.160[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.040<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 505.0
- 400 + ( ( 0.040 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 505.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      331 | 2025-02-11 | Astralis          | L   | 0.039      | -            | -                | -                | -         |     0.00 | Ax1Le, Boombl4, Magnojez, s1ren, zorte |
|            5 |      338 | 2025-02-11 | Hesta             | W   | 0.037      | 0.143        | 0.000 (0.000)    | 0.339 (0.002)    | 0 (0.000) |     0.60 | Ax1Le, Boombl4, Magnojez, s1ren, zorte |
|            4 |      366 | 2025-02-10 | Team Falcons      | L   | 0.031      | -            | -                | -                | -         |     0.00 | Ax1Le, Boombl4, Magnojez, s1ren, zorte |
|            3 |      375 | 2025-02-10 | Nemiga Gaming     | W   | 0.029      | 0.143        | 0.013 (0.000)    | 0.121 (0.001)    | 0 (0.000) |     0.62 | Ax1Le, Boombl4, Magnojez, s1ren, zorte |
|            2 |      503 | 2025-02-07 | Passion UA        | L   | 0.010      | -            | -                | -                | -         |    -0.10 | Ax1Le, Boombl4, Magnojez, s1ren, zorte |
|            1 |      531 | 2025-02-06 | Ninjas in Pyjamas | W   | 0.003      | 0.143        | 0.000 (0.000)    | 0.567 (0.000)    | 0 (0.000) |     0.03 | Ax1Le, Boombl4, Magnojez, s1ren, zorte |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
