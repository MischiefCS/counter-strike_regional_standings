### Roster Details<br />
Team Name: BetBoom Team<br />
Roster: Ax1Le, Boombl4, Magnojez, s1ren, zorte<br />
Global Rank: [29](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [20]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  902.0<br />
<br />
Final Rank Value (902.0) = Starting Rank Value (898.0) + Head To Head Adjustments (3.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.500[<sup>1</sup>](#table2)
- Bounty Collected: 0.340[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.215<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 898.0
- 400 + ( ( 0.215 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 898.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      331 | 2025-02-11 | Astralis          | L   | 0.459      | -            | -                | -                | -         |    -0.05 | Ax1Le, Boombl4, Magnojez, s1ren, zorte  |
|           10 |      338 | 2025-02-11 | Hesta             | W   | 0.457      | 0.143        | 0.000 (0.000)    | 0.423 (0.028)    | 0 (0.000) |     1.85 | Ax1Le, Boombl4, Magnojez, s1ren, zorte  |
|            9 |      366 | 2025-02-10 | Team Falcons      | L   | 0.451      | -            | -                | -                | -         |    -0.06 | Ax1Le, Boombl4, Magnojez, s1ren, zorte  |
|            8 |      375 | 2025-02-10 | Nemiga Gaming     | W   | 0.449      | 0.143        | 0.011 (0.001)    | 0.243 (0.016)    | 0 (0.000) |     3.98 | Ax1Le, Boombl4, Magnojez, s1ren, zorte  |
|            7 |      503 | 2025-02-07 | Passion UA        | L   | 0.430      | -            | -                | -                | -         |    -9.15 | Ax1Le, Boombl4, Magnojez, s1ren, zorte  |
|            6 |      531 | 2025-02-06 | Ninjas in Pyjamas | W   | 0.423      | 0.143        | 0.000 (0.000)    | 0.657 (0.040)    | 0 (0.000) |     1.41 | Ax1Le, Boombl4, Magnojez, s1ren, zorte  |
|            5 |      559 | 2025-02-05 | Passion UA        | L   | 0.417      | -            | -                | -                | -         |    -9.15 | Ax1Le, Boombl4, Magnojez, s1ren, zorte  |
|            4 |      569 | 2025-02-05 | Ninjas in Pyjamas | W   | 0.416      | 0.143        | 0.000 (0.000)    | 0.657 (0.039)    | 0 (0.000) |     1.28 | Ax1Le, Boombl4, Magnojez, s1ren, zorte  |
|            3 |      666 | 2025-01-23 | G2 Esports        | L   | 0.332      | -            | -                | -                | -         |    -1.70 | Ax1Le, KaiR0N-, Magnojez, nafany, s1ren |
|            2 |      670 | 2025-01-19 | FURIA             | W   | 0.304      | 0.363        | 0.066 (0.007)    | 0.193 (0.021)    | 0 (0.000) |     6.33 | Ax1Le, Boombl4, Magnojez, s1ren, zorte  |
|            1 |      677 | 2025-01-17 | MOUZ              | W   | 0.292      | 0.363        | 1.000 (0.106)    | 0.567 (0.060)    | 0 (0.000) |     9.17 | Ax1Le, Boombl4, Magnojez, s1ren, zorte  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,770.83)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-26 |      0.351 | $25,000.00     | $8,770.83       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
